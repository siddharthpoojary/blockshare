import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import "./Home.css"
import{SiHiveBlockchain, SiReactrouter} from 'react-icons/si'
import Typed from 'react-typed';
import App from "./App"
import Content from './components/Content';
import Team from './components/Team';
import Footer from './components/Footer';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
    <main>
    <section>
    <nav className="d-flex justify-content-between align-items-center py-10 ">
    <h1 className='navlogo d-flex fs-2 p-4'> <SiHiveBlockchain className=' my-1'/>Blockshare </h1>
    <ul className='d-flex align-items-center'>
      <li className='p-4 '>
        <BsFillMoonStarsFill  className='text-white fs-5'/>
      </li>
      <li className=''><Link className='atag px-4 py-2 mx-4 align-items-center fs-5 text-white ' to='/app'>Services</Link></li>
    </ul>
    </nav>
    <div className='p-10 h-96 text-center '>
            
            <img className='home-gif' src="chain.gif" alt="My GIF" />
              <h2 className='slogan'>Blockchain <span className=' text-white'> based File Sharing</span></h2>
              <p className='typed'>Securly Share 
              <Typed className='reactype'
                  strings={[
                      'Files',
                      'Photos',
                      'Videos']}
                      typeSpeed={40}
                      backSpeed={50}
                      
                      loop >
                     
                  </Typed></p>
                  
                  
                  
                  
            </div>
    </section>
    </main>
    <Content/>
    <Team/>
    <Footer/>
    </div>
    
  )
}

export default Home