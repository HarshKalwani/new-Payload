import Image from 'next/image'
import React from 'react'

function ImageBlockServer({image}:{image:{url:string , alt:string}}) {
  return (
    <div className='flex justify-center'>
        <Image src={image.url} alt={image.alt} width={500} height={500}/>
    </div>
  )
}

export default ImageBlockServer