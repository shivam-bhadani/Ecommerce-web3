import React,{useState} from "react"
import {ethers} from "ethers"
import {Link} from "react-router-dom"

export default function Product({product,setToggle,setProduct_desc}){

    const buy=async()=>{
        
    }
    return(
        <>
            <div class="card">
                <img src={product.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{product.name}</h5>
                  
                  <h6 class="card-text">{ethers.utils.formatUnits(product.price.toString(),'ether')} ETH</h6>
                  {product.stock &&
                  <p className="card-text" style={{color:"green"}}>In Stock</p>
                  }
                  {!product.stock &&
                  <p className="card-text" style={{color:"red"}}>Out of Stock</p>
                  }
                </div>
                <button className="btn btn-dark m-2 mb-4" onClick={()=>{setToggle(true);
                setProduct_desc(product)
                }
                } >Buy</button>
            </div>
        
        
        </>
    )
}