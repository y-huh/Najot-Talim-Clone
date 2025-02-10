import React from 'react'
import getToken from '../hooks/getToken'
import Header from '../modules/Header'
import Navbar from '../modules/Navbar'

const DashboardLayout = ({children}) => {
  const {hideMenu} = getToken()
  return (
    <>
      <Header />
      <div className='flex justify-baseline'>
        <Navbar/>
        <div className={`${hideMenu ? 'w-full' : 'w-[80%]'} overflow-auto`}>
          {children}
        </div>
      </div>
    </>
  )
}

export default DashboardLayout