import React from 'react'

function CoverBlockServer({title , subTitle} : {title:string , subTitle:string}) {
  return (
    <div className='max-w-5xl py-20'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <p className='text-xl'>{subTitle}</p>
    </div>
  )
}

export default CoverBlockServer