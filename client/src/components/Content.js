import React from 'react'
import "./Content.css"

const Content = () => {
  return (
    <div>
      
        <h1 className='fea '>Features</h1>
        <div className='card-one'>
        <img className='feature-one' src="pong.gif" alt="My GIF" />
        <div>
        <h3>Secure Sharing</h3>
        <p className='feature-des'>Blockshare is a revolutionary file sharing platform built on blockchain technology. Unlike traditional file sharing platforms, Blockshare provides a secure and decentralized environment for sharing files. This means that your files are stored across a network of computers, making it nearly impossible for anyone to tamper with or hack into your data.</p>
        </div>
        </div>

        <div className='card-two'>
        <img className='feature-one' src="backup.svg" alt="My GIF" />
        <div className='second-fea'>
        <h3>Immutability</h3>
        <p className='feature-des'>Once a transaction is recorded on a blockchain, it cannot be altered or deleted. This means that the system is highly resistant to tampering or fraud, as any attempts to alter the data would be immediately detected by the network.</p>
        </div>
        </div>

        <div className='card-two'>
        <img className='feature-one' src="dec.gif" alt="My GIF" />
        <div className='second-fea'>
        <h3>Decentralization</h3>
        <p className='feature-des'>Blockchain-based file sharing operates on a decentralized network, which means that there is no central authority controlling the network. Instead, users can connect directly with each other, allowing for peer-to-peer file sharing without the need for intermediaries.</p>
        </div>
        </div>

        
       
    </div>
  )
}

export default Content