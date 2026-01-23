import { useState } from 'react'
import './App.css'
import MovieFinder from "./assets/components/movieFinder.jsx"

function App() {


  return (
    <>
      <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
        <div className='w-70 h-70'>
          <MovieFinder />
        </div>
      </div>
    </>
  )
}

export default App