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
                resolve(response.text);
            }
        })
    })
}

export default store => next => action => {
    
    if(!('API_CALL' in action)) return next(action);
    let promise = func(pick(action['API_CALL'], ['endpoint', 'method', 'query']));
    promise.then((response) => {
        return next(nextAction(action, {response, type: action['API_CALL'].type}))
    });

    return promise;
}