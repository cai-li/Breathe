import React, { PureComponent } from 'react'
import Picker from '../Picker'
import './index.css'
export default class TestPicker extends PureComponent {

  constructor (props) {
    super(props)
    this.state = { color: '#fff' }
  }
  pickColor = (color) => {
    this.setState({ color })
  }
  render () {
    const { color } = this.state
    return <div>
      <Picker
        pickColor={this.pickColor}
        src="https://zaynex.github.io/Breathe/sec3.png" />
      <div className="test-color" style={{ background: color }}></div>
    </div>
  }
}