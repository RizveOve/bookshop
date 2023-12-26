
import { useCallback, useEffect, useState } from "react";

export const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [url, setUrl] = useState("http://localhost:8000/products");

    console.log(products)

    // useEffect(() => {
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(data => setProducts(data));
    // }, [url]);

    const fetchProducts = useCallback(async () => {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
    }, [url]);   
    
    useEffect(() => {
        fetchProducts();
        console.log("-");
    }, [fetchProducts]);

  return (
    <div>
         <div className="filter">
            <button onClick={() => setUrl("http://localhost:8000/products")}>All</button>
            <button onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>In Stock Only</button>
            <button onClick={() => setUrl("http://localhost:8000/products?in_stock=false")}>Out of Stock</button>
        </div>
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
