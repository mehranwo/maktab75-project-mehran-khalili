// import AdminDoshboard from 'pages/adminDoshboard/AdminDoshboard'
// import BuyPage from 'pages/buyPage/BuyPage'
// import FinalBuy from 'pages/finalBuy/FinalBuy'
import Home from '../pages/Home'
import Login from '../pages/Login/LoginPage'
// import Product from 'pages/product/Product'
// import ResultBuy from 'pages/resultBuy/ResultBuy'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

export default function HandleRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        {/* 
        <Route path='/buyPage' element={<BuyPage/>} />
        <Route path='/finalBuy' element={<FinalBuy/>} />
        <Route path='/resultBuy' element={<ResultBuy/>} />
        <Route path='/adminDoshboard' element={<AdminDoshboard/>} />
        <Route path=':id' element={<Product/>} /> */}
    </Routes>
  )
}
