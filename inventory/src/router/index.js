import { StackNavigator } from "rax-navigation";
import Login from "../container/Login";
import Register from "../container/Register";
import My from "../container/My";
import Provider from "../container/My/Provider";
import Customer from "../container/My/Customer";
import Product from "../container/My/Product";

const BasicApp = StackNavigator({
    Product : { screen : Product },
    Customer : { screen : Customer },
    Provider : { screen : Provider },
    My : { screen : My },
    Login : { screen : Login },
    Register : { screen : Register },

});

export default BasicApp;
