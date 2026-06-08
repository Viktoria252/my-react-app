import './App.css'
import ProductList from './components/ProductList';
import AddingForm from './components/AddingForm';
import ProductListWithout from './components/ProductListWithout';

function App() {
  return (
    <>
    <div className='fullProducts'>
      <h1>Товары со статьями</h1>
      <ProductList />
    </div>
    
    <div className='addingForm'>
    <h1>Добавление товара</h1>
    <AddingForm />
    </div>

    <div className='productsWithoutArticles'>
      <h1>Товары без статей</h1>
      <ProductListWithout />
    </div>
    </>
  )
}


export default App