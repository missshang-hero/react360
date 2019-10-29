import React,{Component} from 'react'
import { asset,Pano} from 'react-vr'

class Canvas extends Component {
  constructor(props) {
    super(props)
    this.state = {
      src: this.props.src
    }
  }

  render () {
    return(
      <Pano source={asset(this.props.src)} />
    )
  }
}


export default Canvas
