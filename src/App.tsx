import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from './app/hooks';
import { Header } from './components/Header';
import { ProductsList } from './components/ProductsList';
import { fetchProducts } from './features/products/productsSlice';
import './App.css';

export const App = () => {
  const products = useAppSelector(state => state.productsState.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])  

  return (
    <div className="App">
      <Header />
      <br />
      <ProductsList products={products} />
    </div>
  );
}
