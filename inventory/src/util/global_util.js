/**
 * Created by nick on 2018/6/28.
 */
import constant_util from "./constant_util";
import constant_show_util from "./constant_show_util";
import style_util from "./style_util";
import view_props_util from "./view_props_util";
import view_util from "./view_util";
import constant_api_url from "../api/constant_api_url_util";
import api_util from "../api/api_util";
import CODE from "../api/CODE";
import 'regenerator/runtime';
import { options_common, request } from "./request";
import Toast from 'universal-toast';
export default {
    init : () => {

        global.style_util = style_util;
        global.constant_show_util = constant_show_util;
        global.constant_util = constant_util;
        global.view_props_util = view_props_util;
        global.view_props_util = view_props_util;
        global.view_util = view_util;
        global.constant_api_url = constant_api_url;
        global.api_util = api_util;
        global.CODE = CODE;
        global.request = request;
        global.options_common = options_common;
        global.Toast = Toast;

        console.log(global);
    },
};