import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='xl:mt-20 w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base'>
            <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
                <div className='flex items-center lg:py-2'>
                
                By&nbsp;<p>Kenneth Camacho</p>
                </div>
                <Link href="mailto:kennethcxv@outlook.com" target={"_blank"} >Say Hello</Link>
                </Layout>
    </footer>
  )
}

export default Footer