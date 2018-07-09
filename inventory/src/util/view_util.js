/**
 * Created by nick on 2018/6/28.
 */
import { createElement,Component } from "rax";
import { View,Icon } from "weex-nuke";
import Toast from "universal-toast";

export default {

    show_loading : () => {
        console.log('show_loading');
    },
    hide_loading : () => {
        console.log('hide_loading');
    },
    show_toast : (msg) => {
        Toast.show(msg);
    },

    get_icon_font : (name,
        style = {
            fontSize : 36,
            color : '#8c8c8c'
        }) => {
        return (
            <Icon
                type={'iconfont'}
                version="v2" style={[ style ]} name={name}/>
        );
    },

    get_separator_h : (height = style_util.style_base_value_util.commonSeparatorHeight__Immutable__,
        backgroundColor = style_util.style_base_value_util.commonSeparatorColor) => {
        let v = (
            <View style={{
                height : height,
                width : '100%',
                backgroundColor : backgroundColor
            }}
            />
        );
        return v;
    },
    get_separator_v : (width = style_util.style_base_value_util.commonSeparatorHeight__Immutable__,
        backgroundColor = style_util.style_base_value_util.commonSeparatorColor) => {

        let v = (
            <View style={{
                height : '100%',
                width : width,
                backgroundColor : backgroundColor
            }}
            />
        );
        return v;
    },

    reset2Login:(that)=>{
        let { navigate } = that.props.navigation;
        navigate(constant_util.route_name.Login, { })
    },
    goBack:(that)=>{
        let { navigate,goBack } = that.props.navigation;
        goBack();
    },

};