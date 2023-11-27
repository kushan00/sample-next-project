import React from "react";
import Link from 'next/link'
import Image from 'next/image';
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


const Navbar = () => {
  return (
    <div>
        <div className="navbar-top" style={{ backgroundColor: "#F0F0F0", height: '40px', display: 'flex', alignItems: 'center', width:'100%' }}>
        <p style={{color:'#707070', position: 'absolute', left:'764px', fontSize:'12px' }}>Message us on</p>
        <span style={{position: 'absolute', left:'866px', fontSize: '12px', color:'#707070', }}><FaWhatsapp /></span>
        <p style={{color:'#707070', position: 'absolute', left:'882px', fontSize:'12px' }}>+94 777 265 262</p> 
        <p style={{color:'#707070', position: 'absolute', left:'1041px', fontSize:'12px' }}><a href="/about">About us</a> / <a href="/blog">Blog</a> / <a href="/contact">Contact</a></p>
        <span style={{position: 'absolute', left:'1241px', fontSize: '17px', color:'#707070', }}><FaFacebookF /></span>
        <span style={{position: 'absolute', left:'1283px', fontSize: '17px', color:'#707070', }}><FaInstagram /></span>
        <span style={{position: 'absolute', left:'1330px', fontSize: '17px', color:'#707070', }}><FaTiktok /></span>
        </div>
        <div class="navbar-bottom" style={{ backgroundColor: "white", width: '100%', height: '80px', display:'flex', alignItems: 'center' }}>
            <div style={{position: 'absolute', left:'96px', }}>
                <Image src="/images/honeymoonslklogo.png" alt="Honeymoon Logo" width={217} height={53}/>
            </div>
            <p style={{color:'#6E6E6E', position: 'absolute', left:'830px', fontSize:'14px' }}>Sceneries</p>
            <p style={{color:'#6E6E6E', position: 'absolute', left:'944px', fontSize:'14px' }}>Places to stay</p>
            <p style={{color:'#6E6E6E', position: 'absolute', left:'1094px', fontSize:'14px' }}>Offers</p>
            <div style={{position: 'absolute', left:'1184px', }}>
                <a href="#" style={{backgroundColor:'#BF343E', height:'40px', width:'160px', color:'white', padding:'10px 40px 10px 40px', borderRadius:'20px', fontSize:'14px'}}>Get a Quote</a>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
