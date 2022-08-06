import React from 'react'
import Search from '../icons/Search'


const Header = () => {
  return (
    <>
      <div className="header__hr" />
      <header className="header">
        <div className="header__container">
          <div className="header__logo">stack<span>overflow</span></div>
          <div className="header__main">
            <div className="header__tab">About</div>
            <div className="header__tab header__tab--keep">Products</div>
            <div className="header__tab">For Teams</div>
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