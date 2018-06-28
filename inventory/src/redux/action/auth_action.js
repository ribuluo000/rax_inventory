import {
    /****************************** network start **************************************/

        API_LOGIN, API_LOGIN_ERROR, API_LOGIN_SUCCESS
} from "../util/constant_util";

/****************************** network start **************************************/

/**
 * fetch the interface login, this action starts the request saga
 *
 * @return {object} An action object with a type of API_LOGIN
 */
export function api_login(user_name, password) {
    return {
        type : API_LOGIN,
        user_name, password
    };
}

/**
 * Dispatched when the jsonObj are loaded by the request saga
 *
 * @param  {object} jsonObj The data come from the server
 *
 * @return {object}      An action object with a type of API_LOGIN_SUCCESS passing the repos
 */
export function api_login_success(jsonObj) {
    return {
        type : API_LOGIN_SUCCESS,
        jsonObj,
    };
}

/**
 * Dispatched when loading the jsonObj fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of API_LOGIN_ERROR passing the error
 */
export function api_login_error(error) {
    return {
        type : API_LOGIN_ERROR,
        error,
    };
}

/****************************** network end **************************************/