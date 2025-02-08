import React from 'react'
import Hero from '../components/Hero'
import GoogleSheets from '../components/GoogleSheets'
import Dashboard from '../components/Dashboard'
import WebSayt from '../components/WebSayt'
import AppScript from '../components/AppScript'

const Home = () => {
  return (
    <>
      <Hero/>
      <GoogleSheets/>
      <Dashboard/>
      <WebSayt/>
      <AppScript/>
    </>
  )
}

export default Home