/**
 * Created by nick on 2018/6/28.
 */
/*
 *
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from "immutable";

import {
    RESET_APP,
        SET_USER_INFO,
} from "../util/constant_util";

// The initial state of the App
export const initialState = fromJS({
    user_name : '',
    password : '',
    isAuthenticated : false,


    loading : false,
    error : false,
    user_id : '',
    access_token : '',

});

function app_reducer(state = initialState, action) {
    console.log('app_reducer',state, action);
    switch (action.type) {

        case RESET_APP:
            return initialState;

        case SET_USER_INFO:
            let access_token = action.payload.get('access_token');
            let user_id = action.payload.get('user_id');
            let user_name = action.payload.get('user_name');
            let is_authenticated = action.payload.get('is_authenticated');

            return state
                .set('is_authenticated', is_authenticated)
                .set('user_id', user_id)
                .set('access_token', access_token)
                .set('user_name', user_name)
                .set('loading', false);

        default:
            return state;
    }
}

export default app_reducer;
