import Chip from '@mui/material/Chip';
import './ProductTags.css'

interface ProductTagsProps{
  tags: string[]
}

export default function ProductTags({tags}: ProductTagsProps) {
  return (
    <div className="product-tags-container">
      <div className="product-tags-chips">
        {tags.map((tag): any => {
          return <Chip key={tag} label={tag} variant="outlined"/>
        })} 
      </div>
    </div>
  )
}
