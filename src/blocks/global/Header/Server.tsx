import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeaderServer = async() => {
  const payload = await getPayloadHMR({config})
  const header = await payload.findGlobal({
    slug:'header'
  })
  return (
    <div className='bg-gray-500 '>
      <div className='py-12 max-w-5xl mx-auto flex justify-between w-full items-center'>
        <div className='relative w-64 h-20'>
          <Image src={header.logo.url} fill className='object-contain'  alt='header-logo' />
        </div>
        <div>
          {
            header.nav?.map((item , key) => {
              return(
                <Link key={key} href={item.link}>{item.label}</Link>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default HeaderServer