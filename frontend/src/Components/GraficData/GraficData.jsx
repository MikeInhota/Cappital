import React from 'react';
import { Chart } from "react-google-charts";



function GraficData() {


  return (
        <div id="grafic">
          <Chart
            width={'69%'}
            height={'300px'}
            chartType={"Bar"}
            data={[
                ['1', 'entrada', 'Saida'],
                ['2', 8175000, 8008000],
                ['3', 3792000, 3694000],
              ]}
          />
        </div>
  );
}

export default GraficData;