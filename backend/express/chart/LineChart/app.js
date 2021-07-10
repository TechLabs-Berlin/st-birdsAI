// Data from: https://data.giss.nasa.gov/gistemp/
// Mean from: https://earthobservatory.nasa.gov/world-of-change/DecadalTemp

window.addEventListener('load', setup);

async function setup() {
  const ctx = document.getElementById('myChart').getContext('2d');
  const dataArea = await getData();
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dataArea.years,
      datasets: [
        {
          label: 'Crop production index',
          yAxisID: 'Crop production index',
          data: dataArea.crop,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1,
        },
        {
          label: 'Livestock production index',
          yAxisID: 'Livestock production index',
          data: dataArea.livestock,
          fill: false,
          borderColor: 'rgba(99, 132, 255, 1)',
          backgroundColor: 'rgba(99, 132, 255, 0.5)',
          borderWidth: 1,
        },
        {
          label: 'Oil palm fruit Area harvested km²',
          data: dataArea.oil_palm,
          fill: false,
          borderColor: 'rgba(233, 196, 106, 1)',
          backgroundColor: 'rgba(233, 196, 106, 0.5)',
          borderWidth: 1,
        },
        {
          label: 'Forest area in km²',
          yAxisID: 'Forest area in km²',
          data: dataArea.forest,
          fill: false,
          borderColor: 'rgba(42, 157, 143, 1)',
          backgroundColor: 'rgba(42, 157, 143, 0.5)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            id: 'Forest area in km²',
            type: 'linear',
            position: 'left',
          },
          {
            id: 'Crop production index',
            type: 'linear',
            position: 'right',
            ticks: {
              max: 110,
              min: 35,
            },
          },
        ],
      },
    },
  });
}

async function getData() {
  // const response = await fetch('testdata.csv');
  const response = await fetch('deforest_without.csv');
  const data = await response.text();
  const years = [];
  const crop = [];
  const livestock = [];
  const forest = [];
  const oil_palm = [];
  const rows = data.split('\n').slice(1);
  rows.forEach((row) => {
    const cols = row.split(',');
    years.push(cols[0]);
    crop.push(parseFloat(cols[1]));
    livestock.push(parseFloat(cols[4]));
    oil_palm.push(parseFloat(cols[6]));
    forest.push(parseFloat(cols[10]));
  });
  return { years, crop, livestock, oil_palm, forest };
}
