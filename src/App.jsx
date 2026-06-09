import './App.css'
import ProductList from './components/ProductList';
// import AddingForm from './components/AddingForm';
import ProductsListWithout from './components/ProductsListWithout';

function App() {
  return (
    <>
    {/* <div className='fullProducts'>
      <h1>Товары со статьями</h1>
      <ProductList />
    </div> */}
    
     {/* <div className='addingForm'>
    // <h1>Добавление товара</h1>
    // <AddingForm />
    // </div> */}

    <div className='productsWithoutArticles'>
       <h1>Товары без статей</h1>
       <ProductsListWithout />
     </div>
     </>
  )
}


export default App