import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import React from 'react'

interface SalesTableProps{
  sales: {
    weekEnding: string
    retailSales: number
    wholesaleSales: number
    unitsSold: number
    retailerMargin: number
  }[]
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function SalesTable({ sales }: SalesTableProps) {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Week Ending</TableCell>
          <TableCell align="right">Retail Sales</TableCell>
          <TableCell align="right">Wholesale Sales</TableCell>
          <TableCell align="right">Units Sold</TableCell>
          <TableCell align="right">Retail Margin</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sales.map((row) => (
          <TableRow
            key={row.weekEnding}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.weekEnding}
            </TableCell>
            <TableCell align="right">{row.retailSales}</TableCell>
            <TableCell align="right">{row.wholesaleSales}</TableCell>
            <TableCell align="right">{row.unitsSold}</TableCell>
            <TableCell align="right">{row.retailerMargin}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}
