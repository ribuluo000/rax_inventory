import { StackNavigator } from "rax-navigation";
import Login from "../container/Login";
import Register from "../container/Register";
import My from "../container/My";
import Provider from "../container/My/Provider";
import Customer from "../container/My/Customer";
import Product from "../container/My/Product";
import ProductBatch from "../container/My/Product/Batch";

import ProviderAdd from "../container/My/Provider/Add";


const BasicApp = StackNavigator({
    Provider : { screen : Provider },
    ProviderAdd : { screen : ProviderAdd },
    ProductBatch : { screen : ProductBatch },
    Product : { screen : Product },
    Customer : { screen : Customer },

    My : { screen : My },
    Login : { screen : Login },
    Register : { screen : Register },

});

export default BasicApp;
