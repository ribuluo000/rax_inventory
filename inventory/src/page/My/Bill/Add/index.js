/**
 * Created by nick on 2018/6/28.
 */

/**
 * Created by nick on 2018/6/28.
 */
import { Env, Input, ThemeProvider, View, ScrollView, Text, Button } from "weex-nuke";
import { createElement,Component } from "rax";
import Picker from 'rax-picker';
const { isWeb, appInfo } = Env;
const { StyleProvider } = ThemeProvider;
import MyHeaderComponent from "../../../../component/MyHeaderComponent";
import BaseComponent from "../../../../common/BaseComponent";
import my_decimal_util from "../../../../util/my_decimal_util";
import MyLabelExtraComponent from "../../../../component/MyLabelExtraComponent";
import MyListViewComponent from "../../../../component/MyListViewComponent";
export default class MyPage extends BaseComponent {
    static navigationOptions = {
        title : ({ state }) => state.params.name,
        header : false
    };

    initData = () => {

        const {
            provider,
            customer,
            products,

        } = this.props;

        /**
         *


         {
          "id" : "id",
          "type" : "1",
          "remark" : "remark",
          "order_number" : "1111111111",
          "transaction_amount" : 100,
          "create_time" : 1111111111111,
          "provider" : {
            "object_id" : "object_id",
            "name" : "name"
          },
          "customer" : {
            "object_id" : "object_id",
            "name" : "name"
          },
          "products" : [
            {
              "object_id_product" : "object_id_product",
              "object_id_batch" : "object_id_batch",
              "name_product" : "name_product",
              "name_batch" : "name_batch",
              "remark" : "remark",
              "price" : 10,
              "count" : 10,
              "total_price" : 100
            }
          ]
        }

         */
        this.input_value_bill_type = '';
        this.input_value_transaction_amount = '';
        this.input_value_total_price = '';
        this.input_value_remark = '';
    };

    constructor(props) {
        super(props);
        this.initData();

        this.state = {
            input_value_bill_type : [ "" ],
            setState : (state) => {
                this.setState(state);
            },
        };

    }

    componentDidMount() {

    }

    onOk_bill_type = (value) => {
        console.log('onOk_bill_type', value);
        this.input_value_bill_type = value;
        this.state.setState({
            input_value_bill_type : value,
        });

    };
    onChange_transaction_amount = (value) => {
        console.log('onChange_transaction_amount', value);

        this.input_value_transaction_amount = value;

    };
    onPress__button__provider = () => {
        console.log('onPress__button__provider');
        this.props.onPress__button__provider && this.props.onPress__button__provider();

    };
    onPress__button__customer = () => {
        console.log('onPress__button__customer');
        this.props.onPress__button__customer && this.props.onPress__button__customer();

    };
    onPress__button__add_product = () => {
        console.log('onPress__button__add_product');
        this.props.onPress__button__add_product && this.props.onPress__button__add_product();

    };
    onChange_remark = (value) => {
        this.input_value_remark = value;
    };

    onPress__button__product_del = (item, sectionID, rowID) => {
        console.log('onPress__button__product_del', item, sectionID, rowID);
        this.props.onPress__button__remove_product(item, sectionID, rowID);

    };

    get_total_price = () => {
        let total_price = my_decimal_util.get_decimal_from_string(0);
        let {
            products,
        } = this.props;
        products.map((item, i) => {
            total_price = my_decimal_util.get_decimal_x_add_y(total_price, item.get('total_price'));
        });
        return total_price;
    };

    renderRow = (item, sectionID, rowID) => {
        console.log('renderRow', item, sectionID, rowID);

        let { intl } = this.props;


        let v = (
            <View
                key={item.get('key')} //todo need change
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
                    extra={'' + my_decimal_util.decimal2string_show(item.get('price'))}

                />
                <MyLabelExtraComponent
                    title={constant_show_util.product_count}
                    extra={'' + my_decimal_util.decimal2string_show(item.get('count'))}

                />
                <MyLabelExtraComponent
                    title={constant_show_util.product_total_price}
                    extra={'' + my_decimal_util.decimal2string_show(item.get('total_price'))}

                />
                <MyLabelExtraComponent
                    title={constant_show_util.remark}
                    extra={item.get('remark')}

                />

            </View>
        );
        let vv = (
            <View
                key={item.get('key')} //todo need change

            >
                {v}
                <MyButton
                    key={messages.product_del.id}
                    type="warning"
                    inline={false}
                    size="small"
                    onPress={() => {
                        this.onPress__button__product_del(item, sectionID, rowID);
                    }}
                >
                    {constant_show_util.product_del}
                </MyButton>

            </View>
        );

        return vv;
    };

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

