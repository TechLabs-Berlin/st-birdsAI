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