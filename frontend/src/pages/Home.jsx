import React from 'react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <div className='flex flex-col items-center pt-10 gap-3 min-h-100'>
        <Link className='btn btn-secondary w-2xl py-8' to={"/heroes"}>Tus heroes</Link>
        <Link className='btn btn-secondary w-2xl py-8' to={"/shop"}>Reclutar</Link>
        <Link className='btn btn-secondary w-2xl py-8' to={"/quests"}>Misiones</Link>
        <Link className='btn btn-secondary w-2xl py-8' to={"/404NotFound"}>404 Not Found</Link>
    </div>
  )
}

export default Home