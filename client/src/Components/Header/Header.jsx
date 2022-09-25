import React from 'react'
import "./Header.css"
export default function Header() {
  return (
    <div className='header'>
    <div className="headerTitles">
        <span className="headerTitleSm">
        Ancient Rome
        </span>
        <span className="headerTitleLg">Blog</span>
    </div>
    <img className='headerImg' src="https://theromanguy.com/wp-content/uploads/Why-Was-the-Colosseum-Built-1440-x-675-900x420.jpg" alt="Header Image" />
    </div>
  )
}


