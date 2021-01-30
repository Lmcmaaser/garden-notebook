import React, { Component } from 'react'
import Content from '../Content'


export default class LandingPage extends Component {
  render() {
    return (
      <Content className='LandingPage'>
        <h2>Welcome</h2>
        <p>
            A virtual notebook to keep your garden records!
        </p>
        <p>
            All of your notes easily at your fingertips
        </p>
      </Content>
    )
  }
}
