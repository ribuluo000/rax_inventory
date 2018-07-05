import { StackNavigator } from "rax-navigation";
import Login from "../container/Login";
import Register from "../container/Register";
import My from "../container/My";
import Provider from "../container/My/Provider";
import Customer from "../container/My/Customer";
import Product from "../container/My/Product";
import ProductBatch from "../container/My/Product/Batch";

import ProviderAdd from "../container/My/Provider/Add";
import CustomerAdd from "../container/My/Customer/Add";
import ProductAdd from "../container/My/Product/Add";
import ProductBatchAdd from "../container/My/Product/Batch/Add";


const BasicApp = StackNavigator({
    ProductBatch : { screen : ProductBatch },
    ProductBatchAdd : { screen : ProductBatchAdd },
    Product : { screen : Product },
    ProductAdd : { screen : ProductAdd },
    Customer : { screen : Customer },
    CustomerAdd : { screen : CustomerAdd },
    Provider : { screen : Provider },
    ProviderAdd : { screen : ProviderAdd },




    My : { screen : My },
    Login : { screen : Login },
    Register : { screen : Register },

});

export default BasicApp;
