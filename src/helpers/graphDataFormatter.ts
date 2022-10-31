export const salesFormatter = (data: any) => {
  let consolidatedSales: any = [];
  data.forEach((sale: any) => {
    const monthIndex = new Date(sale.weekEnding).getMonth();
    consolidatedSales[monthIndex] = {
      name: new Intl.DateTimeFormat('en-US', {month: 'short'}).format(new Date(sale.weekEnding)),
      retailSales: consolidatedSales[monthIndex] ? consolidatedSales[monthIndex].retailSales + sale.retailSales : sale.retailSales,
      wholeSales: consolidatedSales[monthIndex] ? consolidatedSales[monthIndex].wholeSales + sale.wholesaleSales : sale.wholesaleSales,
    }
  })
  
  return consolidatedSales
}