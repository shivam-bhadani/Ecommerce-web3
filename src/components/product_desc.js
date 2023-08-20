import React,{useState} from "react"
import {ethers} from "ethers"
export default function Product_desc({product_desc,setToggle,account,marketplace,provider}){
    let [stock,setStock]=useState(false)
    let [purchased,setPurchased]=useState(false)
    let [time,setTime]=useState('')

    const buyHandle=async()=>{
        if(!product_desc.stock){
            setStock(true)
            return
        }
        const signer=await provider.getSigner()
        let transaction =await marketplace.connect(signer).buyProduct(product_desc.id,{value:product_desc.price})
        let receipt = await transaction.wait()
        console.log(receipt)
        setTime(new Date(Date.now()).toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric',hour:'numeric',minute:'numeric',second:'numeric'}))
        setPurchased(true)
    }
    return(
        <>
          <div className="product">
            <div className="product_description m-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="mt-4">
                            <button className="float-end btn-close" onClick={()=>setToggle(false)}></button>
                        </div>

                    </div>
                    <div className="row"> 
                        <div className="col-6 text-center">
                            <div className="m-5 p-5">
                                <img src={product_desc.image} />

                            </div>


                        </div>
                        <div className="col-6">
                            <div className="m-5 px-5 py-4">
                                {stock && <div class="alert alert-danger" role="alert">Currently, this item is Out of Stock</div>}
                                <h2 className="my-4">{product_desc.name}</h2>
                                <h4 className="mt-2 mb-0">Description</h4>
                                <p className="mb-2 mt-0">{product_desc.description}</p>
                                <h5 className="mt-4">Price:  {ethers.utils.formatUnits(product_desc.price.toString(),'ether')} ETH</h5>
                                <div><p>FREE Delivery</p></div>
                                <div><p>{new Date(Date.now()+345600000).toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric'})}</p></div>
                                {product_desc.stock &&
                                <p className="card-text" style={{color:"green"}}>In Stock</p>
                                }
                                {!product_desc.stock &&
                                <p className="card-text" style={{color:"red"}}>Out of Stock</p>
                                }

                                {!purchased && <button className="btn px-5 btn-lg btn-dark my-2" onClick={buyHandle}>Buy</button>}
                                {purchased && <div><h5>Purchased</h5><h6>Item bought on {time}</h6></div>}
                                

                            </div>

                        </div>


                    </div>

                </div>

            </div>
          </div>
        </>
    )
}