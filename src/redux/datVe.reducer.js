import { DAT_VE } from "./datve.const"

const STATE_DEFAULT = {
    danhSachGheDangDat: [],
}

const datVeReducer = (state = STATE_DEFAULT, action) =>{
    switch(action.type){
        case DAT_VE.DAT_GHE:{
            let newDanhSach = [...state.danhSachGheDangDat]
            let index = newDanhSach.findIndex((item) => item.soGhe === action.payload.soGhe)
            console.log(index)
            if(index !== -1){  // có vị trí ghế rồi
                newDanhSach.splice(index, 1)
            }
            else{
                newDanhSach.push(action.payload)
            }
            console.log(newDanhSach)
            state.danhSachGheDangDat = newDanhSach
            return {...state}
        }
        case DAT_VE.HUY_GHE:{
            let newDanhSach = [...state.danhSachGheDangDat]
            let index = newDanhSach.findIndex((item) => item.soGhe === action.payload.soGhe)
            console.log(index)
            if(index !== -1){  // có vị trí ghế rồi
                newDanhSach.splice(index, 1)
            }
            state.danhSachGheDangDat = newDanhSach
            return {...state}
        }
        default: return{...state}
    }
}

export default datVeReducer