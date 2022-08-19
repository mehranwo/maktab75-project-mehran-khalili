// import AdminDoshboard from 'pages/adminDoshboard/AdminDoshboard'
// import BuyPage from 'pages/buyPage/BuyPage'
// import FinalBuy from 'pages/finalBuy/FinalBuy'
import Home from '../pages/Home'
import Login from '../pages/Login/LoginPage'
// import Product from 'pages/product/Product'
// import ResultBuy from 'pages/resultBuy/ResultBuy'
import { ManagmentProducts } from '../pages/managment'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../pages/Contact/Contact'
import BuyPage from '../pages/BuyPage/BuyPage'
import Favorite from '../pages/Favorite/Favorite'
import  ProductShow  from '../pages/product/Product'
import ProductsPage from '../pages/managment/productsPage'
import StockPage from '../pages/managment/stockPage'
import { OrdersPage } from 'pages/managment/OrdersPage'
import ProductDetail from 'components/productdetail'

export default function HandleRouter() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/admin' element={<ManagmentProducts/>}/>
        <Route path='/admin/products' element={<ProductsPage/>}/>
        <Route path='/admin/stock' element={<StockPage/>}/>
        <Route path='/admin/orders' element={<OrdersPage/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/buyPage' element={<BuyPage/>} />
        <Route path='/Favorite' element={<Favorite/>} />
        <Route path='/shop/:id' element={<ProductDetail/>}/>
        {/* 
        <Route path='/finalBuy' element={<FinalBuy/>} />
        <Route path='/resultBuy' element={<ResultBuy/>} />
        <Route path='/adminDoshboard' element={<AdminDoshboard/>} />
        <Route path=':id' element={<Product/>} /> */}
    </Routes>
  )
}
