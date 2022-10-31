import React from 'react'
import ProductInfo from '../components/product-components/ProductInfo'
import { useSelector } from 'react-redux';
import { salesHistory } from './../types/salesHistory'
import './ProductDetails.css'
import SalesGraph from '../components/graph-components/SalesGraph';
import SalesTable from '../components/table-components/SalesTable';


export default function ProductDetails() {
  const data = useSelector((state: any) => state.salesHistory)
  // Instead of passing "data[0]" into these components, I'd imagine that 
  return (
    <div className="product-details-container">
      <ProductInfo salesData={data[0]} />
      <div className="product-details-data">
        <SalesGraph sales={data[0].sales} />
        <SalesTable sales={data[0].sales}/>
      </div>
    </div>
  )
}
