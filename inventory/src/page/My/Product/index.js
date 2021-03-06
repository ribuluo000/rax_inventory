/**
 * Created by nick on 2018/6/28.
 */

/**
 * Created by nick on 2018/6/28.
 */
import { Button, Env, Input, ThemeProvider, View, ScrollView, Page, Text, } from "weex-nuke";
import { createElement,Component } from "rax";
const { isWeb, appInfo } = Env;
const { StyleProvider } = ThemeProvider;

import MyLabelExtraComponent from "../../../component/MyLabelExtraComponent";
import MyHeaderComponent from "../../../component/MyHeaderComponent";
import MyListViewComponent from "../../../component/MyListViewComponent";
import { cloneDeep } from "lodash";
import BaseComponent from "../../../common/BaseComponent";
export default class MyPage extends BaseComponent {
    static navigationOptions = {
        title : ({ state }) => state.params.name,
        header : false
    };
    initData = ()=>{
        this.total_count = 0;
        this.page_number = 0;
        this.page_size = 20;
    };

    constructor() {
        super();
        this.initData();
        this.state = {
            has_more:true,
            dataLv:IList([]),
            setState:(state)=>{
                this.setState(state);
            },
        };

    }

    // onPress_back = ()=>{
    //     console.log(this);
    //     view_util.goBack(this);
    // };

    onPress__list_item = (item, sectionID, rowID) => {

        console.log('onPress__list_item',item);

        const { goBack,navigate } = this.props.navigation;
        navigate(constant_util.route_name.ProductDetail, { detail : item })
    };


    renderRow = (item, sectionID, rowID) => {
        console.log('renderRow',item,sectionID,rowID);
        let {onPress__list_item} = this;

        return (
            <View
                key={item.get('key')}

            >
                <MyLabelExtraComponent
                    key={item.get('key')}
                    onPress={()=>{onPress__list_item && onPress__list_item(item, sectionID, rowID)}}
                    title={item.get('title')}
                    extra={item.get('extra')}
                />

                {this.renderSeparator()}
            </View>
        );
    };

    renderSeparator = () => {
        return (
            view_util.get_separator_h()
        );
    };

    set_has_more_false = () => {
        if (this.state.has_more !== false) {
            this.state.setState({
                has_more : false,
            });
        }
    };

    onEndReached = async ()=> {
        console.log('onEndReached',this);
        console.log('onEndReached',this.props);

        //load more data

        console.log(this.ref_Input_search_key);
        let search_key = this.ref_Input_search_key.wrappedInstance.refs.baseinput.state.value;

        let page_number = ++this.page_number;
        let page_size = this.page_size;

        let access_token = 'access_token';
        let user_id = '5b31b58fdd66b03a1dcb5434';
        let body = {
            access_token,
            user_id,
            search_key,
            page_number,
            page_size,
        };

        view_util.show_loading();
        let jsonObj = await api_util.product_get_list(body);
        view_util.hide_loading();

        let has_more = false;
        let dataLvNew = this.state.dataLv;
        if (page_number === 1) {
            dataLvNew = IList([]);
        }
        let total_count = this.total_count;

        if (!jsonObj) {
            this.set_has_more_false();
            return;
        }

        if (!(jsonObj.get('code') == CODE.code_0.code)) {
            api_util.on_custom_exception_common(jsonObj);
            this.set_has_more_false();
            return;
        }
        total_count = jsonObj.get('data').get('total_count');
        let data_list = jsonObj.get('data').get('data_list');
        data_list.map((item, i) => {
            // console.log(item,'data_list.map.item');
            let item_new = IMap({
                item : item,
                key : item.get('_id'),
                title : item.get('name'),
                subtitle : '',
                extra : item.get('remark'),
            });
            dataLvNew = dataLvNew.push(item_new);
            // console.log(dataLvNew,'data_list.map.dataLvNew');

        });

        if (total_count > dataLvNew.size) {
            has_more = true;
        }
        console.log(dataLvNew, 'data_list.map.dataLvNew');
        this.total_count = total_count;

        this.state.setState({
            has_more,
            dataLv : dataLvNew,
        })
    };
    onRefresh = async ()=> {
        console.log('onRefresh',this);

        //refresh data
        this.page_number = 0;
        this.total_count = 0;
        this.onEndReached();
    };


    onPress_right_btn = ()=>{

        console.log('onPress_right_btn');

        const { goBack,navigate } = this.props.navigation;
        navigate(constant_util.route_name.ProductAdd, {})
    };


    onPress__button__search = async (value) => {
        console.log('onPress__button__search', value);
        this.search_key = value;
        this.timer && clearTimeout(this.timer);
        //refresh data
        this.timer = setTimeout(() => {
            this.onRefresh();

        }, 300);
        console.log('this.timer', this.timer);

    };


    render() {
        const { navigation, api_login } = this.props;
        const { navigate } = navigation;

        // return <h1>aaaaa</h1>;

        let data_list = this.state.dataLv;
        let has_more = this.state.has_more;
        const renderRow = this.renderRow;
        const onEndReached = this.onEndReached;
        const onRefresh = this.onRefresh;
        const onPress__button__search = this.onPress__button__search;

        return (
            <StyleProvider
                style={style_util.md}
                androidConfigs={{ materialDesign : true }}
            >
                <View style={style_util.common_container}>
                    <MyHeaderComponent
                        title={constant_show_util.product}
                        onPress_back={this.onPress_back}
                        right_btn_text={constant_show_util.add}
                        onPress_right_btn={this.onPress_right_btn}

                    />
                    <Input
                        onChange={onPress__button__search}
                        maxLength={19}
                        type="text"
                        placeholder={constant_show_util.please_input_key}
                        ref={(ref) => {
                            this.ref_Input_search_key = ref;
                        }}
                    />
                    <MyListViewComponent
                        ref={(ref)=>{
                            this.ref_lv = ref;
                        }}
                        dataLv={data_list}
                        hasMore={has_more}
                        onEndReached={onEndReached}
                        onRefresh={onRefresh}
                        renderRow={renderRow}
                        renderHeader={null}
                    />

                </View>
            </StyleProvider>
        );
    }

}
