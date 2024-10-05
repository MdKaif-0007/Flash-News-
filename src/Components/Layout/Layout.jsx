import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


function Layout() {
  const [search, setSearch] = useState("All"); // Default search

  return (
    <>
    <Header onSearch={setSearch} />
    <Outlet context={{search}} />  {/* Pass 'search' to Outlet */}
    <Footer />
    </>
  )
}

export default Layout
