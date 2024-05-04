import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ApiPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  function getProducts() {
    return axios
      .get('https://api.escuelajs.co/api/v1/products')
      .then((result) => {
        setProducts(result.data);
      });
  }

  return (
    <>
      <table>
        <thead>
          <th>id</th>
          <th>title</th>
          <th>price</th>
          <th>description</th>
          <th>category</th>
          <th>images</th>
        </thead>
        <tbody>
          {products.length &&
            products.map((product) => {
              console.log(product.images);
              return (
                <tr>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                  <td>
                    {product.category.name}
                    <img
                      style={{ height: 100, objectFit: 'contain' }}
                      alt={product.id}
                      src={product.category.image}
                    />
                  </td>
                  <td>
                    {product.images.map((image, id) => (
                      <img
                        style={{ height: 30, objectFit: 'contain' }}
                        alt={id}
                        src={image}
                      />
                    ))}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

