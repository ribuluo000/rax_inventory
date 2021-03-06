/**
 * Created by nick on 2018/6/28.
 */
/*
 * loginReducer
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
    /********************************************************* network start ******************************************************************/

        API_LOGIN, API_LOGIN_ERROR, API_LOGIN_SUCCESS
} from "../util/constant_util";

// The initial state of the App
export const initialState = fromJS({
    user_name : '',
    password : '',
    isAuthenticated : false,

    /****************************** network start **************************************/

    loading : false,
    error : false,
    data_user : {
        access_token : '',
        user_id : '',
    },
    /****************************** network end **************************************/

});

function auth_reducer(state = initialState, action) {
    switch (action.type) {
        /****************************** network start **************************************/

        case API_LOGIN:
            return state
                .set('loading', true)
                .set('error', false)
                .set('isAuthenticated', false)
                .set('data_user', {
                    access_token : '',
                    user_id : '',
                });
        case API_LOGIN_SUCCESS:
            let { access_token, user_id } = action.jsonObj.data;
            return state
                .set('data_user', {
                    access_token : access_token,
                    user_id : user_id,
                })
                .set('isAuthenticated', true)
                .set('loading', false);
        case API_LOGIN_ERROR:
            return state
                .set('error', action.error)
                .set('loading', false)
                .set('isAuthenticated', false)
                .set('data_user', {
                    access_token : '',
                    user_id : '',
                });

        /****************************** network end **************************************/

        default:
            return state;
    }
}

export default auth_reducer;
