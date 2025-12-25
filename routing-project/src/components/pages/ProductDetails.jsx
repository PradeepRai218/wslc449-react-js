import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ProductDetails() {
  let [productData, setProductData] = useState(null);
  let { pid } = useParams(); //Object { pid:25 } // 161

  let getProductDetails = async () => {
    let apiRes = await axios.get(
      `https://wscubetech.co/ecommerce-api/productdetails.php`,
      {
        params: {
          id: pid,
        },
      }
    );
    let apiData = await apiRes.data;
    let { product } = apiData; //single Product Data
    setProductData(product);
  };

  useEffect(() => {
    getProductDetails();
  }, [pid]);

  return (
    <div>
      <>
        {/* Main Content */}
        {productData && (
          <main className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Images */}
              <div className="space-y-4">
                {/* Placeholder for Three.js canvas */}
                <div className="bg-white rounded-lg shadow-lg aspect-square flex items-center justify-center">
                  <img
                    src={productData.image}
                    alt="Nike Air Max 2024"
                    className="rounded-lg"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Thumbnail 1"
                    className="rounded-lg cursor-pointer hover:opacity-75"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Thumbnail 2"
                    className="rounded-lg cursor-pointer hover:opacity-75"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Thumbnail 3"
                    className="rounded-lg cursor-pointer hover:opacity-75"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Thumbnail 4"
                    className="rounded-lg cursor-pointer hover:opacity-75"
                  />
                </div>
              </div>
              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    {productData.name}
                  </h1>
                  <p className="text-gray-500"> {productData.category}</p>
                </div>
                
                <div>
                  <span className="text-2xl font-bold text-gray-900">
                    Rs {productData.price}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Quantity</h3>
                  <div className="flex items-center space-x-2">
                    <button className="border rounded-md p-2 hover:border-black">
                      <i className="fas fa-minus" />
                    </button>
                    <input
                      type="number"
                      defaultValue={1}
                      min={1}
                      className="w-16 text-center border rounded-md p-2"
                    />
                    <button className="border rounded-md p-2 hover:border-black">
                      <i className="fas fa-plus" />
                    </button>
                  </div>
                </div>
                <div className="space-y-4">
                  <button className="w-full bg-black text-white py-4 rounded-full hover:bg-gray-800">
                    Add to Cart
                  </button>
                  <button className="w-full border border-black py-4 rounded-full hover:bg-gray-100">
                    Favorite <i className="far fa-heart ml-2" />
                  </button>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    Product Description
                  </h3>
                  <p className="text-gray-600">
                    {productData.description}
                  </p>
                </div>
                
              </div>
            </div>
          </main>
        )}
      </>
    </div>
  );
}
