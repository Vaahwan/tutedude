import React from "react";
// import "./first.css"
import "./dummyfirst.css"
// import image1 from "../assets/image1.svg"
import image1 from "../assets/Vector.png"
import image2 from "../assets/Vector2..png"
import image3 from "../assets/₹.png"
import image4 from "../assets/vector3.png"
import image5 from "../assets/vector4.png"

function First() {
    return <div>
        <div className="container">
            <div className="upper">
                <div className="upper-left">
                    <div className="upper-left-upper">
                        <div className="upper-left-first">
                            <p className="upper-left-first-first-p" >Refferal Earning</p>
                            <p className="upper-left-first-second-p">₹ 2500</p>
                        </div>
                        <div className="upper-left-second">
                            <p id="upper-left-second-first-p">Total Referals</p>
                            <p id="upper-left-second-second-p">7</p>
                        </div>
                        <div className="upper-left-third">
                            <p id="upper-left-third-first-p">Wallet Balance</p>
                            <p id="upper-left-third-second-p">₹ 500</p>
                        </div>
                    </div>
                    <div className="upper-left-lower">
                        <button id="withdraw">Withdraw Balance</button>
                    </div>
                </div>
                <div className="upper-right">
                    <p id="upper-right-p">Your Referral Code</p>
                    <div id="upper-right-lower">
                        <p>E</p>
                        <p>D</p>
                        <p>C</p>
                        <p>H</p>
                        <p>5</p>
                        <p>4</p>
                    </div>
                </div>
            </div>


            <div id="lower">
                <p id="lower-main-p">How does it work</p>

                <div id="lower-div">
                    <div id="lower-div-first">
                        <div className="lower-card" id="lower-card1">
                            <div id="image1-container">
                                <img id="image1" src={image1} alt="image1" />
                            </div>
                            <div id="lower-card1-text">
                                <p id="lower-card1-text-heading" >Invite your Friends</p>
                                <p id="lower-card1-text-p" >Share the link tutedude.com with <br /> your friends</p>
                            </div>
                        </div>
                        <div className="lower-card" id="lower-card2">
                            <div id="image2-container">
                                <img id="image2" src={image2} alt="image2" />
                            </div>
                            <div id="lower-card2-text">
                                <p id="lower-card2-text-heading" >Friend purchases any course</p>
                                <p id="lower-card2-text-p" >Using your REFERRAL CODE in the <br /> payments page</p>
                            </div>
                        </div>
                    </div>
                    <div id="lower-div-second">
                        <div className="lower-card" id="middle-card1">
                            <div id="image1-container" className="image3-container" >
                                <img id="image1" src={image3} alt="image1" />
                            </div>
                            <div id="lower-card1-text">
                                <p id="middle-card1-text-heading" >You get ₹ 200 as referral money</p>
                                <p id="middle-card1-text-p" >On total purchase the friend <br /> makes, into your wallet</p>
                            </div>
                        </div>
                        <div className="lower-card" id="middle-card2">
                            <div id="image2-container" className="image4-container">
                                <img id="image2" src={image4} alt="image2" />
                            </div>
                            <div id="lower-card2-text">
                                <p id="middle-card2-text-heading" >Your Friend gets ₹ 200 Off </p>
                                <p id="middle-card2-text-p" >On his overall fee on successful <br /> purchase using your referral code</p>
                            </div>
                        </div>
                    </div>
                    <div id="lower-div-second">
                        <div className="lower-card" id="lowerst-card1">
                            <div id="image1-container" className="image3-container" >
                                <img id="image1" src={image5} alt="image1" />
                            </div>
                            <div id="lower-card1-text">
                                <p id="lowest-card1-text-heading" >Transfer money from wallet </p>
                                <p id="lowest-card1-text-p" >When the wallet balance reaches <br /> ₹200 or more, you can withdraw it</p>
                            </div>
                        </div>
                    </div>
                </div>

                <p id="second-lowest-p">Friends Who Enrolled</p>
                <p id="first-lowest-p">Terms & Conditions</p>
            </div>
        </div>
    </div>
}

export default First;