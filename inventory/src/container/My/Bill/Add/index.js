/**
 * Created by nick on 2018/6/28.
 */
import { createElement,Component } from "rax";
import { connect } from 'rax-redux';
import Page from '../../../../page/My/Bill/Add';
import BaseComponent from "../../../../common/BaseComponent";
import { remove_product, reset_bill_add } from "../../../../redux/action/bill_add_action";
import PATH from "../../../../constants/PATH";
class Container extends BaseComponent{
    render(){
        return (
            <Page {...this.props}/>
        );
    }
}



const mapStateToProps = state => ({
    // todos: getVisibleTodos(state.todos, state.visibilityFilter)
    provider:state.bill_add_reducer.get('provider'),
    customer:state.bill_add_reducer.get('customer'),
    products:state.bill_add_reducer.get('products'),
});

const mapDispatchToProps = dispatch => {
    // toggleTodo: id => dispatch(toggleTodo(id))

    return {

        onPress__button__back : () => {
            console.log('onPress__button__back');
            dispatch(goBack());
            dispatch(reset_bill_add());
        },

        reset_bill_add : () => {
            console.log('reset_bill_add');
            dispatch(reset_bill_add());

        },

        onPress__button__done : () => {
            console.log('onPress__button__done');

            dispatch(goBack());
            dispatch(reset_bill_add());
        },

        onPress__button__provider : () => {
            console.log('onPress__button__provider');
            dispatch(push(`/${PATH.PATH__provider__select}`));

        },

        onPress__button__customer : () => {
            console.log('onPress__button__customer');
            dispatch(push(`/${PATH.PATH__customer__select}`));

        },

        onPress__button__add_product : () => {
            console.log('onPress__button__add_product');
            dispatch(push(`/${PATH.PATH__bill__add__add_product}`));

        },
        onPress__button__remove_product : (item, sectionID, rowID) => {
            console.log('onPress__button__remove_product',item, sectionID, rowID);
            let payload = IMap({
                item,
                sectionID,
                rowID,
            });
            dispatch(remove_product(payload));

        },

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);
