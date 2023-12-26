
import { useEffect, useState } from "react";

export const ProductList = () => {
    const [products, setProducts] = useState([]);

    console.log(products)

    useEffect(() => {
        fetch("http://localhost:8000/products")
        .then(response => response.json())
        .then(data => setProducts(data));
    }, []);

  return (
    <div>
        {products.map((product)=> (
            <div key={product.id} className="card">
                <p className="id">{product.id}</p>
                <p className="name">{product.name}</p>
                <p className="info">
                    <span>{product.price}</span>
                    <span className={product.in_stock? "instock" : "unavailable"}>{product.in_stock? "In stock" : "Out of stock"}</span>
                </p>
            </div>
            
        ))}
    </div>
  )
}
