import { useState } from 'react'
import MoviesTitles from '../components/MoviesTitles'
import MovieByTitle from '../components/MovieByTitle'


function App() {
  return (
    <>
     <MovieByTitle title="Gully Boy"/>
     <MoviesTitles/>
    </>
  )
}

export default App
