import { useState } from 'react'
import Header from './components/Header/Header'
import Banner from "./components/Banner/Banner";
import Footer from './components/Footer/Footer'
import RowList from './components/Rows/RowList/RowList';

const App =() => {

  return (
    <>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  )
}

export default App
