/** @jsx createElement */
import { View, Text, Button, Page,Env } from 'weex-nuke';
const { isWeb } = Env;
import {createElement, Component,render } from 'rax';
let App = class NukeDemoIndex extends Component {
    constructor() {
        super();
        this.state={
            pressTimes : 0,
            targetAttr:'',
            targetRef:'',
            targetType:'',
            targetEvent:'',
            screenY:'',
            identifier:'',
            screenX:'',
            pageY:'',
            pageX:'',
        }
    }
    press(){
        this.setState({
            pressTimes : this.state.pressTimes + 1
        });
    }
    longpress(e){
        if(isWeb) return;
        this.setState({
            targetRef : e.target.ref,
            targetType : e.target.type,
            targetAttr : JSON.stringify(e.target.attr),
            targetEvent : e.type,
            screenY : e.changedTouches[0].screenY,
            identifier : e.changedTouches[0].identifier,
            screenX : e.changedTouches[0].screenX,
            pageY : e.changedTouches[0].pageY,
            pageX : e.changedTouches[0].pageX,

        });
    }
    render() {
        return (
            <Page title="Button">

                <Page.Intro main="press"></Page.Intro>
                <View style={styles.result}>
                    {this.state.pressTimes ? <Text style={styles.resultText}>点击了 {this.state.pressTimes} 次</Text> :null}
                </View>
                <View style={styles.btns}>
                    <Button onPress={() => this.press()} type="primary"> press 事件</Button>
                </View>
                <Page.Intro main="longpress"></Page.Intro>
                <View style={styles.btns}>
                    <Button ref="mybtn" onLongpress={(e) => this.longpress(e)} type="primary"> longpress 事件</Button>
                </View>
                <View style={styles.resultLine}>
                    <Text style={styles.resultLabel}>targetRef</Text>
                    <Text style={styles.resultText}>{this.state.targetRef}</Text>
                </View>
                <View style={styles.resultLine}>
                    <Text style={styles.resultLabel}>targetType</Text>
                    <Text style={styles.resultText}>{this.state.targetType}</Text>
                </View>
                <View style={styles.resultLine}>
                    <Text style={styles.resultLabel}>targetEvent</Text>
                    <Text style={styles.resultText}>{this.state.targetEvent}</Text>
                </View>
                <View style={styles.resultLine}>
                    <Text style={styles.resultLabel}>screenX</Text>
                    <Text style={styles.resultText}>{this.state.screenX}</Text>
                </View>
                <View style={styles.resultLine}>
                    <Text style={styles.resultLabel}>screenY</Text>
                    <Text style={styles.resultText}>{this.state.screenY}</Text>
                </View>
                <View style={styles.resultLine}>
                    <Text style={styles.resultLabel}>identifier</Text>
                    <Text style={styles.resultText}>{this.state.identifier}</Text>
                </View>
                <View style={styles.resultLine}>
                    <Text style={styles.resultLabel}>pageX</Text>
                    <Text style={styles.resultText}>{this.state.pageX}</Text>
                </View>
                <View style={styles.resultLine}>
                    <Text style={styles.resultLabel}>pageY</Text>
                    <Text style={styles.resultText}>{this.state.pageY}</Text>
                </View>

            </Page>

        );
    }
}
const styles = {
    result: {
        height:'120rem',
        margin:'30rem',
        padding:'10rem',
        backgroundColor:'#ffffff',
        justifyContent:'center',
        alignItems:'center'
    },
    resultLine : {
        height:'80rem',
        marginLeft:'30rem',
        flexDirection:'row',
        backgroundColor:'#ffffff',
        // justifyContent:'center',
        alignItems:'center'
    },
    resultLabel : {
        fontSize:'24rem',
        width:'200rem',
        color:'#999999'
    },
    resultText : {
        fontSize:'28rem'
    },
    btns:{
        margin:'30rem',
    }
}

export default App;
