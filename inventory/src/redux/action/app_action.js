import {
    RESET_APP,
    SET_USER_INFO,
} from "../util/constant_util";

/**
 *
 *
 * @return {object} An action object with a type of RESET_APP
 */
export function reset_app(payload) {
    return {
        type : RESET_APP,
        payload
    };
}


/**
 *
 *
 * @return {object} An action object with a type of SET_USER_INFO
 */
export function set_user_info(payload) {
    return {
        type : SET_USER_INFO,
        payload
    };
}
