var graphPage = document.getElementById('graphs');
graphPage.innerHTML =
'<div class="title text-center mb-5" id="piechart-title">\
                <h1>What are the Drivers of Deforestation</h1>\
            </div>';

var chartWrapper = document.createElement("div");
chartWrapper.setAttribute("id", "graph__wrapper");
graphPage.appendChild(chartWrapper); 

var graphWrapper = document.getElementById('graph__wrapper');


var pieChart = document.createElement("div");  
pieChart.setAttribute("id", "piechart");  
pieChart.classList.add("wrapper");              
graphWrapper.appendChild(pieChart); 
pieChart.innerHTML=
'<div class="container d-flex flex-column justify-content-center align-items-center">\
            <div class="chart-wrapper">\
                <canvas id="myChart"></canvas>\
            </div>\
        </div>';

var pieChartText = document.createElement("div");  
pieChartText.setAttribute("id", "piechart-text"); 
graphWrapper.appendChild(pieChartText);

var graphTextBox = document.getElementById('piechart-text');

var pieChartTitle = document.createElement("h1");
pieChartTitle.setAttribute("id", "piechart-title");
graphTextBox.appendChild(pieChartTitle);

var pieChartPar = document.createElement("p");
pieChartPar.setAttribute("id", "piechart-paragraph");
pieChartPar.innerText = 'something is here';
graphTextBox.appendChild(pieChartPar);



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
                color: '#fff',
                anchor: 'end',
                align: 'start',
                offset: -10,
                borderWidth: 2,
                borderColor: '#fff',
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