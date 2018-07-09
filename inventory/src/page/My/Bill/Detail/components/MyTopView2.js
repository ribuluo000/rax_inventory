/**
 * Created by nick on 2017/4/20.
 */
import { createElement,Component } from "rax";
import { Text } from "weex-nuke";

/**
 *
 *
 */
export default class MyTopView1 extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let {
            children,
        } = this.props;

        let view;
        view = (
            <Text
                style={[
                    style_util.my_top_view2
                ]}
            >{children}</Text>
        );
        return (view);
    }
}

