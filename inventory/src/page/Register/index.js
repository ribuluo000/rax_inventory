/**
 * Created by nick on 2018/6/28.
 */
import { createElement,Component } from "rax";
import Button from "rax-button";

export default class Page extends Component {
    static navigationOptions = {
        title : ({ state }) => state.params.name,
        header : false
    };

    render() {
        const { goBack } = this.props.navigation;
        return (
            <Button
                title="Go back"
                onPress={() => goBack()}
            />
        );
    }
}