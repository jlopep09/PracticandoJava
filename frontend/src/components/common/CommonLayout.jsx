import React from 'react'
import { Navbar } from './Navbar'

const CommonLayout = ({children}) => {
  return (
    <>
        <Navbar></Navbar>
        {children}
    </>
  )
}

export default CommonLayout