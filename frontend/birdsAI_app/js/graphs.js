// create piechart divs

var graphWrapper = document.getElementById('graph-wrapper');



var pieChartText = document.createElement("div");  
pieChartText.setAttribute("id", "piechart-text"); 
pieChartText.classList.add("column");
graphWrapper.appendChild(pieChartText);

var graphTextBox = document.getElementById('piechart-text');

/* var pieChartTitle = document.createElement("h2");
pieChartTitle.setAttribute("id", "piechart-title");
pieChartTitle.innerText = 'Livestock and Soy';
graphTextBox.appendChild(pieChartTitle); */

var pieChartPar = document.createElement("p");
pieChartPar.classList.add("chart-paragraph");
pieChartPar.innerHTML = "Deforestation in Brazil is mainly commodity driven:<b> meat, metals, and palm oil</b>. Our consumer choices contribute directly to deforestation.";
graphTextBox.appendChild(pieChartPar);

var pieChart = document.createElement("div");  
pieChart.setAttribute("id", "piechart");  
pieChart.classList.add("column");              
graphWrapper.appendChild(pieChart); 
pieChart.innerHTML=
'<div class="chart-wrapper">\
                <canvas id="myChart"></canvas>\
            </div>';


// display Piechart
const ctx = document.getElementById('myChart').getContext('2d');
const labels = ["Commodity driven deforestation", "Forestry", "Shifting agriculture", "Unknown", "Urbanization", "Wildfire"]
const colorHex = ["#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c", "fb8500"]

const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [63.90,10.30,24.90,0.80,0.07,0.02],
            backgroundColor: colorHex,
        }],
        labels: labels
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom'
        },
        plugins: {
            datalabels: {
                color: ' #FF0000',
                anchor: 'end',
                align: 'start',
                offset: -10,
                borderWidth: 2,
                borderColor: ' #FFFFFF',
                borderRadius: 25,
                backgroundColor: (context) => {
                    return context.dataset.backgroundColor;
                },
                font: {
                    weight: 'bold',
                    size: '10'
                },
                formatter: (value) => {
                    return value + '%';
                }
            }
        }
    }
})

// create linechart divs
var graphWrapper2 = document.getElementById('graph2-wrapper');

var lineChartText = document.createElement("div");  
lineChartText.setAttribute("id", "linechart-text"); 
lineChartText.classList.add("column");
graphWrapper2.appendChild(lineChartText);

var graphTextBox = document.getElementById('linechart-text');

var lineChartPar = document.createElement("p");
lineChartPar.classList.add("chart-paragraph")
lineChartPar.innerText = "Three key drivers for deforestation of the Amazon rainforest are beef production, croplands for soy, and palm oil. Since 1990, as the production of crops and livestock have significantly increased, the remaining forest area has diminished dramatically.";
graphTextBox.appendChild(lineChartPar);

var lineChart = document.createElement("div");  
lineChart.setAttribute("id", "linechart");  
lineChart.classList.add("column");              
graphWrapper2.appendChild(lineChart); 
lineChart.innerHTML=
'<div class="chart-wrapper2">\
                <canvas id="myChart2"></canvas>\
                </div>';

// display linechart

// Data from: https://data.giss.nasa.gov/gistemp/
// Mean from: https://earthobservatory.nasa.gov/world-of-change/DecadalTemp

window.addEventListener('load', setup);

async function setup() {
  const ctx = document.getElementById('myChart2').getContext('2d');
  const dataArea = await getData();
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dataArea.years,
      datasets: [
        {
          label: 'Crop production index',
          yAxisID: 'crop',
          data: dataArea.crop,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1,
        },
        {
          label: 'Livestock production index',
          yAxisID: 'livestock',
          data: dataArea.livestock,
          fill: false,
          borderColor: 'rgba(99, 132, 255, 1)',
          backgroundColor: 'rgba(99, 132, 255, 0.5)',
          borderWidth: 1,
        },
        {
          label: 'Palm oil harvest area (km²)',
          yAxisID: 'palm',
          data: dataArea.oil_palm,
          fill: false,
          borderColor: 'rgba(233, 196, 106, 1)',
          backgroundColor: 'rgba(233, 196, 106, 0.5)',
          borderWidth: 1,
        },
        {
          label: 'Remaining Forest Area (km²)',
          yAxisID: 'forest',
          data: dataArea.forest,
          fill: true,
          borderColor: 'rgba(42, 157, 143, 1)',
          backgroundColor: 'rgba(42, 157, 143, 0.5)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        palm: {
          type: 'linear',
          display: false,
          position: 'left',
          grid: {
            drawOnChartArea: false,
          },
        },
        crop: {
          type: 'linear',
          display: false,
          position: 'right',
          grid: {
            drawOnChartArea: false,
          },
        },
        livestock: {
          type: 'linear',
          display: false,
          position: 'right',
  
          // grid line settings
          grid: {
            drawOnChartArea: false,
          },
        },
        forest: {
          type: 'linear',
          display: true,
          position: 'left',
  
          // grid line settings
          grid: {
            drawOnChartArea: true, // only show the grid for the forest ares graph
          },
          ticks: {
            maxRotation: 60,
            minRotation: 30,

            // covert the ticks to a more compact format
            callback: function(value, index, values) {
                valueString = '' + value
                return valueString[0] + '.' + valueString[1] + ' Mill.';
            }
          }
        },
      },
      elements: {
        point: {
          radius: 0.5
        },
      },
      aspectRatio: 1.25
    }
  });
}

async function getData() {
  // const response = await fetch('testdata.csv');
  const response = await fetch('./src/data/deforest_without.csv');
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
