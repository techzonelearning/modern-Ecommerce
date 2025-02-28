import React from 'react'
import TopProducts from '../components/TopProducts'

const Dashboard = () => {
  return (
    <div className='flex flex-col px-20 py-10 gap-10'>
      <div className='flex justify-between gap-10 items-center'>
        <TopProducts />
        <TopProducts />
      </div>  
    </div>
  )
}

export default Dashboard