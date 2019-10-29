import React, { Component } from 'react'
import { Animated, asset, Image, View, VrButton } from 'react-vr'
const Easing = require('Easing')

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = {
      animatedTranslation: new Animated.Value(0)
    }
  }

  animateIn = () => {
    Animated.timing(
      this.state.animatedTranslation,
      {
        toValue:0.125,
        duration:100,
        easing:Easing.in
      }
    ).start()
  }

  animateOut = () => {
    Animated.timing(
      this.state.animatedTranslation,
      {
        toValue:0,
        duration:100,
        easing:Easing.In
      }
    ).start()
  }

  render(){
    return(
      <Animated.View
          style={{
            alignItems:'center',
            flexDirection:'row',
            margin:0.0125,
            transform:[
              {
                translateZ: this.state.animatedTranslation
              }
            ],
            width:0.7
          }}
      >
        <VrButton
          onClick = {() => {this.props.onClick() }}
          onEnter = {this.animateIn}
          onExit = {this.animateOut}
        >
            <Image
                style={{
                  width:0.3,
                  height:0.3
                }}
                source={asset(this.props.src)}>
            </Image>
        </VrButton>
      </Animated.View>
    )
  }
}

export default Button
