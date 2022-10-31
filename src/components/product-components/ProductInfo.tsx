import { salesHistory } from '../../types/salesHistory'
import ProductSnippet from './ProductSnippet'
import ProductTags from './ProductTags'
import Paper from '@mui/material/Paper';
import './ProductInfo.css'

interface ProductInfoProps {
  salesData: salesHistory
}

export default function ProductInfo({salesData}: ProductInfoProps) {
  return (
    <Paper className="product-info-container">
      <ProductSnippet 
        image={salesData.image} 
        title={salesData.title} 
        subtitle={salesData.subtitle} />
      <ProductTags tags={salesData.tags} />
    </Paper>
  )
}
