import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductsDetails = () => {

  const { id } = useParams();
  const [product, setProduct] = useState({});
  console.log(product)


  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => { setProduct(resp.data) });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card mt-5">
            <div className="card-header">{product.title}</div>
            <div className="card-body">
              <img src={product.image} alt={product.title} />
              <p>{product.price}</p>
              <p>{product.description}</p>
              <p>{product.category}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsDetails