import './Main.css'

import fb from "../assets/images/facebook.png"
import li from "../assets/images/linkedin.png"
import tw from "../assets/images/twitter.png"
import home from "../assets/images/home.png"
import phone from "../assets/images/phone.png"
import em from "../assets/images/email.png"
import line from "../assets/images/line.png"
import hero from "../assets/images/hero.jpg"
import updown from "../assets/images/up-and-down-arrow.png"
import user from "../assets/images/user.png"
import chat from "../assets/images/chat.png"
import send from "../assets/images/send.png"
import React, { useState } from 'react'
function Main() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [work, setWork] = useState()
    const [message, setMessage] = useState()
    const [status, setStatus] = useState(false)
    function submitHandler() {
        event.preventDefault()
        console.log(name, email, work, message)
        setStatus(true)
    }
    return (
        <section>
            <div className="mainContainer container">
                <div className="leftContainer">
                    <div className="titleBox">
                        <h3 className="smallTitle"><img src={line} alt="" /> Say hello</h3>
                        <h1 className="largeTitle">Let's Work Together.</h1>
                        <p className="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum et quibusdam quaerat natus repudiandae eaque nostrum.</p>
                    </div>
                    <div className="hero">
                        <img src={hero} alt="" height="350px" />
                    </div>


                </div>
                <div className="rightContainer">
                    <div className="infoBox">
                        <div className='info'>
                            <span className="email"><img src={home} alt="" width="20px" />muzffarshaikh.art@gmail.com</span>
                            <span className="address"><img src={phone} alt="" width="20px" /> 558 Ebert Summit Suite 375 Lake Leonardchester</span>
                            <span className="contact"><img src={em} alt="" width="20px" /> +84 080 800 088</span>
                        </div>
                        {/* <div className="socialMedia">
                                <a href="" className="socialMedia"><img src={fb} alt="" width="40px" /></a>
                                <a href="" className="socialMedia"><img src={li} alt="" width="40px" /></a>
                                <a href="" className="socialMedia"><img src={tw} alt="" width="40px" /></a>
                            </div> */}
                    </div>
                    <form className="formBox" onSubmit={submitHandler}>
                        <div className="inputBox">
                            <input type="text" placeholder='Name' value={name} onChange={(e) => { setName(e.target.value) }} required />
                            <img src={user} alt="" />
                        </div>
                        <div className="inputBox">
                            <input type="text" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                            <img src={send} alt="" />

                        </div>
                        {/* <div className="inputBox">
                            <input type="text" placeholder='What are you working on?' />
                        </div> */}

                        <div className="inputBox" required value={work} onChange={(e) => { setWork(e.target.value) }} >
                            <select>
                                <option className="select-selected" value="0">working as:</option>
                                <option className="select-selected" value="1">Web Developer</option>
                                <option className="select-selected" value="2">UI/UX Designer</option>
                                <option className="select-selected" value="3">Data Analyst</option>
                            </select>
                            <img src={updown} alt="" />
                        </div>

                        <div className="inputBox" value={message} onChange={(e) => { setMessage(e.target.value) }} >
                            <textarea name="" id="" cols="30" rows="6" placeholder='Message'></textarea>
                            <img src={chat} alt="" />
                        </div>
                        <div className="buttonBox">
                            <button type="submit">Let's Talk  &#10230;</button>
                        </div>
                    </form>
                </div>
                {
                    status ? <div className="detailBox">
                        <hr />
                        <h3>Hello {name},</h3>
                        <p>verfictaion is sent to your email <br />
                            <span>
                                <img src={em} alt="" width="20px" /><b style={{ fontWeight: "600" }}>{email}</b>
                            </span>
                        </p>
                        <p>thanks for registration!</p>
                    </div> : ""
                }

            </div>
        </section>
    )
}
export default Main;