        let access_token = 'access_token';  //todo need change
        let user_id = '5b31b58fdd66b03a1dcb5434';   //todo need change
        let body = {
            access_token,
            user_id,
            name,
            remark,
            telephone,
        };

        view_util.show_loading();
        let jsonObj = await api_util.provider_add(body);
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


        console.log(this.props);
        const {
            user_name,

            bill_add_reducer,
            provider,
            customer,
            products,



            onPress__button__back,
            onPress__button__done,
            onPress__button__add_product,

        } = this.props;


        // const provider = bill_add_reducer.get('provider');
        // const customer = bill_add_reducer.get('customer');
        // const products = bill_add_reducer.get('products');

        let please_choose = constant_show_util.please_choose;
        let receive_money = constant_show_util.receive_money;
        let Pay = constant_show_util.Pay;

        const onOk_bill_type = this.onOk_bill_type;
        const onChange_transaction_amount = this.onChange_transaction_amount;
        const onPress__button__provider = this.onPress__button__provider;
        const onPress__button__customer = this.onPress__button__customer;
        const onChange_remark = this.onChange_remark;

        const renderRow = this.renderRow;

        const provider_name = provider.get('name');
        let customer_name = customer.get('name');
        let total_price = my_decimal_util.decimal2string_show(this.get_total_price());

        const bill_type_dataList = [
            {
                label : please_choose,
                value : '',
            },
            {
                label : receive_money,
                value : '2',
            },
            {
                label : Pay,
                value : '1',
            },
        ];

        console.log('bill_type_dataList', bill_type_dataList);

        let { input_value_bill_type } = this.state;
        console.log('input_value_bill_type', input_value_bill_type);

        let view_provider = null;
        let view_customer = null;
        let view_provider_or_customer = null;
        if (input_value_bill_type[ 0 ] === '') {

        } else if (input_value_bill_type[ 0 ] === '2') {
            view_customer = (
                <MyLabelExtraComponent
                    title={constant_show_util.customer}
                    extra={customer_name}
                    onPress={onPress__button__customer}
                />
            );

        } else if (input_value_bill_type[ 0 ] === '1') {
            view_provider = (
                <MyLabelExtraComponent
                    title={constant_show_util.provider}
                    extra={provider_name}
                    onPress={onPress__button__provider}
                />
            );

        }

        console.log(window);
        // alert(screen.width)
        // alert(screen.height)

        return (
            <StyleProvider
                style={style_util.md}
                androidConfigs={{ materialDesign : true }}
            >
                <View style={style_util.common_container}>
                    <MyHeaderComponent
                        title={constant_show_util.add_bill}
                        onPress_back={this.onPress_back}
                        right_btn_text={constant_show_util.done}
                        onPress_right_btn={this.onPress_right_btn}

                    />


                    <ScrollView
                        ref="ref_ScrollView"
                        {...view_props_util.common_ScrollView}
                    >

                        <View style={{ width: '100%',}}>
                            <Text
                            style={[
                                style_util.fontSizeM,
                            ]}
                            >{constant_show_util.bill_type}</Text>
                            <Picker
                                id="bill_type"
                                selectedValue={input_value_bill_type}
                                onValueChange={(value, index) => {
                                    console.log('Picker', value, index);
                                    onOk_bill_type(value, index);
                                }}>
                                {bill_type_dataList.map((item,i)=>{
                                    return <Picker.Item value={item.value} label={item.label} />
                                })}
                            </Picker>
                        </View>

                    <Input
                        id="transaction_amount"
                        value={this.input_value_transaction_amount}
                        onChange={onChange_transaction_amount}
                        maxLength={19}
                        type="number"
                        placeholder={constant_show_util.transaction_amount}
                        ref={(ref) => {
                            this.ref_Input_transaction_amount = ref;
                        }}
                    />

                        {view_provider}
                        {view_customer}

                        <Button
                            type="primary"
                            onPress={onPress__button__add_product}
                        >
                            {constant_show_util.add_product}
                        </Button>
                        <MyLabelExtraComponent
                            title={constant_show_util.total_price}
                            extra={total_price}
                        />

                        <MyListViewComponent
                            ref={(ref)=>{
                                this.ref_lv = ref;
                            }}
                            dataLv={products}
                            hasMore={false}
                            onEndReached={()=>{}}
                            onRefresh={()=>{}}
                            renderRow={this.renderRow}
                            renderHeader={null}
                            renderFooter={()=>null}
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
