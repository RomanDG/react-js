import request from 'superagent';
import {API_ROOT} from 'constants/API';
import * as types from 'constants/actionTypes/PostsActionTypes';
import { stringify } from 'qs';
import { pick } from 'lodash/object';


const nextAction = (action, data) => {
    return Object.assign({}, action, data);
}


const func = ({endpoint, method, query}) => {
    return new Promise((resolve, reject) => {
        let r = request[method](`${API_ROOT}${endpoint}`);
        if(query != null) r.send(stringify(query));
        r.end((err, response) => {
            if(err){
                reject(err);
            }else if(query == null){
                resolve(response.body);
            }else{
                resolve({code: response, id: query.id});
            }
        })
    })
}

export default store => next => action => {
    
    if(!('API_CALL' in action)) return next(action);
    let promise = func(pick(action['API_CALL'], ['endpoint', 'method', 'query']));
    switch (action['API_CALL'].type) {
        case types.FETCH_POSTS_SUCCESS: 
            promise.then((response) => {
                return next(nextAction(action, {response, type: 'FETCH_POSTS_SUCCESS'}))
            }); break;
        case types.INCREMENT_LIKES: 
            promise.then((response) => {
                let id = response.id;
                debugger;
                return response.code.status == 200 && next(nextAction(action, {id, type: 'INCREMENT_LIKES'}))
            }).catch((err) => (console.log('Error at incrementLikes', err))); break;
        default: break;
    }

    return promise;
}