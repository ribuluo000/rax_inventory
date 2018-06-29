/**
 * Created by nick on 2018/6/28.
 */
import Toast from 'universal-toast';

export default {

    show_loading:()=>{
        console.log('show_loading');
    },
    hide_loading:()=>{
        console.log('hide_loading');
    },
    show_toast:(msg)=>{
        Toast.show(msg);
    },


};