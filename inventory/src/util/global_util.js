/**
 * Created by nick on 2018/6/28.
 */
import constant_util from "./constant_util";
import constant_show_util from "./constant_show_util";
import style_util from "./style_util";
export default {
    init : () => {

        global.style_util = style_util;
        global.constant_show_util = constant_show_util;
        global.constant_util = constant_util;
        console.log(global);
    },
};