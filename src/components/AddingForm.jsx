import { useState, useEffect } from 'react'
import AddingCard from './AddingCard';

function AddingForm() {
  const [products, setProducts] = useState([])
  const [data, setData] = useState({
    title: '',
    readTime: '',
    description: '',
    plantFamily: '',
    productName: '',
    textArticle: { care: '', replication: '', illness: '', pests: '' }
  })
  const [message, setMessage] = useState('')
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

  const onChange = (e) => {
    const { name, value } = e.target

    if(name.startsWith('text.')) {
      const field = name.split('.')[1]
      setData(prev => ({
        ...prev,
        textArticle: {...prev.textArticle, [field]:value}
      }))
    } else {
      setData(prev => ({...prev, [name]:value}))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log('1. Начало отправки')
    console.log('2. Данные:', data)
    console.log('3. Отправка запроса на /articles/add')

    const response = await fetch('/articles/add', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    console.log('4. Статус ответа:', response.status)
    console.log('5. Ответ OK?', response.ok)

    if (response.ok) {
      setMessage(`Статья "${data.title}" добавлена!`)
      setData({title: '', readTime: '', description: '', plantFamily: '', productName: '', 
        textArticle: { care: '', replication: '', illness: '', pests: ''}})
      setProducts(products.filter(product => product.name !== data.productName))
    }
  }

  if (loading) return <div>Загрузка...</div>
  if (error) return <div>Ошибка: {error}</div>
  
  return(
    <div className="articles-grid">
      <AddingCard
        products={products}
        data={data}
        onChange={onChange}
        onSubmit={handleSubmit}
        message={message}
      />
    </div>
  )
}

export default AddingForm