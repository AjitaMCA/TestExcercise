import {
 GET_INSTA_USERDETAIL_SUCCESS,
} from '../actions/instagramActions';

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
export default function insta(
  state = {
    userDetail: {}
  },
  action,
) {
  switch (action.type) {
    case GET_INSTA_USERDETAIL_SUCCESS:
      return Object.assign({}, state, {
        userDetail: action.userDetail
      });
    default:
      return state;
  }
}
