/**
 * Created by nick on 2018/1/27.
 */

let obj = {

    get_screen_width : () => {
        return window.screen.width;
    },

    get_screen_height : () => {
        let scale = 750/window.screen.width;
        return window.screen.height*scale;
    },

};

export default obj;
