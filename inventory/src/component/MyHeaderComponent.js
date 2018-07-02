/**
 * Created by nick on 2017/4/20.
 */
import { createElement,Component } from "rax";
import { View, Text, Header, Button, } from "weex-nuke";
import MyTouchableComponent,{MyTouchableComponentTypes} from "./MyTouchableComponent";

/**
 *
 *
 */
export default class MyHeaderComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {
            title,
            extra,
            onPress_back,
            onPress_right_btn,
            right_btn_text,
        } = this.props;

        let height_header = style_util.style_base_value_util.heightHeader;
        let view;
        let view_right_btn = null;
        let view_back = null;
        if(right_btn_text){
            view_right_btn = (
                <Button
                    onPress={onPress_right_btn}
                    type="primary"
                    // type="secondary"
                >
                    <Text
                    style={[
                        {
                            fontSize:style_util.style_base_value_util.fontSizeXS,
                        }
                    ]}
                    >{right_btn_text}</Text>

                    </Button>
            );
        }

        if(onPress_back){

            view_back = (
                <MyTouchableComponent
                type={MyTouchableComponentTypes.DEFAULT}
                onPress={onPress_back}
                >
                    <View
                        style={{
                            justifyContent:'center',
                            height :height_header,
                            flex:1,
                        }}
                    >
                    {view_util.get_icon_font(constant_util.icon_font_name.return)}
                    </View>
                </MyTouchableComponent>
            );
        }



        view = (
            <Header >
                <View
                    style={[
                        style_util.flexDirectionRow,
                        {
                            width:'100%',
                            height:height_header,
                            backgroundColor:style_util.style_base_value_util.backgroundColorHeader,
                            alignItems:'center',
                        }]}
                >
                    <View
                    style={{
                        width:'30%',
                    }}
                    >
                        <View
                            style={{
                                width:'60%',
                            }}
                        >
                            {view_back}
                        </View>
                    </View>


                    <Text style={[
                    {
                        flex:1,
                        textAlign:style_util.style_base_value_util.textAlignHeaderCenter,
                        fontSize:style_util.style_base_value_util.fontSizeHeaderCenter,
                        color:style_util.style_base_value_util.textColorHeaderCenter,

                    }
                ]}>{title}</Text>
                    <View
                        style={{
                            width:'30%',
                            paddingRight:10,
                        }}
                    >
                        {view_right_btn}
                    </View>
                </View>
            </Header>
        );


        return (view);
    }
}

