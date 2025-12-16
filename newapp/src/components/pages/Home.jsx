import React, { use } from "react";
import Header from "../common/Header";
import aboutImg from "../../assets/images/Image-2025-12-13T215455.860-1.webp"
export default function Home() {

let cname="WsCubetech"

let status=false

let user=[
    {name:"John", age:30},
    {name:"Jane", age:25},
    {name:"Doe", age:35},
    {name:"Smith", age:28}
]

 let alluser= user.map((obj,index)=><div> {obj.name} || {obj.age} </div>)


  return (
    <>
    
      <Header />

      <section className="py-10 ">
            <div className="max-w-[1320px] grid grid-cols-2 gap-10 mx-auto">
                <div>
                    <img src={aboutImg} alt="" />
                </div>
                <div>
                    <h1>About Us</h1>
                </div>
            </div>
      </section>  

      <section className="py-10 bg-red-200">
       
       {alluser}

        { user.map((obj,index)=><div> {obj.name} || {obj.age} </div>) }

        {
            user.map((obj,index)=>{
                return(
                    <div>
                        {obj.name} || {obj.age}
                    </div>
                )
            })
        }
       
        
        {
            status ?  <p className="text-center">Welcome to Ws</p> : ''
        }

        {
           status &&   <p className="text-center">Welcome to Ws</p>
        }

        
        <h1 className="text-center text-3xl font-bold uppercase">
          Our Products {cname} {10+20} {"welcome"}
        </h1>
        <div className="max-w-[1320px] md:px-[0px] px-[15px] mx-auto mt-10 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </>
  );
}

function ProductCard() {
  return (
    <div className="bg-white">
      <img
        src="https://lawpreptutorialkolkata.com/wp-content/uploads/2025/12/Frame-1000008375-1-1.webp"
        alt=""
      />
      <div className="p-3">
        <h3 className="font-bold">CLAT 2027 Target Batch</h3>
        <p className="mt-3">
          For Class 12 students targeting CLAT 2027 (Dec 2026 Exam)
        </p>
        <button className="bg-amber-700 p-[7px_15px] mt-4 cursor-pointer text-white duration-200 hover:bg-[#FFC73B]">
          Read More
        </button>
      </div>
    </div>
  );
}
