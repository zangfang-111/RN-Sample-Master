import _ from 'lodash';
import { 
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILD 
} from '../actions/login-actions';

const initialState = {
  onClickMenu: true,
}

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  
  switch(action.type) {
    case USER_LOGIN:
      newState.onClickMenu = !newState.onClickMenu;
      return newState;
    default:
      return state;
  }
}

export default reducer;