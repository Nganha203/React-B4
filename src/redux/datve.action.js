import { DAT_VE } from "./datve.const"

export const gheDangChon = (payload) =>{
    return{
        type: DAT_VE.DAT_GHE,
        payload
    }
    
}
export const huyGhe = (payload) =>{
    return{
        type: DAT_VE.HUY_GHE,
        payload
    }
}