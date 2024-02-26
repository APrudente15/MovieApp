import { useState } from 'react'
import * as Pages from './pages'
import './App.css'

function App() {

  return (
    <>
    <Pages.HomePage/>
    <Pages.ShowsPage/>
    <Pages.ShowPage/>
    <Pages.SearchPage/>
    <Pages.NotFoundPage/>
    </>
  )
}

export default App
