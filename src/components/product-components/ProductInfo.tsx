import React from 'react'
import { salesHistory } from '../../types/salesHistory'
import './ProductInfo.css'
import ProductSnippet from './ProductSnippet'
import ProductTags from './ProductTags'

interface ProductInfoProps {
  salesData: salesHistory
}

export default function ProductInfo({salesData}: ProductInfoProps) {
  return (
    <div className="product-info-container">
      <ProductSnippet 
        image={salesData.image} 
        title={salesData.title} 
        subtitle={salesData.subtitle} />
      <ProductTags tags={salesData.tags} />
    </div>
  )
}
