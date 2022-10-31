import React from 'react'
import ProductInfo from '../components/product-components/ProductInfo'
import { useSelector } from 'react-redux';
import { salesHistory } from './../types/salesHistory'
import './ProductDetails.css'
import SalesGraph from '../components/graph-components/SalesGraph';


export default function ProductDetails() {
  const data = useSelector((state: any) => state.salesHistory)
  return (
    <div className="product-details-container">
      <ProductInfo salesData={data[0]} />
      <SalesGraph sales={data[0].sales} />
    </div>
  )
}
