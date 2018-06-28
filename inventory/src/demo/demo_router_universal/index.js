/**
 * Created by nick on 2018/6/27.
 */
import UniversalRouter from "universal-router";
// import rax from 'rax'
import RaxDOM from "rax-dom";

import { createElement, Component } from "rax";
import View from "rax-view";
import Text from "rax-text";

import Button from "rax-button";

class MainScreen extends Component {
    static navigationOptions = {
        title : 'Welcome'
    };

    render() {
        // const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to Jane's profile"
                onPress={() => {
                    turn2two()
                    // alert('turn')
                    // navigate('Profile', { name: 'Jane' })
                }}
            />
        );
    }
}

class ProfileScreen extends Component {
    static navigationOptions = {
        title : ({ state }) => state.params.name,
        header : false
    };

    render() {
        // const { goBack } = this.props.navigation;
        const goBack = () => {
            turn2init()
        };
        return (
            <Button
                title="Go back"
                onPress={() => goBack()}
            />
        );
    }
}

/**
 *
 const routes2 = {
    path: '/admin',
    children: [
        {
            path: '',                        // www.example.com/admin
            action: () => 'Admin Page',
        },
        {
            path: '/users',
            children: [
                {
                    path: '',                    // www.example.com/admin/users
                    action: () => 'User List',
                },
                {
                    path: '/:username',          // www.example.com/admin/users/john
                    action: () => 'User Profile',
                },
            ],
        },
    ],
};
 const routes3 = {
    path: '/page',            // string or regexp or array of them, optional 
    name: 'page',             // unique string, optional
    parent: null,             // route object or null, automatically filled by the router
    children: [],             // array of route objects or null, optional 
    action(context, params) { // function, optional

        // action method should return anything except `null` or `undefined` to be resolved by router
        // otherwise router will throw `Page not found` error if all matched routes returned nothing
        return '<h1 >The Page</h1>'
    },
    // ...
}



 */

const options = {
    context : { user : null },
    baseUrl : '',
    resolveRoute(context, params) {
        if (typeof context.route.action === 'function') {
            return context.route.action(context, params)
        }
        return undefined
    },
    errorHandler(error) {
        console.error(error)
        console.dir(error.context)
        return error.code === 404
            ? '<h1>Page Not Found</h1>'
            : '<h1>Oops! Something went wrong</h1>'
    }
}

function turn2one() {

    alert('111')

    router.resolve({ pathname : '/one' }).then(component => {
        RaxDOM.render(component, document.body)
        // renders: <h1>Page One</h1>
        // renders:component
        // document.body.innerHTML = component
        // document.body.innerHTML = <h1>Page One</h1>
    })
}
function turn2two() {

    alert('111')

    router.resolve({ pathname : '/two' }).then(component => {
        RaxDOM.render(component, document.body)
        // renders: <h1>Page One</h1>
        // renders:component
        // document.body.innerHTML = component
        // document.body.innerHTML = <h1>Page One</h1>
    })
}
function turn2init() {

    alert('111')

    router.resolve({ pathname : '/' }).then(component => {
        RaxDOM.render(component, document.body)
        // renders: <h1>Page One</h1>
        // renders:component
        // document.body.innerHTML = component
        // document.body.innerHTML = <h1>Page One</h1>
    })
}
const routes = [
    {
        path : '/', action : () => <h1 onclick="turn2one()">Page Init
        <button onclick="turn2one()">turn2one</button>
    </h1>
    },
    { path : '/one', action : () => <h1>Page One</h1> },
    {
        path : '/two', action : () => <div><h1 onclick="turn2one()">Page Two

    </h1>
        <button onclick="turn2one()">turn2one</button>
    </div>
    },
    { path : '(.*)', action : () => <h1>Not Found</h1> }
]
const routes4 = [
    { path : '/', action : () => <MainScreen/> },
    { path : '/one', action : () => <h1>Page One</h1> },
    { path : '/two', action : () => <ProfileScreen/> },
    { path : '(.*)', action : () => <h1>Not Found</h1> }
]
const router = new UniversalRouter(routes4, options)

router.resolve({ pathname : '/' }).then(component => {
    RaxDOM.render(component, document.body)
    // renders: <h1>Page One</h1>
    // renders:component
    // document.body.innerHTML = component
    // document.body.innerHTML = <h1>Page One</h1>
})
class App extends Component {

    render() {
        return (
            <View >
                <View >
                    <Text >Welcome to Rax</Text>
                </View>
                <Text >
                    To get started, edit src/App.js and save to reload.
                </Text>
            </View>
        );
    }
}

export default App;