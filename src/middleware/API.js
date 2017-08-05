import request from 'superagent';
import {API_ROOT} from 'constants/API';
import * as types from 'constants/actionTypes/PostsActionTypes';

const getAllPosts = () => {
    return new Promise((resolve, reject) => {
        request.get(`${API_ROOT}/`).end((err, response) => {
            !err ? resolve(response.body) : reject(err);
        });
    })
}

const sendReqForIncrementLike = (id) => {
  return new Promise((resolve, reject) => {
    request.post(`${API_ROOT}/like`).send(`id=${id}`).end((err, response) => {
      !err ? resolve({code: response, id: id}) : reject(err);
    })
  })
}

const nextAction = (action, data) => {
    return Object.assign({}, action, data, {'API_CALL': undefined});
}

export default store => next => action => {
    let promise = null;

    if(!('API_CALL' in action)) return next(action);

    switch (action['API_CALL'].type) {
        case types.FETCH_POSTS_SUCCESS: 
            promise = getAllPosts();
            promise.then((response) => {
                return next(nextAction(action, {response, type: 'FETCH_POSTS_SUCCESS'}))
            }); break;
        case types.INCREMENT_LIKES: 
            promise = sendReqForIncrementLike(action['API_CALL'].id);
            promise.then((data) => {
                let id = data.id;
                return data.code.status == 200 && next(nextAction(action, {id, type: 'INCREMENT_LIKES'}))
            }).catch((err) => (console.log('Error at incrementLikes', err))); break;
        case types.SEARCH_POSTS:
            let query = action['API_CALL'].query;
            return next(nextAction(action, {query, type: 'SEARCH_POSTS'}))  
        default: break;
    }

    return promise;
}