/**
 * Created by nick on 2018/7/2.
 */
/** @jsx createElement */
import { View, Text, ScrollView, RefreshControl } from 'weex-nuke';
import { createElement, Component, render } from 'rax';
let App = class NukeDemoIndex extends Component {
    constructor() {
        super();
        this.state = {
            isRefreshing: false,
            refreshText: '↓ 下拉刷新',
            data: [
                { key: 'A', bg: '#1170bc', color: '#ffffff' },
                { key: 'B', bg: '#3089dc', color: '#ffffff' },
                { key: 'C', bg: '#f1f1f1', color: '#3d4145' },
                { key: 'F', bg: 'yellow', color: '#ffffff' },
                { key: 'G', bg: 'red', color: '#ffffff' }
            ]
        };
    }
    getViews() {
        let doms = [];
        this.state.data.map((item, index) => {
            doms.push(
                <View style={[styles.item, { backgroundColor: item.bg }]}>
                    <Text style={{ color: item.color }}>{item.key}</Text>
                </View>
            );
        });

        return doms;
    }

    handleRefresh = () => {
        console.log('trigger refresh');
        this.setState({
            isRefreshing: true,
            refreshText: '加载中'
        });
        //mock ajax
        setTimeout(() => {
            this.setState({
                isRefreshing: false,
                data: [{ key: 'D', bg: '#ff6600', color: '#ffffff' }].concat(
                    this.state.data
                ),
                refreshText: '↓ 下拉刷新'
            });
        }, 1000);
    };
    loadmore = () => {
        console.log('loadmore~~~~~');
        // 底部加载更多
        this.setState({
            data: this.state.data.concat([
                { key: 'E', bg: '#B91630', color: '#ffffff' }
            ])
        });
    };
    render() {
        return (
            <ScrollView
                ref="vscroller"
                style={styles.vscroller}
                onEndReachedThreshold={20}
                onEndReached={this.loadmore}
            >
                <RefreshControl
                    JDYHeaderStyle="endAnamtionStyle"
                    refreshing={this.state.isRefreshing}
                    style={[styles.itemRefresh]}
                    onRefresh={this.handleRefresh}
                >
                    <Text>{this.state.refreshText}</Text>
                </RefreshControl>
                {this.getViews()}
            </ScrollView>
        );
    }
};
const styles = {
    vscroller: {
        flex: 1
    },
    itemRefresh: {
        width: 750,
        height: 200,
        backgroundColor: '#ADDADD',
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        height: '300rem',
        alignItems: 'center',
        justifyContent: 'center'
    }
};
export default App;
// render(<App />);

