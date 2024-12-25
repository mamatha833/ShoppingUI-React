import React from 'react'

const Header = () => {
  return (
    <div className='header-section'>


        <div className="left"> 

            <div className="title">
                <h2>Shopping Mall</h2>
            </div>
        </div>

        <div className="centre">

            <ul>
                <li>Women</li>
                <li>Men</li>
                <li>Children</li>
                <li>Beauty</li>
            </ul>

        </div>

        <div className="search">
            <input type="text" placeholder='search...'></input>
        </div>


        <div className="right">

            <div className="signin">signin / signup</div>
            <div className="cart">Cart</div>

        </div>
      
    </div>
  )
}

export default Header
