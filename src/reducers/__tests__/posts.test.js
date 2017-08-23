
import * as types from 'constants/actionTypes/PostsActionTypes';
import reducer from 'reducers/Posts';
import update from 'immutability-helper';

describe('Posts', () => {
  it('TEST INCREMENT_LIKES', () => {
    const state = {
      posts: [
        {
          id: 1,
          metaData: {
            currentLike: 0
          }
        }
      ]
    };

    const new_state = {
      posts: [
        {
          id: 1,
          metaData: {
            currentLike: 1
          }
        }
      ]
    };

    const response = 1; // первый пост, 

    const action = {
      type: types.INCREMENT_LIKES, 
      response: response
    }

    expect(reducer(state, action)).toEqual(new_state)
  });

  it('TEST UPDATE_POST', () => {
    const state = {
        posts: [
          {
            id: 1,
            text: "HI"
          },         
        ]
    };

    const new_state = {
        posts: [
          {
            id: 1,
            text: "HELLO"
          },
        ]
    };

    const response = '{"id":"1","text":"HELLO"}';
    
    const action = {
      type: types.UPDATE_POST, 
      response
    };

    expect(reducer(state, action)).toEqual(new_state)
  })
});