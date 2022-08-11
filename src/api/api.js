import HttpService from '../services/index'


export const getPaginatedData =async ({page ,limit , field})=>{
    const res = await HttpService.get(`${field}?_page=${page}&?_limit=${limit}`)
    return { data:res.data, count:res.headers["x-total-count"] };     
}

export const getData =async ({field})=>{
    const res = await HttpService.get(field)
    return res.data   
}