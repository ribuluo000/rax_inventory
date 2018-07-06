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

import MyLabelExtraComponent from "../../component/MyLabelExtraComponent";
import BaseComponent from "../../common/BaseComponent";
export default class MyPage extends BaseComponent {
    static navigationOptions = {
        title : ({ state }) => state.params.name,
        header : false
    };

    constructor() {
        super();
        this.state = {
        };

    }

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
        const { navigation, api_login,app_reducer } = this.props;
        const { navigate } = navigation;

        // return <h1>aaaaa</h1>;
        let user_name = app_reducer.get('user_name');
        console.log(this);


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
                            extra={user_name}
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
