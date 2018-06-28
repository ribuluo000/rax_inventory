import { StackNavigator } from "rax-navigation";
import Login from "../container/Login";
import Register from "../container/Register";

const BasicApp = StackNavigator({
    Login : { screen : Login },
    Register : { screen : Register },
});

export default BasicApp;
