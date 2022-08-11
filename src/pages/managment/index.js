import { useEffect } from "react"
import { useState } from "react"
import { getPaginatedData } from "../../api/api"
import CustomPaginationActionsTable from "../../components/table/table"


export const ManagmentProducts = ()=>{
  const [page , setPage]= useState(0)
  const [data,setData ] = useState([])
  useEffect(()=>{
    getPaginatedData(page,5,'products').then(res=>setData(res))
  },[]) 

  return (
    <CustomPaginationActionsTable/>
    
  )
}