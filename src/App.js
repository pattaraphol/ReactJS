import React, { Component } from 'react'
import Navbar from './Component/nav'
import Content from './Component/content'

class App extends Component {
    render(){
      return(
        <div>
            <Navbar />
            <Content />
        </div>
      )
    }
}

export default App
