import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  //   let [count, setCount] = useState(1);
  //   let [count1, setCount1] = useState(1);
  let [categoryData, setCategoryData] = useState([]);
  let [brandData, setBrandData] = useState([]);
  let [productData, setProductData] = useState([]);  
  let getCategories = async () => {
    let apiRes = await fetch(
      `https://wscubetech.co/ecommerce-api/categories.php`
    );
    let finalData = await apiRes.json();
    setCategoryData(finalData.data); //Array[24 Element]
  };

  let getBrands = async () => {
    let apiRes = await fetch(`https://wscubetech.co/ecommerce-api/brands.php`);
    let finalData = await apiRes.json();
    let { data } = finalData;
    setBrandData(data);
    
  };

  let getProducts =async () => {
     let apiRes=await axios.get(`https://wscubetech.co/ecommerce-api/products.php`)
     //axios res->Data key fixed
     let {data}=apiRes.data
     setProductData(data);
     
  };

  //   getCategories();
  //   getBrands();
  //   getProducts();

  let product = [
    {
      title: "Essence Mascara Lash Princess",
      img: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
      desc: "Volumizing and lengthening mascara with long-lasting effect.",
      price: "Rs.10",
      discount: "(7)",
    },
  ];

  useEffect(() => {
    getCategories();
    getBrands();
  }, []); //Blank Array ->One Time

  useEffect(() => {
    getProducts();
  }, []); //Filter State ke Change

  return (
    <div className="w-full px-4 pb-6 py-10">
      <div className="grid grid-cols-[18%_auto] gap-10">
        {/* LEFT SIDEBAR */}
        <div className="hidden lg:block border-1 border-[#ccc] p-3 ">
          <div className="h-[250px] border-1 border-[#ccc] p-3 overflow-y-scroll">
            <h2 className="text-sm font-semibold uppercase mb-3">Categories</h2>
            <ul className="space-y-2 text-sm">
              {categoryData.length >= 1 &&
                categoryData.map((obj, index) => {
                  return (
                    <li key={index} className="flex items-center gap-2">
                      <input className="accent-black" type="checkbox" />
                      <span>{obj.name}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="h-[250px] border-1 border-[#ccc] p-3 overflow-y-scroll">
            <h2 className="text-sm font-semibold uppercase mb-3">Brand</h2>
            <ul className="space-y-2 text-sm">
              {brandData.length >= 1 &&
                brandData.map((obj, index) => {
                  return (
                    <li key={index} className="flex items-center gap-2">
                      <input className="accent-black" type="checkbox" />
                      <span>{obj.name}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="border-1 border-[#ccc] p-3 ">
            <h2 className="text-sm font-semibold uppercase mb-3">Price</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <input className="accent-black" type="radio" name="price" />
                <span>Rs. 10 to Rs. 250</span>
              </li>
              <li className="flex items-center gap-2">
                <input className="accent-black" type="radio" name="price" />
                <span>Rs. 250 to Rs. 500</span>
              </li>
              <li className="flex items-center gap-2">
                <input className="accent-black" type="radio" name="price" />
                <span>Rs. 500 to Rs. 1000</span>
              </li>
              <li className="flex items-center gap-2">
                <input className="accent-black" type="radio" name="price" />
                <span>Rs. 1000 &amp; Above</span>
              </li>
            </ul>
          </div>
          <div className="border-1 border-[#ccc] p-3 ">
            <h2 className="text-sm font-semibold uppercase mb-3">
              Discount Range
            </h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <input className="accent-black" type="radio" name="discount" />
                <span>5% and above</span>
              </li>
              <li className="flex items-center gap-2">
                <input className="accent-black" type="radio" name="discount" />
                <span>10% and above</span>
              </li>
              <li className="flex items-center gap-2">
                <input className="accent-black" type="radio" name="discount" />
                <span>15% and above</span>
              </li>
              <li className="flex items-center gap-2">
                <input className="accent-black" type="radio" name="discount" />
                <span>20% and above</span>
              </li>
            </ul>
          </div>
          <div className="border-1 border-[#ccc] p-3 ">
            <h2 className="text-sm font-semibold uppercase mb-3">Rating</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <input className="accent-black" type="radio" name="rating" />
                <span>4★ &amp; above</span>
              </li>
              <li className="flex items-center gap-2">
                <input className="accent-black" type="radio" name="rating" />
                <span>3★ &amp; above</span>
              </li>
              <li className="flex items-center gap-2">
                <input className="accent-black" type="radio" name="rating" />
                <span>2★ &amp; above</span>
              </li>
              <li className="flex items-center gap-2">
                <input className="accent-black" type="radio" name="rating" />
                <span>1★ &amp; above</span>
              </li>
            </ul>
          </div>
        </div>

        {/* RIGHT PRODUCTS */}
        <div className="flex-1 bg-gray-50 p-4 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productData.map((product, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[180px] w-full object-contain"
                />
                <div className="p-4">
                  <h3 className="text-sm font-semibold mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-3">
                    {product.description}
                  </p>
                  <div className="flex gap-2 text-sm">
                    <span className="font-semibold">{product.price}</span>
                    <span className="line-through text-gray-400">
                      {product.price}
                    </span>
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
