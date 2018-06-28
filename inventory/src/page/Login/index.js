/**
 * Created by nick on 2018/6/28.
 */
import { createElement,Component } from "rax";
import Button from "rax-button";

export default class Page extends Component {
    static navigationOptions = {
        title : 'Welcome'
    };

    render() {
        const { navigation, api_login } = this.props;
        const { navigate } = navigation;

        return (
            <Button
                title="Go to Jane's profile"
                onPress={() => {
                    api_login();
                    navigate(constant_util.route_name.Register, { name : 'Jane' })
                }}
            />
        );
    }
}