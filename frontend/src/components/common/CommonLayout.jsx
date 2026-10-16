import React from 'react'
import { Navbar } from './Navbar'
import Footer from './Footer'

const CommonLayout = ({children}) => {
  return (
    <>
        <div className='flex flex-col justify-between min-h-lvh'>
          <div><Navbar></Navbar>
          <div className='flex items-center w-full align-middle justify-center'>
            <div className='w-full max-w-7xl'>
              {children}
            </div>
          </div></div>
          <Footer>  </Footer>
        </div>
    </>
  )
}

export default CommonLayout