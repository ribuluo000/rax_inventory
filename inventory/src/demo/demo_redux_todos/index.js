import { createElement,Component } from "rax";
import { createStore } from 'redux';
import { Provider } from 'rax-redux';
import App from './components/App';
import rootReducer from './reducers';

const store = createStore(rootReducer);

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
            ;
    }

}

export default Root;