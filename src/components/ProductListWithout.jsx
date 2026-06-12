import { useState, useEffect } from 'react';
import ProductCardWithout from './ProductCardWithout';

function ProductListWithout() {
  const [products, setProducts] = useState([]) 
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
        setProducts(result)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])
    
  if (loading) return <div>Загрузка...</div>
  if (error) return <div>Ошибка: {error}</div>
  if (!products || products.length === 0) return <div>Нет товаров</div>
  
  return(
    <div className="products-grid">
      {products.map(product => (
        <ProductCardWithout key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductListWithout