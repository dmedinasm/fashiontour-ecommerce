import React from 'react'

const SkeltonEffect = () => {
  return (
    <div className='flex flex-col gap-5'>
          <div>
          <div className='w-[600px] h-[20px] bg-slate-200 animate-pulse'>
          </div>
          <div className='w-[200px] h-[20px] bg-slate-200 animate-pulse mt-2'>
          </div>
          </div>

          <div className='w-[600px] h-[50px] bg-slate-200 animate-pulse'>
          </div>
          <div className='w-[200px] h-[20px] bg-slate-200 animate-pulse'>
          </div>
          <div className='w-[200px] h-[20px] bg-slate-200 animate-pulse'>
          </div>
          </div>
  )
}

export default SkeltonEffect
