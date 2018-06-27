import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import Animated from 'rax-animated';

import styles from './App.css';

class App extends Component {
    state = {
        bounceValue: new Animated.Value(0),
        translateValue: new Animated.ValueXY({
            x: 0,
            y: 0
        }),
        rotateValue: new Animated.Value(0),
    };

    componentDidMount() {
        this.state.bounceValue.setValue(1.5);
        Animated.spring(
            this.state.bounceValue,
            {
                toValue: 0.8,
                friction: 1,
            }
        ).start();

        this.state.rotateValue.setValue(125);

        Animated.spring(
            this.state.rotateValue,
            {
                toValue: 0,
                friction: 1,
            }
        ).start();
    }


  render() {
    return (
      <View style={styles.app}>



          <Animated.Image
              source={{uri: 'https://camo.githubusercontent.com/27b9253de7b03a5e69a7c07b0bc1950c4976a5c2/68747470733a2f2f67772e616c6963646e2e636f6d2f4c312f3436312f312f343031333762363461623733613132336537386438323436636438316338333739333538633939395f343030783430302e6a7067'}}
              style={{
                  width: 224,
                  height: 188,
                  // margin: 100,
                  backgroundColor:'red',
                  transform: [
                      {
                          scale: this.state.bounceValue,
                      },
                      {
                          translateX: this.state.translateValue.x
                      },
                      {
                          translateY: this.state.translateValue.y
                      }
                  ]
              }}
          />

          <View style={styles.appHeader}>
              <Text style={styles.appBanner}>Welcome to Rax</Text>
          </View>
          <Text style={styles.appIntro}>
              To get started, edit src/App.js and save to reload.
          </Text>
      </View>
    );
  }
}

export default App;
