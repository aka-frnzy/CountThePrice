import { useState } from "react";
const Product = ({ price }) => {
    const [count, setCount] = useState(0);
    const add = () => {
        setCount((count) => count + 1);
    }
    const minus = () => {
        setCount((count) => count - 1)
    }
    return (
        <>
            <div class="product-list">
                <div class="product-item">
                    <img src="https://res.cloudinary.com/teepublic/image/private/s--T4BhhRF3--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_470/c_crop,g_north_west,h_626,w_470,x_0,y_0/g_north_west,u_upload:v1462829015:production:blanks:mtl53ofohwq5goqjo9ke,x_-395,y_-325/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1488815300/production/designs/1294242_1.jpg" height={400} alt="Product" />
                    <h3>T-shirt</h3>
                    <p>Price:  Only  ${price}</p>
                    <div class="quantity">
                        <button onClick={minus} >-</button>
                        <input type="number" value={count} />
                        <button onClick={add}>+</button>
                    </div>
                </div>
            </div>
            <p>Total: $<span>{count * price}</span></p>
        </>
    )
}
export default Product