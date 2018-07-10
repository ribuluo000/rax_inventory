

import {

    RESET_Bill_Add,
    CHANGE_SELECTED_PROVIDER,
    CHANGE_SELECTED_CUSTOMER,
    ADD_PRODUCT,
    REMOVE_PRODUCT,

} from "../util/constant_util";


/**
 * RESET_Bill_Add
 *
 * @param  {payload} payload The new data of the app
 *
 * @return {object}    An action object with a type of RESET_Bill_Add
 */
export function reset_bill_add(payload) {
    return {
        type: RESET_Bill_Add,
        payload,
    };
}


/**
 * CHANGE_SELECTED_PROVIDER
 *
 * @param  {payload} payload The new data of the app
 *
 * @return {object}    An action object with a type of CHANGE_SELECTED_PROVIDER
 */
export function change_selected_provider(payload) {
    return {
        type: CHANGE_SELECTED_PROVIDER,
        payload,
    };
}



/**
 * CHANGE_SELECTED_CUSTOMER
 *
 * @param  {payload} payload The new data of the app
 *
 * @return {object}    An action object with a type of CHANGE_SELECTED_CUSTOMER
 */
export function change_selected_customer(payload) {
    return {
        type: CHANGE_SELECTED_CUSTOMER,
        payload,
    };
}


/**
 * ADD_PRODUCT
 *
 * @param  {payload} payload The new data of the app
 *
 * @return {object}    An action object with a type of ADD_PRODUCT
 */
export function add_product(payload) {
    return {
        type: ADD_PRODUCT,
        payload,
    };
}


/**
 * REMOVE_PRODUCT
 *
 * @param  {payload} payload The new data of the app
 *
 * @return {object}    An action object with a type of REMOVE_PRODUCT
 */
export function remove_product(payload) {
    return {
        type: REMOVE_PRODUCT,
        payload,
    };
}