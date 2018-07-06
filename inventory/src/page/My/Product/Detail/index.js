/**
 * Created by nick on 2018/6/28.
 */

/**
 * Created by nick on 2018/6/28.
 */
import { Env, Input, ThemeProvider, View, ScrollView, } from "weex-nuke";
import { createElement,Component } from "rax";
const { isWeb, appInfo } = Env;
const { StyleProvider } = ThemeProvider;
import MyHeaderComponent from "../../../../component/MyHeaderComponent";
import BaseComponent from "../../../../common/BaseComponent";
export default class MyPage extends BaseComponent {
    static navigationOptions = {
        title : ({ state }) => state.params.name,
        header : false
    };

    initData = () => {
        let detail = this.props.navigation.state.params.detail;
        console.log('come in data', detail);

        this.name = detail.get('item').get('name');
        this._id = detail.get('item').get('_id');
        this.remark = detail.get('item').get('remark');
        this.create_time = detail.get('item').get('create_time');
    };

    constructor(props) {
        super(props);
        this.initData();
        this.state = {
            editable : false,
            setState : (state) => {
                this.setState(state);
            },
        };

    }

    // onPress_back = ()=>{
    //     console.log(this);
    //     view_util.goBack(this);
    // };


    api_call = async ()=> {
        console.log('onRefresh',this);

        //refresh data

        let name = this.name;
        let remark = this.remark;
        let id = this._id;

        let access_token = 'access_token';  //todo need change
        let user_id = '5b31b58fdd66b03a1dcb5434';   //todo need change
        let body = {
            access_token,
            user_id,
            name,
            remark,
            id,
        };

        view_util.show_loading();
        let jsonObj = await api_util.product_update_detail(body);
        view_util.hide_loading();

        if(!jsonObj){
            return;
        }

        if(!(jsonObj.get('code') == CODE.code_0.code)){

            api_util.on_custom_exception_common(jsonObj);
            return;
        }

        api_util.on_success_common(jsonObj);

        this.onPress_back();
    };



    check_info = () => {

        if (string_util.is_empty(this.name)) {
            view_util.show_toast(MSG.MSG___name_can_not_be_empty);
            return false;

        }

        return true;

    };

    onPress__button__done = ()=>{

        console.log('onPress_right_btn');
        console.log(this);

        if (!this.check_info()) {
            return;
        }

        this.api_call();
    };


    onPress__button__edit = () => {
        console.log('onPress__button__edit');
        this.state.setState({
            editable : true,
        })
    };

    onChange_name = (value) => {
        console.log('onChange_name', value);
        this.name = value;
    };
    onChange_remark = (value) => {
        console.log('onChange_remark', value);
        this.remark = value;
    };

    onPress_right_btn = ()=>{
        if(this.state.editable){
            this.onPress__button__done();
        }else {
            this.onPress__button__edit();
        }
    };

    render() {


        const {
            editable,
        } = this.state;

        const onPress__button__done = this.onPress__button__done;
        const onPress__button__edit = this.onPress__button__edit;
        const onChange_name = this.onChange_name;
        const onChange_remark = this.onChange_remark;

        let right_button_text = null;
        if (editable) {

            right_button_text = constant_show_util.done;
        } else {
            right_button_text = constant_show_util.edit;
        }


        return (
            <StyleProvider
                style={style_util.md}
                androidConfigs={{ materialDesign : true }}
            >
                <View style={style_util.common_container}>
                    <MyHeaderComponent
                        title={constant_show_util.product}
                        onPress_back={this.onPress_back}
                        right_btn_text={right_button_text}
                        onPress_right_btn={this.onPress_right_btn}

                    />


                    <ScrollView
                        ref="ref_ScrollView"
                        {...view_props_util.common_ScrollView}
                    >
                    <Input
                        disabled={!editable}
                        defaultValue={this.name}
                        onChange={onChange_name}
                        maxLength={19}
                        type="text"
                        placeholder={constant_show_util.please_input_name}
                        ref={(ref) => {
                            this.ref_Input_name = ref;
                        }}
                    />
                    <Input
                        disabled={!editable}
                        defaultValue={this.remark}
                        onChange={onChange_remark}
                        style={{ height: '300rem', marginBottom: '20rem' }}
                        // rows={20}
                        maxLength={100}
                        multiple={true}
                        id="remark"
                        placeholder={constant_show_util.please_input_remark}
                        ref={(ref) => {
                            this.ref_Input_remark = ref;
                        }}
                    />
                    </ScrollView>
                </View>
            </StyleProvider>
        );
    }

}
