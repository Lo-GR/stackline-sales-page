import React from 'react'
import {salesFormatter} from '../../helpers/graphDataFormatter'
import { LineChart, Line, XAxis, Tooltip, Legend, } from 'recharts';
import './SalesGraph.css'

interface SalesGraphProps{
  sales: {
    weekEnding: string
    retailSales: number
    wholesaleSales: number
    unitsSold: number
    retailerMargin: number
  }[]
}
export default function SalesGraph({sales}: SalesGraphProps) {
  console.log(sales)
  return (
    <div className="graph-container">
      <LineChart
        width={1500}
        height={500}
        data={salesFormatter(sales)}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="retailSales" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="wholeSales" stroke="#82ca9d" />
      </LineChart>
    </div>
  )
}
