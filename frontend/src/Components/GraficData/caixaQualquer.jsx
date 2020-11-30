import React from 'react';
import { Chart } from "react-google-charts";



function caixaQualquer() {
  return (
    <Chart
    width={'1100px'}
    height={'300px'}
    chartType="LineChart"
    loader={<div>Loading Chart</div>}
    data={[
      ['x', 'Valor em reais'],
      [0, 0],
      [1, 10],
      [2, 23],
      [3, 17],
      [4, 18],
      [5, 9],
      [6, 11],
      [7, 27],
      [8, 33],
      [9, 40],
      [10, 32],
      [11, 35],
      [12, 35],
    ]}
    options={{
      hAxis: {
        title: 'Mês',
      },
      vAxis: {
        title: 'Evolução de gastos',
      },
    }}
    rootProps={{ 'data-testid': '1' }}
  />
  );
}

export default caixaQualquer;




