/**
 * Created by nick on 2018/7/2.
 */
import {createElement, Component, render} from 'rax';
import ListView from 'rax-listview';
import View from 'rax-view';
import Text from 'rax-text';

// 参数传入
class Block extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{key: 'tom'}, {key: 'jeck'}, {key: 'tom'}, {key: 'jeck'},
                {key: 'tom'}, {key: 'jeck'}, {key: 'tom'}, {key: 'jeck'},
                {key: 'tom'}, {key: 'jeck'}, {key: 'tom'}, {key: 'jeck'},
                {key: 'tom'}, {key: 'jeck'}, {key: 'tom'}, {key: 'jeck'},
                {key: 'tom'}, {key: 'jeck'}, {key: 'tom'}, {key: 'jeck'},
                {key: 'tom'}, {key: 'jeck'}, {key: 'tom'}, {key: 'jeck'},
                {key: 'tom'}, {key: 'jeck'}, {key: 'tom'}, {key: 'jeck'},
                {key: 'tom'}, {key: 'jeck'}, {key: 'tom'}, {key: 'jeck'},
                {key: 'tom'}, {key: 'jeck'}, {key: 'tom'}, {key: 'jeck'},
                {key: 'tom'}, {key: 'jeck'}, {key: 'tom'}, {key: 'jeck'},
                {key: 'tom'}, {key: 'jeck'}]
        };
    }
    listItem = (item) => {
        return <Text>{item.key}</Text>; // 定义每行的结构
    }
    handleLoadMore = () => {
        setTimeout(() => {
            this.setState({
                data: [...this.state.data, { key: '我是新添加的' }]
            }); // 异步请求追加数据
        }, 3000);
    }
    render() {
        return <View style={{width: 750, height: 500}}>
            <View style={{backgroundColor: 'red'}}>这里的结构会自动浮动在页面上方</View>
            <ListView
                renderRow={this.listItem}
                dataSource={this.state.data}
                onEndReached={this.handleLoadMore}
            ></ListView>
        </View>
    }
}
export default Block;
// render(<Block />);