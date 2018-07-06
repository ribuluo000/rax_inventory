/**
 * Created by nick on 2018/6/28.
 */
import { createElement,Component } from "rax";
import { connect } from 'rax-redux';
import { api_login_error, api_login_success,api_login } from '../../redux/action/auth_action';
import Page from '../../page/Login';
import BaseComponent from "../../common/BaseComponent";
import { set_user_info } from "../../redux/action/app_action";

class Container extends BaseComponent{
    render(){
        return (
            <Page {...this.props}/>
        );
    }
}



const mapStateToProps = state => ({
    // todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
    set_user_info: (payload) => dispatch(set_user_info(payload)),
    api_login: (user_name,password) => dispatch(api_login(user_name,password)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);
