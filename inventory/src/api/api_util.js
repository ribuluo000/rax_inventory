/**
 * Created by nick on 2018/6/29.
 */
import 'regenerator/runtime';
import Toast from 'universal-toast';
import CODE from './CODE';
import constant_show_util from '../util/constant_show_util';

const on_catch_common = (err)=>{
    Toast.show(err);
    // Toast.show(JSON.stringify(err));
};
const get_default_msg = (jsonObj)=>{
    let obj = CODE[`code_${jsonObj.code}`];
    if(obj){
        return obj.description;
    }else {
        return constant_show_util.unknown_code;
    }
};

export default {
    get_msg:(jsonObj)=>{
        return jsonObj.msg || get_default_msg();
    },
    login: async (data={},callback)=>{
        let url = constant_api_url.API_LOGIN_URL;
        let ret = undefined;
        try {
            ret = await request(url,options_common(data));
            callback && callback(undefined,ret);
        }catch (err){
            callback ? callback(err):on_catch_common(err);
        }
        return ret;
    },
};