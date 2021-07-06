var graphWrapper = document.getElementById('graph-wrapper');


var pieChart = document.createElement("div");  
pieChart.setAttribute("id", "piechart");  
pieChart.classList.add("column");              
graphWrapper.appendChild(pieChart); 
pieChart.innerHTML=
'<div class="chart-wrapper">\
                <canvas id="myChart"></canvas>\
            </div>';

var pieChartText = document.createElement("div");  
pieChartText.setAttribute("id", "piechart-text"); 
pieChartText.classList.add("column");
graphWrapper.appendChild(pieChartText);

var graphTextBox = document.getElementById('piechart-text');

var pieChartTitle = document.createElement("h2");
pieChartTitle.setAttribute("id", "piechart-title");
pieChartTitle.innerText = 'Livestock and Soy';
graphTextBox.appendChild(pieChartTitle);

var pieChartPar = document.createElement("p");
pieChartPar.setAttribute("id", "piechart-paragraph");
pieChartPar.innerText = "Deforestation in Brazil is mainly commodity driven: meat, metals and palm oil. Our consumer choices contribute directly to deforestation\n\
Since 1990, as the production of crops and livestock have significantly increased. The  remaining forest area has diminished dramatically.";
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