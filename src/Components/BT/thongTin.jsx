import React, { Component } from 'react'
import {connect} from 'react-redux'
import {huyGhe} from '../../redux/datve.action'

class ThongTin extends Component {
  render() {
    return (
      <div>
        <div className='mt-5'>
          <button className='gheDuocChon'></button>
          <span className='text-light ms-2 mb-2'> Ghế đã đặt</span>
          <br />
          <button className='gheDangChon'></button>
          <span className='text-light ms-2'> Ghế đang đặt</span>
          <br />
          <button className='ghe' style={{ marginLeft: 0 }}></button>
          <span className='text-light ms-2 mb-2'> Ghế chua đặt</span>
        </div>

        <div className='mt-5'>
          <table className='table' border='2'>
            <thead>
              <tr>
                <th className='text-light'>Số ghế</th>
                <th className='text-light'>Giá</th>
                
              </tr>
            </thead>
            <tbody className='text-warning'>
              {this.props.listGheDangDat.map((item) =>{
                return <tr>
                  <td>{item.soGhe}</td>
                  <td>{item.gia}</td>
                  <td><button onClick={() =>{this.props.dispatch(huyGhe(item))}} className='btn btn-danger'>X</button></td>
                </tr>
              })}
            </tbody>
          </table>
        </div>


      </div>
    )
  }
}

const mapStateToProp = (rootReducer) =>{
  return{
    listGheDangDat: rootReducer.datVeReducer.danhSachGheDangDat
  }
  
}

export default connect (mapStateToProp)(ThongTin)
