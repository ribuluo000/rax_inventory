import {createElement, render} from 'rax';
// import App from './App'; //production success
// import App from './demo/demo_canvas';    //production error on android
// import App from './demo/demo_charts';   //production error on android
// import App from './demo/demo_drag';  //production error on android
// import App from './demo/demo_webgl';    //production error on android
// import App from './demo/demo_perf';     //production error
// import App from './demo/demo_parallax';  //production some error on android
// import App from './demo/demo_component'; //production error
// import App from './demo/demo_modules';   //production error on android
// import App from './demo/demo_redux_todos';   //production some error on android
// import App from './demo/demo_animated';   //production some error on android

// import App from './demo/demo_nuke/demo_button';
// import App from './demo/demo_nuke/demo_navigator';
// import App from './demo/demo_nuke/demo_listview';    //todo onEndReached 不好用；
// import App from './demo/demo_nuke/demo_scrollview';

// import App from './demo/demo_rax/demo_listview'; //todo onRefresh 不好用；
// import App from './demo/demo_rax/demo_refresh_control'; //todo onRefresh 不好用；
// import App from './demo/demo_router_rax_navigation';
// import App from './demo/demo_router_universal';
import App from './App';
import global_util from './util/global_util';
global_util.init();
console.log(constant_util);
render(<App />);
