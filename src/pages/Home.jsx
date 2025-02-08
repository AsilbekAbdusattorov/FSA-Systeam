import React from 'react'
import Hero from '../components/Hero'
import GoogleSheets from '../components/GoogleSheets'
import Dashboard from '../components/Dashboard'
import WebSayt from '../components/WebSayt'

const Home = () => {
  return (
    <>
      <Hero/>
      <GoogleSheets/>
      <Dashboard/>
      <WebSayt/>
    </>
  )
}

export default Home