import React from 'react'
import Search from '../icons/Search'
import { useNavigate } from 'react-router-dom'


const Header = ({ showCart }) => {
  const navigate = useNavigate()
  return (
    <>
      <div className="header__hr" />
      <header className="header">
        <div className="header__container">
          <div className="header__logo">stack<span>overflow</span></div>
          <div className="header__main">
            <div className="header__tab"
              onClick={() => { navigate('/page1') }}
            >About</div>
            <div className="header__tab header__tab--keep"
              onClick={() => { navigate('/') }}
            >
              Products
            </div>
            <div className="header__tab"
              onClick={showCart}
            >Show Cart</div>
            <Search className="header__searchIcon" color="#888" />
            <input className="header__searchBar"
              placeholder='Search...'
            />
          </div>
          <div className="header__user">
            <button className="button--login">Log in</button>
            <button className="button--signup">Sign up</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header