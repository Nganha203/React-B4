import React, { Component } from 'react'
import '../BT/ticket.css'
import ThongTin from './thongTin'
import HangGhe from './hangGhe'
import listGhe from '../../danhSachGhe.json'

export default class TicKet extends Component {

    renderHangGhe = () =>{
        return listGhe.map((item, index) =>{
            return <div key={index}>
                <HangGhe hangGhe={item} soHangGhe={index}/>
            </div>
        })
    }


    render() {
        return (
            <div className='bookingMovie bg'>
                <div className='bg-2'>
                    <div className="container-fluid">
                        <div className='row'>
                            <div className='col-8 text-center'>
                                <h1 className='text-warning pt-2'>ĐẶT VÉ XEM PHIM</h1>
                                <div className='text-light pt-1' style={{fontSize: '20px'}}>Màn hình</div>
                                <div className='man-hinh'>
                                    <div className='screen'></div>
                                </div>

                                {this.renderHangGhe()}
                                
                            </div>
                            <div className='col-4'>
                                <h2 className='text-light pt-4'>Danh sách ghế bạn chọn</h2>
                                <ThongTin/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}
