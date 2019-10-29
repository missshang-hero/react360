import React,{ Component} from 'react';
import {
  AppRegistry,
  // asset,
  // Pano,
  // Text,
  View,
} from 'react-vr';
//引入canvas
import Canvas from './components/Canvas'
import ButtonList from './components/ButtonList'

export default class react360 extends React.Component {

  constructor(){
    super()
    this.state = {
      src: "reactconf_00.jpg"
    }
  }
  render() {
    return (
      <View>
        <Canvas src={this.state.src} />
        <ButtonList onClick={(src) => {
          this.setState({
            src:src
          })
        }}></ButtonList>
      </View>
    );
  }
};

AppRegistry.registerComponent('react360', () => react360);
