import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false)
  const openSidebar = () => {
    if (!sidebar) { setSidebar(true) }
    else { setSidebar(false) }
  }

  return (
    <div className='flex flex-row w-full h-20 justify-between md:justify-around items-center px-2 sm:px-9 sm:py-2 shadow-md shadow-gray-400 bg-white fixed' 
    style={{zIndex:'1000'}}>
      {/* sidebar starts */}
      <div
        className=" flex flex-col justify-between w-3/6 sm:w-56"
        style={{
          minHeight: "100vh",
          background: "rgb(57 61 70 / 94%)",
          padding: 10,
          boxShadow: "6px 0px 2px rgba(0, 0, 0, 0.15)",
          zIndex: 2,
          position: "fixed",
          top: 0,
          left: !sidebar ? "-100%" : 0,
          bottom: 0,
          transition: "300ms ease-in",
        }}
      >
        <span
          npm install react-router-dom
          style={{
            position: "absolute",
            right: 10,
            top: 10,
            zIndex: 2,
            cursor: "pointer",
          }}
        >
          <CloseIcon style={{ color: "white" }} />
        </span>
        <div>
          <div className="flex flex-col gap-7 px-4 justify-center items-center pt-11 ">
            <ul className='cursor-pointer text-gray-400 hover:text-white'><Link to='/'>Home</Link></ul>
            <ul className='cursor-pointer text-gray-400 hover:text-white'>About Us</ul>
            <div className='products '>
              <ul className='cursor-pointer text-gray-400 hover:text-white'>Products</ul>
              <div className='products-content bg-gray-300 shadow-lg shadow-gray-500 rounded-lg w-52 h-52 p-1 text-center'>
                <a href='#'>Link 1</a>
                <a href='#'>Link 2</a>
                <a href='#'>Link 3</a>
                <a href='#'>Link 4</a>
              </div>
            </div>
            <div className='contact '>
              <ul className='cursor-pointer text-gray-400 hover:text-white'>Contact Us</ul>
              <div className='contact-content bg-gray-300 shadow-lg shadow-gray-500 rounded-lg w-52 h-52 p-1 text-center'>
                <a href='#'>Link 1</a>
                <a href='#'>Link 2</a>
                <a href='#'>Link 3</a>
                <a href='#'>Link 4</a>
              </div>
            </div>
            <ul className='cursor-pointer bg-red-600 hover:bg-red-800 text-white rounded-3xl px-5 py-1'>Get A Quote</ul>
          </div>
        </div>
      </div>
      {/* sidebar ends */}

      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-xl sm:text-2xl md:text-5xl font-extrabold text-red-600  cursor-pointer'>UNiMAX</h1>
      </div>
      <div className='hidden md:flex gap-9 items-center text-lg'>
        <ul className='cursor-pointer text-gray-500 hover:text-black'><Link to='/'>Home</Link></ul>
        <ul className='cursor-pointer text-gray-500 hover:text-black'>About Us</ul>
        <div className='products'>
          <ul className='cursor-pointer text-gray-500 hover:text-black'>Products</ul>
          <div className='products-content bg-gray-300 shadow-lg shadow-gray-500 rounded-lg w-52 h-52 p-1 text-center'>
            <a href='#'>Link 1</a>
            <a href='#'>Link 2</a>
            <a href='#'>Link 3</a>
            <a href='#'>Link 4</a>
          </div>
        </div>
        <div className='contact'>
          <ul className='cursor-pointer text-gray-500 hover:text-black'>Contact Us</ul>
          <div className='contact-content bg-gray-300 shadow-lg shadow-gray-500 rounded-lg w-52 h-52 p-1 text-center'>
            <a href='#'>Link 1</a>
            <a href='#'>Link 2</a>
            <a href='#'>Link 3</a>
            <a href='#'>Link 4</a>
          </div>
        </div>
        <ul className='cursor-pointer bg-red-600 hover:bg-red-800 text-white rounded-3xl px-5 py-1'>Get A Quote</ul>
      </div>
      <div className='block md:hidden' onClick={openSidebar}>
        <MenuIcon className='text-black cursor-pointer' />
      </div>
    </div>
  )
}

export default Navbar