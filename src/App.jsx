import { useState } from 'react'
import './App.css'
import MovieFinder from "./assets/components/movieFinder.jsx"
import MovieFinderRev from "./assets/components/movieFinderRev.jsx"

function App() {


  return (
    <>
      <div className='d-flex w-100 h-100 justify-content-center align-items-center'>
        <div className='w-70 h-70'>
          <MovieFinderRev />
        </div>
      </div>
    </>
  )
}

export default App