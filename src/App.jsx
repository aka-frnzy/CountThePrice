import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Product from "./components/Product"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Product price={20} />
    </>
  )
}

export default App
