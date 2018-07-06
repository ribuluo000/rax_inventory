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
    initData = ()=>{

    };

    constructor() {
        super();
        this.initData();
        this.state = {
            setState:(state)=>{
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

        let name = this.ref_Input_name.wrappedInstance.refs.baseinput.state.value;
        let remark = this.ref_Input_remark.wrappedInstance.refs.baseinput.state.value;
        let telephone = this.ref_Input_telephone.wrappedInstance.refs.baseinput.state.value;

        let access_token = 'access_token';      //todo need change
        let user_id = '5b31b58fdd66b03a1dcb5434';   //todo need change
        let body = {
            access_token,
            user_id,
            name,
            remark,
            telephone,
        };

        view_util.show_loading();
        let jsonObj = await api_util.customer_add(body);
        view_util.hide_loading();

        if(!jsonObj){
            return;
        }

        if(!(jsonObj.code == CODE.code_0.code)){

            api_util.on_custom_exception_common(jsonObj);
            return;
        }

        api_util.on_success_common(jsonObj);

        this.onPress_back();
    };



    check_info = () => {
        let name = this.ref_Input_name.wrappedInstance.refs.baseinput.state.value;

        if (string_util.is_empty(name)) {
            view_util.show_toast(MSG.MSG___name_can_not_be_empty);
            return false;

        }

        return true;

    };

    onPress_right_btn = ()=>{

        console.log('onPress_right_btn');
        console.log(this);

        if (!this.check_info()) {
            return;
        }

        this.api_call();
    };

    render() {
        const { navigation, api_login } = this.props;
        const { navigate } = navigation;

        // return <h1>aaaaa</h1>;

        return (
            <StyleProvider
                style={style_util.md}
                androidConfigs={{ materialDesign : true }}
            >
                <View style={style_util.common_container}>
                    <MyHeaderComponent
                        title={constant_show_util.customer}
                        onPress_back={this.onPress_back}
                        right_btn_text={constant_show_util.done}
                        onPress_right_btn={this.onPress_right_btn}

                    />


                    <ScrollView
                        ref="ref_ScrollView"
                        {...view_props_util.common_ScrollView}
                    >
                    <Input
                        maxLength={19}
                        type="text"
                        placeholder={constant_show_util.please_input_name}
                        ref={(ref) => {
                            this.ref_Input_name = ref;
                        }}
                    />
                    <Input
                        maxLength={19}
                        type="number"
                        placeholder={constant_show_util.please_input_telephone}
                        ref={(ref) => {
                            this.ref_Input_telephone = ref;
                        }}
                    />

                    <Input
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
