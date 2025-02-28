import React from 'react'
import LineChart from '../components/LineChart'
import BarChart from '../components/BarChart'
import Dashboard from './Dashboard'

const Admin = () => {
  return (
    <div className=''>
       <div className='flex my-12 justify-center gap-6'>
      <LineChart />
      <LineChart />
      
       </div>
       <div className='px-32 '>
        <BarChart />
       
       </div>
    </div>
  )
}

export default Admin