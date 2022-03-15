import React from 'react';

import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Master', 'Visa', 'Checks', 'EFT', 'Cash'],
  datasets: [
    {
      data: [200, 50, 100, 120, 80],
      backgroundColor: ['#f83245', '#4191ff', '#f4772e', '#f4672e', '#f5772e'],
      hoverBackgroundColor: ['#f83245', '#4191ff', '#f4772e']
    }
  ]
};

export default function LivePreviewExample() {
  return (
    <>
      <Doughnut data={data} />
    </>
  );
}
