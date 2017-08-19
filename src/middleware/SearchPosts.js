export default store => next => action => {
  if (!('SEARCH' in action)) return next(action);

  const nextAction = (action, data) => Object.assign({}, action, data);

  if (action['SEARCH'].type == 'SEARCH_POSTS') {
    const query = action['SEARCH'].query;
    return next(nextAction(action, {query, type: 'SEARCH_POSTS'}));            
  }
};