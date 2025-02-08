import React from 'react'
import Hero from '../components/Hero'
import GoogleSheets from '../components/GoogleSheets'
import Dashboard from '../components/Dashboard'
import WebSayt from '../components/WebSayt'
import AppScript from '../components/AppScript'
import AppSheet from '../components/AppSheet'

const Home = () => {
  return (
    <>
      <Hero/>
      <GoogleSheets/>
      <Dashboard/>
      <WebSayt/>
      <AppScript/>
      <AppSheet/>
    </>
  )
}

export default Home