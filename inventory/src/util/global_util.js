/**
 * Created by nick on 2018/6/28.
 */
import constant_util from "./constant_util";
import constant_show_util from "./constant_show_util";
import style_util from "./style_util";
import view_props_util from "./view_props_util";
export default {
    init : () => {

        global.style_util = style_util;
        global.constant_show_util = constant_show_util;
        global.constant_util = constant_util;
        global.view_props_util = view_props_util;

        console.log(global);
    },
};