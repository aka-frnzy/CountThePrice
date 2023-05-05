import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Product from "./components/Product"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Product name={"T-shirt"} price={20} product={"https://res.cloudinary.com/teepublic/image/private/s--T4BhhRF3--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1488815300/production/designs/1294242_1.jpg"} />
      <p>------------------------------------------------------------------------------------------------------------</p>
      <Product name={"Book"} price={15} product={"https://m.media-amazon.com/images/I/71gFdrB7zhL.jpg"} />
    </>
  )
}

export default App
