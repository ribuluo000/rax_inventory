import { createElement,Component } from "rax";
import { Provider } from "rax-redux";
import Root from "./router";
import store from "./redux/store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        );
    }

}

export default App;