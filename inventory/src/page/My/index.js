/**
 * Created by nick on 2018/6/28.
 */

/**
 * Created by nick on 2018/6/28.
 */
import { Button, Env, Input, ThemeProvider, View, ScrollView, Page, Text } from "weex-nuke";
import { createElement,Component } from "rax";
const { isWeb, appInfo } = Env;
const { StyleProvider } = ThemeProvider;

import MyImage from '../../component/MyImage';
import MyLabelExtraComponent from "../../component/MyLabelExtraComponent";
export default class MyPage extends Component {
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
    onPress_mle_base_info = () => {

        console.log(this);
        alert('222')
        const { navigation } = this.props;
        const { navigate } = navigation;
        navigate(constant_util.route_name.BaseInfo, { })
    };
    onPress_mle_bill = () => {

        const { navigation } = this.props;
        const { navigate } = navigation;
        navigate(constant_util.route_name.Bill, { })
    };
    onPress_mle_provider = () => {

        const { navigation } = this.props;
        const { navigate } = navigation;
        navigate(constant_util.route_name.Provider, { })
    };
    onPress_mle_customer = () => {

        const { navigation } = this.props;
        const { navigate } = navigation;
        navigate(constant_util.route_name.Customer, { })
    };
    onPress_mle_product = () => {

        const { navigation } = this.props;
        const { navigate } = navigation;
        navigate(constant_util.route_name.Product, { })
    };
    onPress_mle_logout = () => {
        view_util.reset2Login(this);
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

                        <MyLabelExtraComponent
                            title={constant_show_util.user_name}
                            extra={''}
                        />
                        {view_util.get_separator_h()}
                        <MyLabelExtraComponent
                            title={constant_show_util.base_info}
                            extra={''}
                            onPress={this.onPress_mle_base_info}
                        />
                        {view_util.get_separator_h()}
                        <MyLabelExtraComponent
                            title={constant_show_util.bill}
                            extra={''}
                            onPress={this.onPress_mle_bill}
                        />
                        {view_util.get_separator_h()}
                        <MyLabelExtraComponent
                            title={constant_show_util.provider}
                            extra={''}
                            onPress={this.onPress_mle_provider}
                        />
                        {view_util.get_separator_h()}
                        <MyLabelExtraComponent
                            title={constant_show_util.customer}
                            extra={''}
                            onPress={this.onPress_mle_customer}
                        />
                        {view_util.get_separator_h()}
                        <MyLabelExtraComponent
                            title={constant_show_util.product}
                            extra={''}
                            onPress={this.onPress_mle_product}
                        />
                        {view_util.get_separator_h()}
                        {view_util.get_separator_h(style_util.style_base_value_util.sizeXXL,style_util.style_base_value_util.backgroundColorTransparent)}
                        {view_util.get_separator_h()}
                        <MyLabelExtraComponent
                            title={constant_show_util.logout}
                            extra={''}
                            onPress={this.onPress_mle_logout}
                        />
                        {view_util.get_separator_h()}

                    </ScrollView>

                </View>
            </StyleProvider>
        );
    }

}
