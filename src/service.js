// import Chart from 'chart.js';

// WEATHER

const lat = "43.296482";
const lon = "5.36978";
const apikey = "ce594e43db947220ca66ff854126f346";

const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=metric" + "&appid=" + apikey;

async function getWeather() {
  const reponse = await fetch(apiUrl);
  const temp = await reponse.json();
  const dateTemp = [];

  temp.list.forEach(element => {
  const tempData = [];
  tempData.push(element.dt_txt);
  tempData.push(element.main.temp);
  tempData.push(element.weather[0].description);

  dateTemp.push(tempData);
  });
//   console.log(dateTemp);
  return dateTemp;
}
const data = await getWeather();



// CHART

const temperatureData = data.map((data) => data[1]); // Exemple de données de température
const labels = data.map((data) => data[0]); // Exemple d'étiquettes pour l'axe des X

  // Obtenez une référence à l'élément canvas
  const ctx = document.getElementById("temperature-chart").getContext("2d");

  // Créez un objet de configuration pour le graphique
  const config = {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Température en °C",
          data: temperatureData,
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 2,
          fill: false,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          suggestedMin: 0,
          suggestedMax: 30, // Ajustez cette valeur en fonction de vos données
        },
      },
    },
  };

  // Créez le graphique en utilisant la configuration
  const myChart = new Chart(ctx, config);



  // PC INFO

// var os = require('os-utils');


// os.cpuUsage(function(v){
// 	console.log( 'CPU Usage (%): ' + v );
// });

// os.cpuFree(function(v){
// 	console.log( 'CPU Free:' + v );
// });
