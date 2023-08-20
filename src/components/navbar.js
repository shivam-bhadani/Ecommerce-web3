import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import SellProducts from "./sellProduct";
import {ethers} from 'ethers'

export default function Navbar({account,setAccount}){
  const [buttonContent,setButtonContent]=useState("Connect")
  

  const connectHandler=async()=>{
    const accounts= await window.ethereum.request({method:'eth_requestAccounts'})
    const account=ethers.utils.getAddress(accounts[0])
    setAccount(account)
    setButtonContent(account)
  }
    return(
        <>
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
              <button className="navbar-brand"><Link to="/">DecenMart</Link></button>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active text-light" aria-current="page">
                      <Link className="text-light" to="/">
                        Home
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active text-light" aria-current="page">
                      <Link className="text-light" to="/clothing">
                        Clothing
                      </Link>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active text-light" aria-current="page">
                      <Link className="text-light" to="/electronics">
                        Electronics
                      </Link>
                    </a>
                  </li>
                  
                  <li class="nav-item float-end">
                    <a class="nav-link active" aria-current="page" href="#"><Link to="/sellProduct">Sell Your Product</Link></a>
                  </li>
                  <li class="nav-item float-end">
                    <button class="nav-link active text-dark" onClick={connectHandler}>{buttonContent}</button>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>

          

        </>
    )


}