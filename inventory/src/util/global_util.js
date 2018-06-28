/**
 * Created by nick on 2018/6/28.
 */
import constant_util from "./constant_util";
export default {
    init : () => {

        global.constant_util = constant_util;
        console.log(global);
    },
};