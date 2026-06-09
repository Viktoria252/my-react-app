import { useState, useEffect } from 'react'
import ProductCard from './ProductCard';

function ProductList() {
  const [products, setProducts] = useState([])  // ← лучше массив, не null
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
        setProducts(result)  // ← теперь setProducts
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Загрузка...</div>
  if (error) return <div>Ошибка: {error}</div>
  if (!products || products.length === 0) return <div>Нет товаров</div>  // ← проверка на пустой массив

  return ( <pre>{JSON.stringify(products, null, 2)}</pre>
    // <div className="products-grid">
    //   {products.map(product => (
    //     <ProductCard key={product.id} product={product} />
    //   ))}
    // </div>
  )
}

export default ProductList