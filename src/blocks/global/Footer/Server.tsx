import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FooterServer = async() => {
  const payload = await getPayloadHMR({config})
  const footer = await payload.findGlobal({
    slug:'footer'
  })
  return (
    <div className='bg-gray-500 border-t-8 border-green-500 '>
      <div className='py-12 max-w-5xl mx-auto flex justify-between w-full items-center'>
        <div className='relative w-64 h-20'>
          <Image src={footer.logo.url} fill className='object-contain'  alt='header-logo' />
        </div>
        <div>
          {footer.copyRightNotice}
        </div>
        <div>
          {
            footer.nav?.map((item , key) => {
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

export default FooterServer