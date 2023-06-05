import React from 'react';
import './ReferAndEarn.css'
import Navbar from './Navbar';

function ReferAndEarn(props) {
    return (
        <>
        {/* <Navbar/> */}
        <div id='container' style={{margin:"0rem 11.68rem", justifyContent:"space-between"}}>
         <div>
            <p className='referral'>Your Referral Code </p>
            <p className='code'>EDCH54</p>
         </div>
         <div className="left">
            <p className='balance'>Wallet Balance</p>
            <p>₹ 500</p>
         </div>
        </div>
        <div className='refernumber' style={{margin:"4.94rem 11.68rem 1.25rem ", justifyContent:"left",}}>
        Friends who enrolled<span>(3)</span>
        </div>
        <div style={{margin:"0rem 11.68rem", justifyContent:"space-between"}}>
            <div className='box'>

            </div>
        </div>
        <div className='termcondition' style={{margin:"4.94rem 11.68rem 1.25rem ", justifyContent:"left",}}>Terms & Conditions</div>
        </>
    );
}

export default ReferAndEarn;