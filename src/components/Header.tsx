import React from 'react'
import './Header.css'

interface HeaderProps {
  children: JSX.Element
}
export default function Header({children}: HeaderProps) {
  return (
    <div className="header-container">
      {children}
    </div>
  )
}
