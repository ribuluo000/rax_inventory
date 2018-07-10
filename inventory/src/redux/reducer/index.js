import { combineReducers } from 'redux';
import auth_reducer from './auth_reducer';
import app_reducer from './app_reducer';
import bill_add_reducer from './bill_add_reducer';

export default combineReducers({
    app_reducer,
  auth_reducer,
    bill_add_reducer,
});
