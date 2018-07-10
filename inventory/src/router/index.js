import { StackNavigator } from "rax-navigation";
import Login from "../container/Login";
import Register from "../container/Register";
import My from "../container/My";
import Bill from "../container/My/Bill";
import Provider from "../container/My/Provider";
import Customer from "../container/My/Customer";
import Product from "../container/My/Product";
import ProductBatch from "../container/My/Product/Batch";

import BillAdd from "../container/My/Bill/Add";
import ProviderAdd from "../container/My/Provider/Add";
import CustomerAdd from "../container/My/Customer/Add";
import ProductAdd from "../container/My/Product/Add";
import ProductBatchAdd from "../container/My/Product/Batch/Add";

import ProviderDetail from "../container/My/Provider/Detail";
import CustomerDetail from "../container/My/Customer/Detail";
import ProductDetail from "../container/My/Product/Detail";
import ProductBatchDetail from "../container/My/Product/Batch/Detail";
import BillDetail from "../container/My/Bill/Detail";



const BasicApp = StackNavigator({
    Bill : { screen : Bill },
    BillAdd : { screen : BillAdd },
    BillDetail : { screen : BillDetail },
    Login : { screen : Login },
    Register : { screen : Register },


    ProductBatch : { screen : ProductBatch },
    ProductBatchAdd : { screen : ProductBatchAdd },
    ProductBatchDetail : { screen : ProductBatchDetail },
    Product : { screen : Product },
    ProductAdd : { screen : ProductAdd },
    ProductDetail : { screen : ProductDetail },
    Customer : { screen : Customer },
    CustomerAdd : { screen : CustomerAdd },
    CustomerDetail : { screen : CustomerDetail },
    Provider : { screen : Provider },
    ProviderAdd : { screen : ProviderAdd },
    ProviderDetail : { screen : ProviderDetail },








    My : { screen : My },


});

export default BasicApp;
