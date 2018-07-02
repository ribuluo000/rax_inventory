/**
 * Created by nick on 2018/6/28.
 */
import { createElement,Component } from "rax";

export default class BaseComponent extends Component{


    onPress_back = ()=>{
        console.log(this);
        view_util.goBack(this);
    };


    render(){

    }
}
