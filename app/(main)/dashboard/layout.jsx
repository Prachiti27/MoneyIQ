import React, { Suspense } from 'react'
import DashboardPage from './page'
import {BarLoader} from 'react-spinners'

const DashboardLayout = () => {
  return (
    <div className='px-5'>
        <h1 className='text-6xl font-bold tracking-tight text-gray-900 mb-5'>Dashboard</h1>
        <Suspense fallback={<BarLoader width={"100%"} color='#9333ea'/>}>
            <DashboardPage/>
        </Suspense>
    </div>
  )
}

export default DashboardLayout
