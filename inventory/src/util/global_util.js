/**
 * Created by nick on 2018/6/28.
 */
import my_date_time_util from "./my_date_time_util";
import constant_util from "./constant_util";
import constant_show_util from "./constant_show_util";
import string_util from "./string_util";
import style_util from "./style_util";
import view_props_util from "./view_props_util";
import view_util from "./view_util";
import api_util from "../api/api_util";
import CODE from "../constants/CODE";
import MSG from "../constants/MSG";
import "regenerator/runtime";
import { options_common, request } from "./request";
import Toast from "universal-toast";
import { fromJS,Map,Set,List } from "immutable";

export default {
    init : () => {

        /**
         *
         * global is undefined in release, so use window instead.
         */

        // let global = {};

        global.IfromJS = fromJS;
        global.IMap = Map;
        global.ISet = Set;
        global.IList = List;
        global.my_date_time_util = my_date_time_util;
        global.string_util = string_util;
        global.style_util = style_util;
        global.constant_show_util = constant_show_util;
        global.constant_util = constant_util;
        global.view_props_util = view_props_util;
        global.view_props_util = view_props_util;
        global.view_util = view_util;
        global.api_util = api_util;
        global.CODE = CODE;
        global.MSG = MSG;
        global.request = request;
        global.options_common = options_common;
        global.Toast = Toast;


        /**
         *
         * global is undefined in release, so use window instead.
         */
        // for (let k in
        //     global) {
        //     window[ k ] = global[ k ];
        // }
        console.log(global);
        console.log(window);

    },
};