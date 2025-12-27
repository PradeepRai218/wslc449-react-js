import React, { useContext, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { IoEyeSharp } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";
import { cartContext } from '../../context/MyGlobalData';

export default function Home() {

    let {cart,setCart}  =useContext(cartContext)
    //2
    let [count,setCount]  =useState(1) //2

    let changeCount=()=>{
        
        setCount(count+1) //1+1
    }

    console.log(count,"Welcome"); //2 Welcome
    

    let [passwpordStatus,setPasswordstatus]=useState(false)

   let addtoCart=()=>{
        setCart([...cart,99])
   }

  return (
    <>
       
        <main className="min-h-screen bg-gray-50">
            
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 mb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
                    <p className="text-lg opacity-90">Experience excellence with our premium services</p>
                </div>
            </div>


            <div className='max-w-[1280px] mx-auto flex justify-center'>
                <input 
                type={passwpordStatus ? "text" : "password"}
                
                placeholder='Enter Passsword' className='border-1 pl-3' /> 

                <button onClick={()=>setPasswordstatus(!passwpordStatus)} className='bg-amber-600 p-3 cursor-pointer'>
                    {
                        passwpordStatus ?  <FaRegEyeSlash />  :  <IoEyeSharp />
                    }
                </button>
            </div>
           
            <h1 className='text-center font-bold text-3xl'>
                {count}
            </h1>
            <button onClick={ changeCount } className='bg-red-500 p-2 block mx-auto'>Change Count</button>
{/* 
            <button onClick={ 
                ()=>{
                     alert()
                } 
            
            } className='bg-red-500 p-2 block mx-auto'>Change Count</button>
          

            <button onClick={ ()=>addData(25,56) } className='bg-red-500 p-2 block mx-auto'>Change Count</button>
 */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Home</h1>
                    <p className="text-lg text-gray-600">Discover amazing content and features</p>
                    <button onClick={addtoCart} className='p-3 bg-yellow-500 cursor-pointer'>Add To Cart</button>
                </section>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Feature One</h2>
                        <p className="text-gray-600">Description of your first feature goes here.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Feature Two</h2>
                        <p className="text-gray-600">Description of your second feature goes here.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Feature Three</h2>
                        <p className="text-gray-600">Description of your third feature goes here.</p>
                    </div>
                </div>
            </div>
        </main>
        
    </>
  )
}
