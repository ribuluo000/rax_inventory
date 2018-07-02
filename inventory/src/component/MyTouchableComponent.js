/**
 * Created by nick on 2017/4/20.
 */
import { createElement,Component } from "rax";
import { Touchable } from "weex-nuke";


export const MyTouchableComponentTypes = {
  "BLUE":"BLUE",
  "WHITE":"WHITE",
  "DEFAULT":"DEFAULT",
};

/**
 *
 *
 */
export default class MyTouchableComponent extends Component {

    constructor(props) {
        super(props);
    }

    getStyleByType = (type)=>{
        let style = {};
        let activeStyle = {};
        switch (type) {
            case MyTouchableComponentTypes.BLUE:
                style = {
                    backgroundColor:style_util.style_base_value_util.backgroundColorBlue,
                    alignItems:'center',
                    justifyContent:'center',
                };
                activeStyle = {
                    backgroundColor:style_util.style_base_value_util.backgroundColorBlue_active,
                };
                break;
            case MyTouchableComponentTypes.WHITE:
                style = {
                    backgroundColor:style_util.style_base_value_util.backgroundColorWhite,
                    alignItems:'center',
                    justifyContent:'center',
                };
                activeStyle = {
                    backgroundColor:style_util.style_base_value_util.backgroundColorGray,
                };
                break;
            case MyTouchableComponentTypes.DEFAULT:
            default:
                style = {
                    backgroundColor:style_util.style_base_value_util.backgroundColorTransparent,
                    alignItems:'center',
                    justifyContent:'center',
                };
                activeStyle = {
                    backgroundColor:'#00000022',
                };
                break;
        }

        return {
            style,
            activeStyle,
        };
    };

    render() {
        let {
            type,
            children,
            onPress,
        } = this.props;
        let {
            style,
            activeStyle,
        } = this.getStyleByType(type);

        let v = null;
        v = (
            <Touchable
                style={style}
                activeStyle={activeStyle}
                onPress={onPress}
            >
                {children}
            </Touchable>
        );

        return v;
    }
}

