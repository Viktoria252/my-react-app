import { useState, useEffect } from 'react'
import ProductCard from './ProductCard';

function ProductList(){
const [products, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/products')
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
  if (loading) return <div>Загрузка...</div>;
if (error) return <div>Ошибка: {error}</div>;
if (!products) return null;

   return(
          <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
        )
}