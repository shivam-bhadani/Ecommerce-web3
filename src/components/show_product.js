import React,{useState} from "react"
import Product from './product.js'
import Product_desc from "./product_desc.js"

export default function ShowProducts({title,products,account,marketplace,provider}){
    let [toggle,setToggle]=useState(false)
    let [product_desc,setProduct_desc]=useState()
    if(products){
    return(
        <>
        <div className="container">
        <div className="p-2 m-4 text-center">
            <h1>
                {title}
            </h1>
          </div>
          <div className="container">
              
              <div className="row">
                  <div className="col-3 mb-4">
                {products.map((product,key)=>{
                    
                    return(<Product product={product} marketplace={marketplace} setToggle={setToggle} setProduct_desc={setProduct_desc} />)
                })}
                </div>
            </div>
            </div>
            </div>
            {toggle && <Product_desc product_desc={product_desc} setToggle={setToggle} account={account} marketplace={marketplace} provider={provider} />}
            </>
        
    )
            }
    else{
        <h1>
            No products exist
        </h1>
    }
    
}
