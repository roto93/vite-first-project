import './css/App.css'
import './css/reset.css'
import './css/header.css'
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'

function App() {
  const [productData, setProductData] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProductData = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    setProductData(data)
  }

  const addToCart = (item) => () => {
    const newItem = { ...item }
    setCart([...cart, newItem])
  }

  const showCart = () => {
    alert(JSON.stringify(cart))
  }

  useEffect(() => {
    fetchProductData()
  }, [])

  return (
    <div className="App">
      <Header {...{ showCart }} />
      <main className="main">
        <nav className="nav"></nav>
        <Routes>
          <Route path="/" element={
            <div className="content">
              {productData.map(item => (
                <div className="card">
                  <p className="card__title">{item.title}</p>
                  <img height="200px" src={item.image} alt={item.title} className="card__img" />
                  <button onClick={addToCart(item)}>add to cart</button>
                </div>
              ))}
            </div>
          } />
          <Route path="/page1" element={<div>page1</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
