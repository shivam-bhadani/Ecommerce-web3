import React from "react";
import Product from "./product"
import ShowProducts from "./show_product";

export default function Electronics({electronics,account,marketplace,provider}){
    return(
        <>
        <ShowProducts title ={"Electronics"} products={electronics} account={account} marketplace={marketplace} provider={provider} />
        </>
    )
}