import { useState } from "react";
const Product = ({ name, price, product, s }) => {
    const [count, setCount] = useState(0);
    const add = () => {
        setCount((count) => count + 1);
    }
    const minus = () => {
        setCount((count) => count - 1)
        if ((count) <= 0)
            setCount(0)
    }
    return (
        <>
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
            <p>{name} Total: $<span>{count * price}</span></p>
        </>
    )
}
export default Product