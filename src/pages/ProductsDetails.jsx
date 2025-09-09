import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductsDetails = () => {

  const { id } = useParams();
  useEffect(() => {
    axios.get(``)
  })

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header"></div>
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsDetails
