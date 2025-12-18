import React from 'react'

export default function Header( {user,companyName,phone,email,children} ) {

    //props   === Object
    
    
    //props = { companyName:"WsCubetech",email:"pradeep@wscubetech.com",phone:8888888 }
    console.log(user);
    
  return (
    <header className='shadow-lg'>
        <div className='max-w-[1320px] mx-auto flex justify-between items-center gap-5'>
            <figure>
                <img src="/images/wscube-tech-logo-2.svg" alt="" /> 
                {companyName} | { phone } | {email}
                {children}
            </figure>

            <nav>
                <ul className=' gap-10 md:flex hidden'>
                    <li>
                        <a href="" className='text-xl' >Home</a>
                    </li>
                    <li>
                        <a href="" className='text-xl'>About</a>
                    </li>
                     <li>
                        <a href="" className='text-xl'>Course</a>
                    </li>
                    <li>
                        <a href="" className='text-xl'>Gallery</a>
                    </li>
                    <li>
                        <a href="" className='text-xl'>Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
