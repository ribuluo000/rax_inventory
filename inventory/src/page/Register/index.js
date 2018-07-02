/**
 * Created by nick on 2018/6/28.
 */

/**
 * Created by nick on 2018/6/28.
 */
import { Button, Env, Input, ThemeProvider, View, ScrollView, Page, Text } from "weex-nuke";
import { createElement,Component } from "rax";
import BaseComponent from "../../common/BaseComponent";
const { isWeb, appInfo } = Env;
const { StyleProvider } = ThemeProvider;


export default class MyPage extends BaseComponent {
    static navigationOptions = {
        title : ({ state }) => state.params.name,
        header : false
    };

    constructor() {
        super();
        this.state = {
            // user_name: '',
            // password: '',
            // status_user_name: 'error',
            // status_password: 'error',
            // errorMessage: 'errorMessage',
        };

    }

    // validate_user_name = (e)=>{
    //     console.log(e);
    //     console.log(this.refs.ref_input_user_name);
    //     console.log(this.state);
    //
    //     if(this.state.user_name.length<6){
    //         return false;
    //     }
    //     return true;
    // };
    // validate_password = (e)=>{
    //     console.log(e);
    //     console.log(this.state);
    //
    //     if(this.state.user_name.length<6){
    //         return false;
    //     }
    //     return true;
    // };

    onPress_btn_register = () => {
        console.log(this.ref_input_user_name);
        let user_name = this.ref_input_user_name.wrappedInstance.refs.baseinput.state.value;
        let password = this.ref_input_password.wrappedInstance.refs.baseinput.state.value;
        console.log(user_name, password);
        const { navigation, api_login } = this.props;
        const { navigate } = navigation;
        const { goBack } = this.props.navigation;
        goBack();
        return;


        api_login();
        navigate(constant_util.route_name.Register, { name : 'Jane' })
    };
    onPress_to_login = () => {

        const { navigation } = this.props;
        const { navigate } = navigation;
        navigate(constant_util.route_name.Login, { })
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

                    <ScrollView
                        ref="vscroller"
                        {...view_props_util.common_ScrollView}
                    >
                    <Input
                        maxLength={19}
                        type="text"
                        placeholder={constant_show_util.please_input_user_name}
                        ref={(ref) => {
                            this.ref_input_user_name = ref;
                        }}
                    />

                    <Input
                        maxLength={19}
                        type="password"
                        // value={this.state.password}
                        placeholder={constant_show_util.please_input_password}
                        ref={(ref) => {
                            this.ref_input_password = ref;
                        }}
                        // onInput={this.validate_password}
                        // status={this.state.status_password}
                        // errorMessage={this.state.errorMessage}
                    />
                    <Input
                        maxLength={19}
                        type="password"
                        placeholder={constant_show_util.please_input_repeat_password}
                        ref={(ref) => {
                            this.ref_input_repeat_password = ref;
                        }}
                    />

                    <Button
                        type="primary"
                        onPress={this.onPress_btn_register}
                    >
                        {constant_show_util.register}
                    </Button>


                        <Text
                            // numberOfLines={2}
                            // style={{
                            //     fontSize: 28,
                            //     textOverflow: 'ellipsis',
                            //     overflow: 'hidden',
                            //     color: '#333333',
                            //     lineHeight: 48,
                            //     height: 48 * 2
                            // }}

                            style={[
                                style_util.textAlignCenter,
                                style_util.fontSizeS,
                                style_util.paddingS,

                            ]}

                            onPress={this.onPress_to_login}
                        >
                            {constant_show_util.has_account_go_login}
                        </Text>
                    </ScrollView>

                </View>
            </StyleProvider>
        );
    }

}
