/**
 * Created by nick on 2018/6/28.
 */
import { Button, Env, Input, ThemeProvider, View,ScrollView } from "weex-nuke";
import { createElement,Component } from "rax";
const { isWeb, appInfo } = Env;
const { StyleProvider } = ThemeProvider;



export default class MyPage extends Component {
    static navigationOptions = {
        title : 'Welcome'
    };

    constructor() {
        super();
        this.state = {

        };

    }

    onPress_btn_login = () => {
        console.log(this.ref_Input_user_name);
        let user_name = this.ref_Input_user_name.wrappedInstance.refs.baseinput.state.value;
        let password = this.ref_Input_password.wrappedInstance.refs.baseinput.state.value;
        console.log(user_name, password);
        const { navigation, api_login } = this.props;
        const { navigate } = navigation;

        api_login();
        navigate(constant_util.route_name.Register, { name : 'Jane' })
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