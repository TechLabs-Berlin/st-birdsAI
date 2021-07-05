var graphPage = document.getElementById('graphs');

var chartWrapper = document.createElement("div");
chartWrapper.setAttribute("id", "graph__wrapper");
graphPage.appendChild(chartWrapper); 


var pieChart = document.createElement("div");  
pieChart.setAttribute("id", "piechart"); 
pieChart.innerHTML = "mining for minerals contributes to a considerable amount of deforestation of rain forest in Brazil. The plot (mining_%_deforestation.png) shows the percentage of area deforested, during 2008 – 2015, for mining activities in total of nine states (Acre, Amazonas, Amapá, Maranhão, Mato Grosso, Pará, Rondônia, Roraima, and Tocantins) in Brazil. The mining of gold, iron, and copper ore are the three largest factors of deforested area among all mining activities in the nine states of Brazil from 2008 to 2015. The plot (deforested_area_top10_minerals.png) shows the amount of area deforested due to mining for the 10 most used* minerals.  ME";                   
document.getElementById("graph__wrapper").appendChild(pieChart); 