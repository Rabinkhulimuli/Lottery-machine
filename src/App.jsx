import React from 'react'
import './App.css'
import Data from './data'
export default function App(){

  return(
    <>
    <Navbar/>
    <Mainbody/>
    </>
  )
}
function Navbar(){
  return(
    <nav className='flex-nav'>
      <img src="../public/dice-face.png" alt="dice" className='dice-logo' />
      <p className='heading'>L</p>
      <p className='heading'>U</p>
      <p className='heading'>C</p>
      <p className='heading'>K</p>
      <p className='heading'>Y</p>
      <p className='heading'>D</p>
      <p className='heading'>R</p>
      <p className='heading'>A</p>
      <p className='heading'>W</p>
      <img className='dice-logo1' src="../public/exp.png" alt="dice" />
    </nav>
  )
}
function Mainbody(){
  
  const [link1,setLink1]=React.useState("");
  const [link2,setLink2]=React.useState("")
  const [link3,setLink3]=React.useState("")
  function clickMe(){
    const leng=Data.length;
    const dlinkx1=Math.floor(Math.random()*leng)
    const dlinkx2=Math.floor(Math.random()*leng)
    const dlinkx3=Math.floor(Math.random()*leng)
    setLink1(()=>{
      return Data[dlinkx1].url
    })
    setLink2(()=>{
      return Data[dlinkx2].url
      
    })
    setLink3(()=>{
      return Data[dlinkx3].url
    
    })
  }
  return(
    <div >
        <div>
        <div className='dollar'></div>
          <h1 className='title'>TEST YOUR LUCK</h1>
         <div className='dollar'></div>
        </div>
        <div  className='m-image'>
        <button className='buton' onClick={clickMe} id='l-img' >HIT HERE</button>
        <div className='sell'>
        <img src={link1} className='image-m' id="l-img" />
        <img src={link2} className='image-m' id="l-img" />
        <img src={link3} className='image-m' id="l-img" />
        <h2 className="closePrize">{(link1==link2&&link2!=link3)||(link2===link3&&link3!=link1)||(link1==link3&&link3 !=link2)?"YOUR ARE SO CLOSE OF WINNING $10000000000":""}</h2>
        <h2 className="prize">{link1===link2&&link2===link3?"YOU WON THE LOTTERY":"BETTER LUCK NEXT TIME"}</h2>
        </div>
        </div>
    </div>
  )
}