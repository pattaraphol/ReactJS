import React, { Component } from 'react'

class Navbar extends Component{

  constructor() {
    super()
    this.state = { name : 'เม็ดบัวทอดแม่จินดา' }
  }
  render(){
    setTimeout(()=>{
      this.setState({ name : 'โทร. 089-955-4823' })
    },3000)
    return(
      <div>
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="tel:0899554823"> { this.state.name } </a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li className="active"><a href="">สั่งซื้อสินค้า</a></li>
                  <li><a href="">เกี่ยวกับเรา</a></li>
                  <li><a href="">ติดต่อเรา</a></li>
                </ul>
            </div>
            </div>
          </nav>
      </div>
    )
  }
}

export default Navbar
