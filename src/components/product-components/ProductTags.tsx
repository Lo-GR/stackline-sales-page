import React from 'react'
import Chip from '@mui/material/Chip';
import './ProductTags.css'

interface ProductTagsProps{
  tags: string[]
}

export default function ProductTags({tags}: ProductTagsProps) {
  console.log(tags)
  return (
    <div className="product-tags-container">
      {tags.map((tag): any => {
        return <Chip label={tag} variant="outlined"/>
      })} 
    </div>
  )
}
