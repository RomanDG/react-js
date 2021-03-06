import request from 'superagent';
import {API_ROOT} from 'constants/API';
import { stringify } from 'qs';
import { pick } from 'lodash/object';


const nextAction = (action, data) => Object.assign({}, action, data);


const func = ({endpoint, method, query}) => new Promise((resolve, reject) => {
  const r = request[method](`${API_ROOT}${endpoint}`);
  if (query != null) r.send(stringify(query));
  r.end((err, response) => {
    if (err) {
      reject(err);
    } else if (query == null) {
      resolve(response.body);
    } else {
      resolve(response.text);
    }
  });
});

export default store => next => action => {
  if (!('API_CALL' in action)) return next(action);
  const promise = func(pick(action['API_CALL'], ['endpoint', 'method', 'query']));
  promise.then((response) => next(nextAction(action, {response, type: action['API_CALL'].type})));

  return promise;
};