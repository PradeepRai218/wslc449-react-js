import React, { use } from "react";
import Header from "../common/Header";
import aboutImg from "../../assets/images/Image-2025-12-13T215455.860-1.webp"
import { product } from "../../Data/productData"; //Array[30 Object]
export default function Home() {

let cname="WsCubetech"

let status=false

let user=[
    {name:"John", age:30},
    {name:"Jane", age:25},
    {name:"Doe", age:35},
    {name:"Smith", age:28}
]

 let alluser= user.map((obj,index)=><div key={index}> {obj.name} || {obj.age} </div>)




  return (
    <>
    
      <Header user={["ram","ravi"]}  companyName={cname} email="pradeep@wscubetech.com" phone={88888888} />
      <Header >
          <h1>Welcome</h1>
          <img src="" alt="" />
      </Header>

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

        { user.map((obj,index)=><div key={index}> {obj.name} || {obj.age} </div>) }

        {
            user.map((obj,index)=>{
                return(
                    <div key={index}>
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

          {
            product.map((obj,index)=>{
              return(
                <ProductCard key={index} data={obj} />
              )
            })
          }  
          
         
        </div>
      </section>
    </>
  );
}
//  Props -  > Object {data:{ title:'',description:'',thumbnail:' }}
function ProductCard({data:{title,description,thumbnail}}) {
  // let {data}=props
  
  // let {title,description,thumbnail}=data
  
  return (
    <div className="bg-white">
      <img
        src={thumbnail}
        alt=""
      />
      <div className="p-3">
        <h3 className="font-bold">
          {title}
        </h3>
        <p className="mt-3">
          {description}
        </p>
        <button className="bg-amber-700 p-[7px_15px] mt-4 cursor-pointer text-white duration-200 hover:bg-[#FFC73B]">
          Read More
        </button>
      </div>
    </div>
  );
}
