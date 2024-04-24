import React from 'react'
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { PiMapPinThin } from "react-icons/pi";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Contact</h6> 
    <a className="link link-hover"><div className='flex gap-1'><CiPhone size={20}/>(0778) 799-748</div></a>
    <a className="link link-hover"><div className='flex gap-1'><CiMail size={20}/>contact@sadeeminfo.com</div></a>
    <a className="link link-hover"><div className='flex gap-1'><PiMapPinThin size={20}/>ALGER BIRKHADEM
81 rue Mustapha Maqnoush, Birkhadem 16000</div></a>
  </nav> 
  <form>
    <h6 className="footer-title">Newsletter</h6> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
    </div>
  )
}

export default Footer
