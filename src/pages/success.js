import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import {BsBagCheckFill} from 'react-icons/bs'

import { runFireWorks } from '../../lib/utils'
import { useStateContext } from '../../context/StateContext'

const Success = () => {
    const {setCartItems,setTotalPrice,setTotalQuantities}=useStateContext()

    useEffect(()=>{
        localStorage.clear();
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantities(0)
        runFireWorks()
    },[]);

  return (
    <div className='success-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill/>
            </p>
            <h2 className=''>Thank you for your order !</h2>
            <p className='email-msg'>Check you email inbox for the receipt.</p>
            <p className='description'>
                if you have any question, please may
                 <a className='email' href="mailto:order@gmail.com">
                    order@gmail.com
                 </a>
            </p>
            <Link href="/">
                <button type="button" width="300px" className='btn'>
                    Continue Shopping
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Success