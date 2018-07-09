/**
 * Created by nick on 2017/4/20.
 */
import { createElement,Component } from "rax";
import { View,Text,Touchable } from "weex-nuke";

/**
 *
 *
 */
export default class MyLabelExtraComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {
            title,
            extra,
            onPress,
        } = this.props;

        let view;
        let view1;
        view1 = (
            <View
                style={[
                    style_util.flex1,
                    style_util.flexDirectionRow,
                    style_util.justifyContentSpaceBetween,
                    {
                        marginTop:style_util.style_base_value_util.sizeXXS,
                        marginBottom:style_util.style_base_value_util.sizeXXS,
                    }

                ]}
            >
                <Text
                    style={[
                        style_util.fontSizeL,
                        style_util.textColorBlack,
                        style_util.paddingXS,

                    ]}
                >{title}</Text>
                <Text
                    style={[
                        style_util.fontSizeS,
                        style_util.textColorGray,
                        style_util.paddingXS,

                    ]}
                >{extra}</Text>
            </View>
        );
        if(onPress){

            let style = {
                backgroundColor:style_util.style_base_value_util.backgroundColorWhite,
                height:style_util.style_base_value_util.heightMyLabelExtraComponent,
            };
            let activeStyle = {
                backgroundColor:style_util.style_base_value_util.backgroundColorGray,
                height:style_util.style_base_value_util.heightMyLabelExtraComponent,
            };
            view = (
                <Touchable
                    style={style}
                    activeStyle={activeStyle}
                    onPress={onPress}
                >
                    <View
                        style={[
                            style_util.flexDirectionRow,
                            style_util.alignItemsCenter,
                        ]}
                    >
                        {view1}

                        {view_util.get_icon_font(constant_util.icon_font_name.enter)}
                    </View>
                </Touchable>
            );
        }else {
            view = view1;

        }


        return (view);
    }
}

