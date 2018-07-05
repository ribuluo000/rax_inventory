/**
 * Created by nick on 2018/6/28.
 */
import { createElement,Component } from "rax";
import { connect } from 'rax-redux';
import Page from '../../../../../page/My/Product/Batch/Add';
import BaseComponent from "../../../../../common/BaseComponent";

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
    // toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);
