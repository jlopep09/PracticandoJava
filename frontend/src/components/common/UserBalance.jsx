import React, { useEffect, useState } from 'react'

const UserBalance = () => {

  const [UserBalance, setBalance] = useState(0)
  return (
    <div className='flex flex-row justify-center items-center btn btn-dash px-3 pr-2'>
        <p className='pr-1'>{UserBalance}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#998500" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-pound-sterling preview-icon"><circle cx="12" cy="12" r="10"/><path d="M10 16V9.5a1 1 0 0 1 5 0"/><path d="M8 12h4"/><path d="M8 16h7"/></svg>
    </div>
  )
}

export default UserBalance