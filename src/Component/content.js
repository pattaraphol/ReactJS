import React, { Component } from 'react'
import Cart from './Main/cart'


class Content extends Component {
  constructor(){
    super()
    this.state = {
      name: 'เม็ดบัวทอดรสเค็ม',
      price: 0,
      value: 0,
      name2: 'เม็ดบัวทอดรสเค็ม(ซอง)',
      price2: 0,
      value2: 0,
      name3: 'ดีบัวอบแห้ง',
      price3: 0,
      value3: 0
    }
  }
  changeTitle(name, price, value) {
    this.setState({
      name: 'เม็ดบัวทอดรสเค็ม',
      price: this.state.price + 60,
      value: this.state.value + 1
    })
  }
  changeTitle2(name2, price2, value2) {
    this.setState({
      name2: 'เม็ดบัวทอดรสเค็ม(ซอง)',
      price2: this.state.price2 + 35,
      value2: this.state.value2 + 1
    })
  }
  changeTitle3(name3, price3, value3) {
    this.setState({
      name3: 'ดีบัวอบแห้ง',
      price3: this.state.price3 + 120,
      value3: this.state.value3 + 1
    })
  }
  removeTitle(name, price, value) {
    this.setState({
      name: 'เม็ดบัวทอดรสเค็ม',
      price: 0,
      value: 0
    })
  }
  removeTitle2(name2, price2, value2) {
    this.setState({
      name2: 'เม็ดบัวทอดรสเค็ม(ซอง)',
      price2: 0,
      value2: 0
    })
  }
  removeTitle3(name3, price3, value3) {
    this.setState({
      name3: 'ดีบัวอบแห้ง',
      price3: 0,
      value3: 0
    })
  }
  removeAll(name,name2,name3) {
    this.setState({
      name: 'เม็ดบัวทอดรสเค็ม',
      price: 0,
      value: 0,
      name2: 'เม็ดบัวทอดรสเค็ม(ซอง)',
      price2: 0,
      value2: 0,
      name3: 'ดีบัวอบแห้ง',
      price3: 0,
      value3: 0
    })
  }
  render(){
    return(
      <div style={{ marginTop: 70 }}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                 <h2>เม็ดบัวทอดแม่จินดา</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                  <h3>รายการสินค้า</h3>
                  <div className="col-md-4 ">
                      <img src="../images/test1.jpg" alt="เม็ดบัวทอด" width="100%"/>
                      <span className="badge"> {this.state.value} </span>
                      <center>เม็ดบัวทอดรสเค็ม ราคา 60 บาท </center><br />
                      <center>
                        <button className="btn btn-info" onClick= {this.changeTitle.bind(this)} >สั่งซื้อ</button>&nbsp;
                        <button className="btn btn-danger" onClick= {this.removeTitle.bind(this)} >ยกเลิก</button>
                      </center>
                  </div>
                  <div className="col-md-4 ">
                      <img src="../images/test4.jpg" alt="เม็ดบัวทอด" width="100%"/>
                      <span className="badge"> {this.state.value2} </span>
                      <center>เม็ดบัวทอดแบบซอง ราคา 35 บาท </center><br />
                      <center>
                        <button className="btn btn-info" onClick= {this.changeTitle2.bind(this)} >สั่งซื้อ</button>&nbsp;
                        <button className="btn btn-danger" onClick= {this.removeTitle2.bind(this)} >ยกเลิก</button>
                      </center>
                  </div>
                  <div className="col-md-4 ">
                      <img src="../images/test2.jpg" alt="เม็ดบัวทอด" width="100%"/>
                      <span className="badge"> {this.state.value3} </span>
                      <center>ดีบัวอบแห้ง ราคา 120 บาท</center><br />
                      <center>
                        <button className="btn btn-info" onClick= {this.changeTitle3.bind(this)} >สั่งซื้อ</button>&nbsp;
                        <button className="btn btn-danger" onClick= {this.removeTitle3.bind(this)} >ยกเลิก</button>
                      </center>
                  </div>
              </div>
              <div className="col-md-4">
                  <h3><span className="glyphicon glyphicon-shopping-cart"></span> ตะกร้าสินค้า</h3>
                  <div className="cart" >
                      <Cart name={this.state.name} price={this.state.price} value={this.state.value}
                            name2={this.state.name2} price2={this.state.price2} value2={this.state.value2}
                            name3={this.state.name3} price3={this.state.price3} value3={this.state.value3}
                       />
                       <center>
                             <button className="btn btn-success" data-toggle="modal" data-target="#Modal">สั่งซื้อสินค้า</button> &nbsp;
                             <button className="btn btn-danger" onClick= {this.removeAll.bind(this)}>ยกเลิกรายการ</button>
                       </center>
                  </div>
              </div>

                    <div className="modal fade" id="Modal" role="dialog" aria-labelledby="purchaseLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    <h4 className="modal-title" id="purchaseLabel">ยืนยันการสั่งซื้อ</h4>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                      <div className="col-md-6" style={{ background:'#F3F3F3', borderRadius:6, fontSize:16}}>
                                            <p>เม็ดบัวทอดรสเค็ม: <span style={{ color:'red'}}> {this.state.value} </span>กระปุก</p>
                                            <p>เม็ดบัวทอดรสเค็ม(ซอง): <span style={{ color:'red'}}> {this.state.value2} </span>ซอง</p>
                                            <p>ดีบัวอบแห้ง: <span style={{ color:'red'}}> {this.state.value3} </span>กระปุก</p><br/>
                                            <p>ยอดชำระสินค้า : <input type="text" value={this.state.price + this.state.price2 + this.state.price3 + 50 + ' บาท '} className="form-control text-center" disabled/></p>
                                            <center>
                                            <h3>วิธีการชำระเงิน</h3>
                                            <p style={{ color:'#00D1FF'}}>ลูกค้าสามารถโอนเงินค่าสินค้า มาที่</p>
                                            <p style={{ color:'#5CBD3D'}}>ชื่อบัญชี พัทยา บุตรคลี่ </p><br/>
                                            <p style={{ color:'#7000FF'}}>ธ.ไทยพาณิชย์ : 401-720871-6</p>
                                            <p style={{ color:'#003EFF'}}>ธ.กรุงเทพ : 323-426066-3</p>
                                            <p style={{ color:'#FE5A82'}}>Prompt pay : 089-955-4823</p><br/>
                                          </center>

                                      </div>
                                      <div className="col-md-6">
                                          ชื่อ - นามสกุล : <input type="text" id="custname" className="form-control" /><br/>
                                          ที่อยู่ : <input type="text" id="address" className="form-control" /><br/>
                                          เบอร์โทร : <input type="text" id="tel" className="form-control" /><br/>
                                          ชื่อบัญชีลูกค้า : <input type="text" id="description" className="form-control"/><br/>
                                          เวลาที่โอน : <input type="time" id="time" className="form-control" /><br/>
                                          <input type="hidden" id="product1" value={this.state.value} />
                                          <input type="hidden" id="product2" value={this.state.value2} />
                                          <input type="hidden" id="product3" value={this.state.value3} />
                                          <input type="hidden" id="priceTotal" value={this.state.price + this.state.price2 + this.state.price3 + 50} />
                                      </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" onClick={ ()=>SetData() } className="btn btn-primary">ยืนยัน</button>
                                    <button type="button" className="btn btn-default" data-dismiss="modal">ปิด</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12"> <br/><br/> </div>
            </div>
          </div>
      </div>
    )
  }
}
/* global firebase */
let stref = firebase.database().ref('customer/post')
function SetData() {
    const Name = document.getElementById("custname").value;
    const Address = document.getElementById("address").value;
    const Tel = document.getElementById("tel").value;
    const Time = document.getElementById("time").value;
    const Account = document.getElementById("description").value;
    const Product1 = document.getElementById("product1").value;
    const Product2 = document.getElementById("product2").value;
    const Product3 = document.getElementById("product3").value;
    const PriceTotal = document.getElementById("priceTotal").value;

    if(Name === '') {
      alert('กรุณากรอกชื่อ')
      return false;
    }
    else if(Address === '') {
      alert('กรุณากรอกที่อยู่')
      return false;
    }
    else if(Tel === '') {
      alert('กรุณากรอกเบอร์โทร')
      return false;
    }
    else if(Account === '') {
      alert('กรุณากรอกชื่อบัญชีที่โอน')
      return false;
    }
    else if(Time === '') {
      alert('กรุณาใส่เวลาที่โอนเงิน')
      return false;
    }else {
        const Settemp = stref.push();
        Settemp.set({
                ชื่อ: Name,
                ที่อยู่: Address,
                เบอร์โทร: Tel,
                เวลาที่โอน: Time,
                ชื่อบัญชี: Account,
                เม็ดบัวทอดกระปุก: Product1,
                เม็ดบัวทอดซอง: Product2,
                ดีบัวอบแห้ง: Product3,
                ราคาทั้งหมด: PriceTotal
        })
    }
    alert('สั่งซื้อสินค้าสำเร็จ !')
    document.getElementById('custname').value = ''
    document.getElementById('address').value = ''
    document.getElementById('tel').value = ''
    document.getElementById('time').value = ''
    document.getElementById('description').value = ''
 }

export default Content
