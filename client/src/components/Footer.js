import React from 'react'
import "./footer.css"
import{SiHiveBlockchain} from 'react-icons/si'

const Footer = () => {
  return (
    <div>
        <div className='footer-section'>
            <h1 className='footer-logo fs-2'><SiHiveBlockchain className=' my-1'/>Blockshare</h1>
            <p className='advert'>Blockshare is a revolutionary file sharing platform built on blockchain technology. Unlike traditional file sharing platforms, Blockshare provides a secure and decentralized environment for sharing files. This means that your files are stored across a network of computers, making it nearly impossible for anyone to tamper with or hack into your data.</p>
            <img  src='/niche.gif' classname="footer-img"/> 
            <p className="copy">Copyright &copy; 2023 All Rights Reserved by Blockshare</p>
     
        </div>
    </div>
  )
}

export default Footer