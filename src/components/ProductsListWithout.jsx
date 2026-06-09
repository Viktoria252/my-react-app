import { useState, useEffect } from 'react';
import ProductCard from './ProductCardWithout';
import ProductCardWithout from './ProductCardWithout';

function ProductsListWithout() {
    const [products, setData] = useState(null)
      const [loading, setLoading] = useState(true)
      const [error, setError] = useState(null)
    
      useEffect(() => {
        fetch('/products/noarticles')
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`)
            }
            return response.json()
          })
          .then(result => {
            setData(result)
            setLoading(false)
          })
          .catch(err => {
            setError(err.message)
            setLoading(false)
          })
      }, [])
    
      if (error) return <div>Error: {error}</div> 
      return(
       <div className="products-grid">
      {products.map(product => (
        <ProductCardWithout key={product.id} product={product} />
      ))}
    </div>
      )
}


export default ProductsListWithout