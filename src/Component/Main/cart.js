import React, { Component } from 'react'

class Cart extends Component {
  render(){
    let {name} = this.props
    let {value} = this.props
    let {price} = this.props
    let {name2} = this.props
    let {value2} = this.props
    let {price2} = this.props
    let {name3} = this.props
    let {value3} = this.props
    let {price3} = this.props
    return(
      <div>
          <div className="row">
              <div className="col-md-12">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th style={{ width:'200px'}}>รายการสินค้า</th>
                      <th>จำนวน</th>
                      <th>ราคา/บาท</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ height:'40px'}}> {name} </td>
                      <td> {value} </td>
                      <td> {price} </td>
                    </tr>
                    <tr>
                      <td> {name2} </td>
                      <td> {value2} </td>
                      <td> {price2} </td>
                    </tr>
                    <tr>
                      <td> {name3} </td>
                      <td> {value3} </td>
                      <td> {price3} </td>
                    </tr>
                    <tr>
                      <th>สรุปรายการสินค้า</th>
                      <th> {value + value2 + value3}</th>
                      <th> {price + price2 + price3}</th>
                    </tr>
                    <tr style={{ background:'#EEEEEE'}}>
                      <th>ค่าจัดส่ง 50 บาท</th>
                      <th> รวม </th>
                      <th style={{ color:'red'}}> {price + price2 + price3 + 50} บาท</th>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>
      </div>
    )
  }
}

export default Cart
