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

import MyLabelExtraComponent from "../../../../component/MyLabelExtraComponent";
import MyHeaderComponent from "../../../../component/MyHeaderComponent";
import MyListViewComponent from "../../../../component/MyListViewComponent";
import { cloneDeep } from "lodash";
import BaseComponent from "../../../../common/BaseComponent";
export default class MyPage extends BaseComponent {
    static navigationOptions = {
        title : ({ state }) => state.params.name,
        header : false
    };
    initData = ()=>{
        this.page_number = 0;
        this.page_size = 20;
    };

    constructor() {
        super();
        this.initData();
        this.state = {
            has_more:true,
            total_count:0,
            dataLv:[],
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
        navigate(constant_util.route_name.ProductBatchDetail, { detail : item })
    };


    renderRow = (item, sectionID, rowID) => {
        console.log('renderRow',item,sectionID,rowID);
        let {onPress__list_item} = this;

        return (
            <View
                key={item.key}

            >
                <MyLabelExtraComponent
                    key={item.key}
                    onPress={()=>{onPress__list_item && onPress__list_item(item, sectionID, rowID)}}
                    title={item.title}
                    extra={item.extra}
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
        let product_id = '5b327781bf5abe6fe4f38c6d';
        let body = {
            access_token,
            user_id,
            search_key,
            page_number,
            page_size,
            product_id,

        };

        view_util.show_loading();
        let jsonObj = await api_util.batch_get_list(body);
        view_util.hide_loading();

        let has_more = false;
        let dataLvNew = this.state.dataLv;
        let total_count = this.state.total_count;

        if(!jsonObj){
            this.state.setState({
                has_more,
                total_count,
                dataLv:dataLvNew,
            });
            return;
        }

        if(!(jsonObj.code == CODE.code_0.code)){
            view_util.show_toast(api_util.get_msg(jsonObj));
            this.state.setState({
                has_more,
                total_count,
                dataLv:dataLvNew,
            });
            return;
        }
        total_count = jsonObj.data.total_count;
        let data_list = jsonObj.data.data_list;
        data_list.map((item,i)=>{
            let item_new = {
                ...item,
                key : item._id,
                title : item.name,
                subtitle : '',
                extra : item.remark,
            };
            dataLvNew.push(item_new);
        });

        if(total_count>dataLvNew.length){
            has_more = true;
        }
        dataLvNew = cloneDeep(dataLvNew);

        this.state.setState({
            has_more,
            total_count,
            dataLv:dataLvNew,
        })
    };
    onRefresh = async ()=> {
        console.log('onRefresh',this);

        //refresh data

        console.log(this.ref_Input_search_key);
        let search_key = this.ref_Input_search_key.wrappedInstance.refs.baseinput.state.value;

        this.page_number = 0;
        let page_number = ++this.page_number;
        let page_size = this.page_size;

        let access_token = 'access_token';
        let user_id = '5b31b58fdd66b03a1dcb5434';
        let product_id = '5b327781bf5abe6fe4f38c6d';
        let body = {
            access_token,
            user_id,
            search_key,
            page_number,
            page_size,
            product_id,

        };

        view_util.show_loading();
        let jsonObj = await api_util.batch_get_list(body);
        view_util.hide_loading();

        let has_more = false;
        let dataLvNew = [];
        let total_count = this.state.total_count;

        if(!jsonObj){
            this.state.setState({
                has_more,
                total_count,
                dataLv:dataLvNew,
            });
            return;
        }

        if(!(jsonObj.code == CODE.code_0.code)){
            view_util.show_toast(api_util.get_msg(jsonObj));
            this.state.setState({
                has_more,
                total_count,
                dataLv:dataLvNew,
            });
            return;
        }
        total_count = jsonObj.data.total_count;
        let data_list = jsonObj.data.data_list;
        data_list.map((item,i)=>{
            let item_new = {
                ...item,
                key : item._id,
                title : item.name,
                subtitle : '',
                extra : item.remark,
            };
            dataLvNew.push(item_new);
        });

        if(total_count>dataLvNew.length){
            has_more = true;
        }
        dataLvNew = cloneDeep(dataLvNew);

        this.state.setState({
            has_more,
            total_count,
            dataLv:dataLvNew,
        })
    };


    onPress_right_btn = ()=>{

        console.log('onPress_right_btn');

        const { goBack,navigate } = this.props.navigation;
        navigate(constant_util.route_name.ProductBatchAdd, {})
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
                        title={constant_show_util.batch}
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
