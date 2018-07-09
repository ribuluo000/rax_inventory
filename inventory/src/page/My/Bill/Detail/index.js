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
import MyTopView1 from "./components/MyTopView1";
import MyTopView2 from "./components/MyTopView2";
import MyLabelExtraComponent from "../../../../component/MyLabelExtraComponent";
import MyListViewComponent from "../../../../component/MyListViewComponent";
const TYPE_VIEW_ORDER_NUMBER = 'TYPE_VIEW_ORDER_NUMBER';
const TYPE_VIEW_PRODUCTS = 'TYPE_VIEW_PRODUCTS';

export default class MyPage extends BaseComponent {
    static navigationOptions = {
        title : ({ state }) => state.params.name,
        header : false
    };

    initData = () => {
        let detail = this.props.navigation.state.params.detail;
        console.log('come in data', detail);

        this.symbol_money = detail.get('extra');
        this.name = detail.get('item').get('name');
        this._id = detail.get('item').get('_id');
        this.remark = detail.get('item').get('remark');
        this.create_time = my_date_time_util.format2YYYY_MM_DD__HH_mm_ss(detail.get('item').get('create_time'));
    };

    constructor(props) {
        super(props);
        this.initData();
        this.state = {
            data : null,
            setState : (state) => {
                this.setState(state);
            },
        };

    }

    // onPress_back = ()=>{
    //     console.log(this);
    //     view_util.goBack(this);
    // };



    componentDidMount() {
        this.api_call();

    }

    api_call = async () => {

        let access_token = 'access_token';  //todo need change
        let user_id = '5b31b58fdd66b03a1dcb5434'; //todo need change
        let id = this._id; //
        let body = {
            access_token,
            user_id,
            id,
        };

        view_util.show_loading();
        let jsonObj = await api_util.bill_detail(body);
        view_util.hide_loading();

        if (!jsonObj) {
            return;
        }

        if (!(jsonObj.get('code') == CODE.code_0.code)) {
            api_util.on_custom_exception_common(jsonObj);
            return;
        }

        this.state.setState({
            data : jsonObj.get('data')
        })

    };

    get_view_order_number = (order_number) => {
        if (!order_number) {
            return null;
        }

        const {
            intl,
        } = this.props;
        return (
            <MyLabelExtraComponent
                title={constant_show_util.order_number}
                extra={order_number}

            />
        );
    };

    renderRow = (item,i)=>{
        let v = (
            <View
                key={item.get('_id')}
                justify="between" direction="column">

                <MyLabelExtraComponent
                    title={constant_show_util.product_name}
                    extra={item.get('name_product')}

                />
                <MyLabelExtraComponent
                    title={constant_show_util.batch_name}
                    extra={item.get('name_batch')}

                />
                <MyLabelExtraComponent
                    title={constant_show_util.product_price}
                    extra={string_util.decimal2string_show(item.get('price'))}

                />
                <MyLabelExtraComponent
                    title={constant_show_util.product_count}
                    extra={string_util.decimal2string_show(item.get('count'))}

                />
                <MyLabelExtraComponent
                    title={constant_show_util.product_total_price}
                    extra={string_util.decimal2string_show(item.get('total_price'))}

                />
                <MyLabelExtraComponent
                    title={constant_show_util.remark}
                    extra={item.get('remark')}

                />

            </View>
        );

        return v;
    };

    get_view_products = (dataList) => {
        if (!dataList) {
            return null;
        }

        const {
            intl,
        } = this.props;
        console.log(dataList);
        return (<View>
            <MyListViewComponent
                ref={(ref)=>{
                    this.ref_lv = ref;
                }}
                dataLv={dataList}
                hasMore={false}
                onEndReached={()=>{}}
                onRefresh={()=>{}}
                renderRow={this.renderRow}
                renderHeader={null}
                renderFooter={()=>null}
            />
        </View>);
    };

    get_view_by_data_and_type = (type) => {
        let data = this.state.data;
        if (!data) {
            return null;
        }

        switch (type) {
            case TYPE_VIEW_ORDER_NUMBER:
                return this.get_view_order_number(data.get('order_number'));
                break;
            case TYPE_VIEW_PRODUCTS:
                return this.get_view_products(data.get('products'));
                break;
            default:
                return null;
        }
        return null;
    };


    render() {



        const {
            intl,

            user_name,
            onPress__button__back,

        } = this.props;

        /**
         *

         {
        "code":0,
        "req_url":"/bill/detail",
        "msg":"",
        "data":{
            "id":"id",
            "type":"type",
            "remark":"remark",
            "order_number":"1111111111",
            "transaction_amount":100,
            "create_time":1111111111111,
            "provider":{
                "object_id":"object_id",
                "name":"name"
            },
            "customer":{
                "object_id":"object_id",
                "name":"name"
            },
            "products":[
                {
                    "object_id_product":"object_id_product",
                    "object_id_batch":"object_id_batch",
                    "name_product":"name_product",
                    "name_batch":"name_batch",
                    "remark":"remark",
                    "price":10,
                    "count":10,
                    "total_price":100
                }
            ]
        }
    }

         * */



        return (
            <StyleProvider
                style={style_util.md}
                androidConfigs={{ materialDesign : true }}
            >
                <View style={style_util.common_container}>
                    <MyHeaderComponent
                        title={constant_show_util.bill}
                        onPress_back={this.onPress_back}

                    />


                    <ScrollView
                        ref="ref_ScrollView"
                        {...view_props_util.common_ScrollView}
                    >

                        <View
                            
                        >
                            <MyTopView1>
                                {this.name}
                            </MyTopView1>
                            <MyTopView2>
                                {this.symbol_money}
                            </MyTopView2>
                        </View>

                        <MyLabelExtraComponent
                            title={constant_show_util.create_time}
                            extra={this.create_time}

                        />

                        {this.get_view_by_data_and_type(TYPE_VIEW_ORDER_NUMBER)}

                        {this.get_view_by_data_and_type(TYPE_VIEW_PRODUCTS)}


                    <Input
                        disabled={true}
                        defaultValue={this.remark}
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
