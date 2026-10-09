import React from 'react'

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a href='/' className="btn btn-ghost text-xl">PractJava</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className='hidden' ><a>Link</a></li>
        </ul>
      </div>
    </div>
  )
}
