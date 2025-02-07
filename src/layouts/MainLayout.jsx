import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex flex-col bg-slate-500 text-white w-full min-h-screen'>
      <Header/>
      <main className='bg-gradient-to-r from-gray-700 via-gray-900 to-black  grow py-10'>
        <div>
          <Outlet/>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default MainLayout