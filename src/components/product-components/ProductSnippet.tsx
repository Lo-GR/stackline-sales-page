import React from 'react'
import "./ProductSnippet.css"

interface ProductSnippetProps{
  image: string,
  title: string,
  subtitle: string
}

export default function ProductSnippet({image, title, subtitle}: ProductSnippetProps) {

  return (
    <div className="product-snippet-container">
      <img src={image} alt={title} className="product-snippet-image"/>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  )
}
