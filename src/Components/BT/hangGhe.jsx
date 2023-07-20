import React, { Component } from 'react'
import { connect } from 'react-redux'
import {gheDangChon} from '../../redux/datve.action'

class HangGhe extends Component {

  renderGhe = () =>{
    return this.props.hangGhe.danhSachGhe.map((item, index) =>{
      let cssGheDat = ''
      let disabled = false
      if(item.daDat){
        cssGheDat = 'gheDuocChon'
        disabled = true
      }

      // trang thai ghe dang dat
      let indexGheDangDat = this.props.listGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === item.soGhe)
      let cssGheDangDat = ''
      if(indexGheDangDat !== -1){
        cssGheDangDat = 'gheDangChon'
      }

      return <button onClick={() => {this.props.dispatch(gheDangChon(item))}} disabled={disabled} className={`ghe ${cssGheDat} ${cssGheDangDat}`} key={index}>{item.soGhe}</button>
    })
  }

  renderSoHang = () =>{
    // console.log(this.props.hangGhe.danhSachGhe)
    return this.props.hangGhe.danhSachGhe.map((tenHang, index) =>{
      return <button key={index} className='rowNumber'>{tenHang.soGhe}</button>
    })
  }

  renderHangGhe = () =>{
    if(this.props.soHangGhe === 0){
      return <div>{this.props.hangGhe.hang}{this.renderSoHang()}</div>
    }
    else{
      return <div>{this.props.hangGhe.hang}{this.renderGhe()}</div>
    }
  }

  render() {
    return (
      <div>
        <div style={{fontSize: '25px'}} className='text-light text-left ml-3 mt-1'>{this.renderHangGhe()}</div>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) =>{
  return {
    listGheDangDat: rootReducer.datVeReducer.danhSachGheDangDat
  }
}

export default connect (mapStateToProps)(HangGhe)