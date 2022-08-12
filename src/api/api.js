import { Filter2 } from '@mui/icons-material';
import HttpService from '../services/index'



export const getPaginatedData =async (page ,limit , field)=>{
    const res = await HttpService.get(`${field}?_page=${page}&_limit=${limit}`)
    const result = { products:res.data, count:res.headers["x-total-count"] }
    return result ;     
}

export const getData =async (field)=>{
    const res = await HttpService.get(field)
    return res.data   
}


export const getFilteredData =async ( field , filter)=>{
    const res = await HttpService.get(`${field}?${filter}`)
    const result = { products:res.data, count:res.headers["x-total-count"] }
    return result ;     
}