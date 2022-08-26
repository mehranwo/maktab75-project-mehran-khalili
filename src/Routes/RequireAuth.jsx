import React from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'


export default function RequireAuth() {
    const navigate = useNavigate()
    const location = useLocation()
  return (
    localStorage.getItem('TOKEN')
    ? <Outlet/>
    :<Navigate to='/login' state={{from : location } } replace/>
    )
}
