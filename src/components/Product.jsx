import { useState } from "react";
const Product = ({ name, price, product }) => {
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
                    <img src={product} height={400} alt={name} />
                    <h3>{name}</h3>
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