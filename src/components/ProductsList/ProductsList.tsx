import { useMemo } from 'react';
import { useAppSelector } from '../../app/hooks';
import { ProductType } from '../../types/ProductType';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Loader } from '../Loader';

type Props = {
  products: ProductType[];
}

export const ProductsList: React.FC<Props> = ({ products }) => {
  const query = useAppSelector(state => state.filterState.query);
  const isLoading = useAppSelector(state => state.productsState.loading);
  const error = useAppSelector(state => state.productsState.error);

  const visibleProducts = useMemo(() => {
    const lowerCaseQuery = query.toLowerCase().trim();

    const filteredByQuery = products.filter(product => product.name.toLowerCase().includes(lowerCaseQuery))

    return filteredByQuery;
  }, [query, products])

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <div>Error: Unable to fetch products.</div>
  }

  return (
    <div>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Link</th>
          </tr>
        </thead>
        <tbody>
          {visibleProducts.map(product => (
            <tr key={product.asin} className='table-row'>
              <td className='col-sm-1'><img className='img-fluid img-thumbnail' src={product.img} alt={product.name}></img></td>
              <td className='align-middle'>{product.name}</td>
              <td className='align-middle col-sm-1'>{product.price}</td>
              <td className='align-middle col-sm-2'>{product.bsr_category}</td>
              <td className='align-middle col-sm-1'><a href={product.link} target="_blank" rel="noreferrer">Buy</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};
