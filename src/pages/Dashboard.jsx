import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  return (
    <div className='flex flex-row'>
        <div className='w-[200px] h-screen bg-slate-200'>
            <div className='w-full h-[150px] bg-orange-500 flex justify-center items-center'>
                <h1 className='text-white text-3xl'>Admin</h1>
            </div>
            <nav className='w-full flex flex-col'>
                <Link className='hover:bg-white w-full h-[40px] text-center items-center flex justify-center' to={'/'}>Dashboard</Link>
                <Link className='hover:bg-white w-full h-[40px] text-center items-center flex justify-center' to={'product'}>Product</Link>
                <Link className='hover:bg-white w-full h-[40px] text-center items-center flex justify-center' to={'analytics'}>Analytics</Link>
            </nav>
        </div>
        <div className='white w-full h-screen p-5'>
            <Outlet />
        </div>
    </div>
  )
}
