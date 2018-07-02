/**
 * Created by nick on 2018/6/28.
 */
import { Button, Env, Input, ThemeProvider, View, ScrollView, Text } from "weex-nuke";
import { createElement,Component } from "rax";
import BaseComponent from "../../common/BaseComponent";
const { isWeb, appInfo } = Env;
const { StyleProvider } = ThemeProvider;



export default class MyPage extends BaseComponent {
    static navigationOptions = {
        title : 'Welcome'
    };

    constructor() {
        super();
        this.state = {

        };

    }

    onPress_btn_login = async () => {



        console.log(this.ref_Input_user_name);
        let user_name = this.ref_Input_user_name.wrappedInstance.refs.baseinput.state.value;
        let password = this.ref_Input_password.wrappedInstance.refs.baseinput.state.value;
        console.log(user_name, password);

        let body = {
            user_name, password
        };

        view_util.show_loading();
        let jsonObj = await api_util.login(body);
        view_util.hide_loading();

        if(!jsonObj){
            return;
        }

        if(!(jsonObj.code == CODE.code_0.code)){
            view_util.show_toast(api_util.get_msg(jsonObj));
            return;
        }
        const { navigation } = this.props;
        const { navigate } = navigation;
        navigate(constant_util.route_name.Register, { name : 'Jane' })
        return;
    };

    render() {

        return (
            <StyleProvider
                style={style_util.md}
                androidConfigs={{ materialDesign : true }}
            >

                <View style={style_util.common_container}>


                    <ScrollView
                        ref={(ref)=>{
                            this.ref_ScrollView = ref;
                        }}
                        {...view_props_util.common_ScrollView}
                    >


                    <Input
                        maxLength={19}
                        type="text"
                        placeholder={constant_show_util.please_input_user_name}
                        ref={(ref) => {
                            this.ref_Input_user_name = ref;
                        }}
                    />

                    <Input
                        maxLength={19}
                        type="password"
                        placeholder={constant_show_util.please_input_password}
                        ref={(ref) => {
                            this.ref_Input_password = ref;
                        }}
                    />

                    <Button
                        type="primary"
                        onPress={this.onPress_btn_login}
                    >
                        {constant_show_util.login}
                    </Button>

                    </ScrollView>

                </View>

            </StyleProvider>
        );
    }

}