/**
 * Created by nick on 2018/6/23.
 */
import { createElement, PureComponent, Component, render, } from 'rax';
import { View, Text, RefreshControl, Touchable,ScrollView  } from 'weex-nuke';
import ListView from "rax-listview";
import RaxDOM from "rax-dom";




export default class MyListViewComponent extends PureComponent{

  static propTypes = {

  };

  static defaultProps = {
    hasMore:true,
    renderHeader:() => {return <span>header1111111</span>},
    renderRow:() => {return <span>header1111111</span>},

  };

  constructor(props) {
    super(props);
    console.log('document.documentElement.clientHeight',document.documentElement.clientHeight);
    let h = document.documentElement.clientHeight * 4 / 4;
    h = ''+h+'rem';
    this.state = {
        isRefreshing: false,
        refreshText: '↓ 下拉刷新',

      dataSource:props.dataLv.toArray(),
      isLoading: false,
      height: h,
    };
  }

  componentDidMount() {

    let hei = document.documentElement.clientHeight - RaxDOM.findDOMNode(this.ref__lv).parentNode.offsetTop;
    console.log(hei);
      hei = ''+hei+'rem';

      // simulate initial Ajax
    this.props.onEndReached && this.props.onEndReached();
    this.setState({
      height: hei,
    });
  }
  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading || !this.props.hasMore) {
      return;
    }
    console.log('onEndReached1',event);
    this.setState({ isLoading: true });
    this.props.onEndReached && this.props.onEndReached();
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  componentWillReceiveProps(nextProps) {
      console.log('componentWillReceiveProps',nextProps);
    if (nextProps.dataLv !== this.props.dataLv) {

        this.setState({
            dataSource: nextProps.dataLv.toArray(),
            isLoading: false,
            isRefreshing: false,
        });
    }else if(!nextProps.hasMore &&this.props.hasMore){
        this.setState({
            isLoading: false,
            isRefreshing: false,
        });
    }
  }
    onRefresh=(e)=> {
        console.log('onRefresh');
        this.props.onRefresh && this.props.onRefresh();

        this.setState({
            isRefreshing: true,
            refreshText: '加载中',
        });
        setTimeout(() => {
            this.setState({
                isRefreshing: false,
                refreshText: '↓ 下拉刷新',
            });
        }, 10000);
    }


    render(){
    let {
      // dataLv,
      renderHeader,
      renderRow,
      onEndReached,
      onRefresh,

    } = this.props;

    let {isLoading} = this.state;

    return (
        <ScrollView
        style={{
            flex:1,
        }}
        >
          <RefreshControl
              style={styles.refresh}
              // refreshing={'show'}
              refreshing={this.state.isRefreshing}
              // refreshing={this.state.isRefreshing}
              onRefresh={this.onRefresh}
          >
            <Text style={styles.loadingText}>{this.state.refreshText}</Text>
          </RefreshControl>
          <ListView
              ref={ref => this.ref__lv = ref}
              dataSource={this.state.dataSource}
              renderHeader={renderHeader}
              renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                  {isLoading ? 'Loading...' : 'Loaded'}
              </div>)}
              renderRow={renderRow}
              style={{
                  height: this.state.height,
                  overflow: 'auto',
              }}
              onScroll={() => { console.log('scroll'); }}
              // scrollRenderAheadDistance={500}
              onEndReached={this.onEndReached}
              onEndReachedThreshold={500}
          />
        </ScrollView>
    );

  }
}
const styles = {

    refresh: {
        height: 80,
        width: '100%',
        backgroundColor: '#cccccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        color: '#666666',
    },
};