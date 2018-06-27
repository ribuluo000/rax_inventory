/**
 * Created by nick on 2018/6/27.
 */
/** @jsx createElement */
import { Button, Navigator, Page } from 'weex-nuke';
import { createElement, Component, render } from 'rax';
let App = class NukeDemoIndex extends Component {
    constructor() {
        super();
    }
    linkToWeex() {
        Navigator.push(
            'https://h5.m.taobao.com/qn/mobile/weex-tpl.html?_wx_tpl=https://g.alicdn.com/nuke/components/0.2.21/view.js',
            '下个页面标题'
        );
    }
    linkToLocal() {
        Navigator.push(
            window.location.href+"aaaa",
            '第二个页面标题'
        );
    }
    linkToLocal_pop() {
        // Navigator.push(window.location.href.replace('basic', 'next'), 'next');
        Navigator.pop();
    }
    linkToH5() {
        Navigator.push('https://m.taobao.com');
    }
    mailto = () => {
        Navigator.push('mailto:yichen.hww@alibaba-inc.com');
    };
    sms = () => {
        Navigator.push('sms:10086');
    };
    tel = () => {
        Navigator.push('tel:10086');
    };
    system = () => {
        Navigator.push('https://m.baidu.com', '', true, {
            method: 'browser',
            target: '_blank'
        });
    };
    render() {
        var self = this;

        return (
            <Page title="Navigator">
                <Page.Intro main="普通" />
                <Button onPress={this.linkToWeex} block="true" type="primary">
                    跳转
                </Button>
                <Page.Intro main="Navigator local" />
                <Button onPress={this.linkToLocal} block="true" type="primary">
                    跳转
                </Button>
                <Page.Intro main="pop" />
                <Button onPress={this.linkToLocal_pop} block="true" type="primary">
                    跳转
                </Button>
                <Page.Intro main="跳转到h5页面" />
                <Button onPress={this.linkToH5} block="true" type="primary">
                    跳转到淘宝h5
                </Button>
                <Page.Intro main="发邮件" />
                <Button type="primary" block="true" onPress={this.mailto}>
                    navigator发邮件
                </Button>
                <Page.Intro main="发短信" />
                <Button type="primary" block="true" onPress={this.sms}>
                    navigator发短信
                </Button>
                <Page.Intro main="打电话" />
                <Button type="primary" block="true" onPress={this.tel}>
                    navigator打电话
                </Button>
                <Page.Intro main="test" />
                <Button type="primary" block="true" onPress={this.system}>
                    test
                </Button>
            </Page>
        );
    }
};
// render(<App />);

export default App;
