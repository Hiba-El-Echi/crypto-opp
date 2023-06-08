
import { Routes,Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css'

const App = () => {  

  return (
    <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout>
        <div className="routes">
          <Routes>
            <Route path="/" element={ <Homepage />}>
             
            </Route>
            <Route  path="/cryptocurrencies"  element={ <Cryptocurrencies />} >
              
            </Route>
            <Route  path="/exchanges"  element={   <Exchanges />}>
            
            </Route>
            
            <Route path="/crypto/:coinId" element={  <CryptoDetails />}>
              
            </Route>
            <Route  path="/news"  element={  <News />}>
             
            </Route>
          </Routes>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2023
          <Link to="/">
            Cryptoworld Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
  )
}

export default App
