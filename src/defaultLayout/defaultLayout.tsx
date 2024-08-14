import { Outlet } from 'react-router-dom'

import logo from '../assets/logo.svg'

export function DefaultLayout(){
  return (
    <>
      <div className='w-full flex justify-center h-[296px] bg-base-profile'>
        <div className='pt-16 '>
          <img src={logo} width={148} height={98} className='text-blue' />
        </div>
      </div>
      <Outlet />
    </>
  )
}