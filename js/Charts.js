WebApp.Charts = () => {
  const apiUrl = 'data.json';
  const chartDaily = {
    options: {
      type: 'bar',
      defaultEndpoint: 'daily',
      fillColor: '#7477bf',
      fillHoverColor: '#4d4c72',
      canvas: document.getElementById('daily-chart')
    }
  };
  const chartMobile = {
    options: {
      type: 'doughnut',
      defaultEndpoint: 'mobile',
      fillColor01: '#7477bf',
      fillColor02: '#81c98f',
      fillColor03: '#51b6c8',
      canvas: document.getElementById('mobile-chart')
    }
  };
  const chartTraffic = {
    options: {
      type: 'line',
      defaultEndpoint: 'hourly',
      fillColor: 'rgba(116, 119, 191, 0.3)',
      canvas: document.getElementById('traffic-chart'),
      navElement: document.getElementById('traffic-nav')
    }
  };
  const setChartDefaults = () => {
    // make sure Chart.js loaded
    if (window.Chart === undefined) {
      console.error('Chart.js not loaded');
    } else {
      Chart.defaults.font.size = 10;
      Chart.defaults.color = '#555';
      Chart.defaults.scale.beginAtZero = true;
      Chart.defaults.plugins.legend.display = false;
      Chart.overrides.doughnut.plugins.legend.display = true;
    }
  };
  const getData = async function() {
    const response = await fetch(apiUrl);
    // check response is ok (200-299)
    if (response.status >= 200 && response.status <= 299) {
      return await response.json()
    } else {
      // alert if error such as 404
      alert(`Error fetching data.\rResponse was: ${response.status} ${response.statusText} for ${apiUrl}`);
    }
  };
  const createDailyChart = function(trafficData) {
    const options = {
      aspectRatio: 2.2
    };
    const config = {
      type: chartDaily.options.type,
      data: {
        labels: trafficData[chartDaily.options.defaultEndpoint].map( obj => obj.shortLabel ),
        datasets: [
          {
            backgroundColor: chartDaily.options.fillColor,
            hoverBackgroundColor : chartDaily.options.fillHoverColor,
            data: trafficData[chartDaily.options.defaultEndpoint].map( obj => obj.value )
          }
        ]
      },
      options: options
    };
    new Chart(
      chartDaily.options.canvas,
      config
    );
  };
  const createMobileChart = function(trafficData) {
    const options = {
      aspectRatio: 2.25,
      borderWidth: 0,
      plugins:{
        legend: {
          position: 'right',
          labels: {
            font: {
              weight: 700,
            },
            boxWidth: 18,
            boxHeight: 9,
            padding: 8,
          }
        },
      },
    };
    const config = {
      type: chartMobile.options.type,
      data: {
        labels: trafficData[chartMobile.options.defaultEndpoint].map( obj => obj.label ),
        datasets: [
          {
            backgroundColor: [
              chartMobile.options.fillColor01,
              chartMobile.options.fillColor02,
              chartMobile.options.fillColor03],
            data: trafficData[chartMobile.options.defaultEndpoint].map( obj => obj.value )
          }
        ]
      },
      options: options
    };
    new Chart(
      chartMobile.options.canvas,
      config
    );
  };
  const createTrafficChart = function(trafficData) {
    const options = {
      aspectRatio: 2.65,
      fill: true,
      tension: .5,
      radius: 2.5
    };
    const config = {
      type: chartTraffic.options.type,
      data: {
        labels: trafficData[chartTraffic.options.defaultEndpoint].map( obj => obj.label ),
        datasets: [
          {
            backgroundColor: chartTraffic.options.fillColor,
            data: trafficData[chartTraffic.options.defaultEndpoint].map( obj => obj.value )
          }
        ]
      },
      options: options
    };
    const trafficChart = new Chart(
      chartTraffic.options.canvas,
      config
    );
    // update chart data
    if (chartTraffic.options.navElement) {
      chartTraffic.options.navElement.addEventListener("click", function(e) {
        const target = e.target;
        // delegate click event rather than creating multiple event listeners
        if (e.target.classList.contains("pill")) {
          const type = target.getAttribute("id").split("-")[1];
          const currentlySelected = document.querySelector(".pill.selected");
          currentlySelected.classList.remove('selected');
          target.classList.add('selected');
          trafficChart.data.datasets[0].data = trafficData[type].map( (obj) => obj.value );
          trafficChart.data.labels = trafficData[type].map( (obj) => obj.label );
          trafficChart.update();
        }
      })
    }
  };
  const createCharts = function(trafficData) {
    setChartDefaults();
    createDailyChart(trafficData);
    createMobileChart(trafficData);
    createTrafficChart(trafficData);
  };
  const init = function() {
    // get data and check it contains 'traffic' data
    getData().then(json => json.hasOwnProperty('traffic') ? createCharts(json.traffic[0]) : alert(`No 'traffic' data found at ${apiUrl}`));
  };

  if (
    chartDaily.options.canvas
    && chartMobile.options.canvas
    && chartTraffic.options.canvas
    && chartTraffic.options.navElement
    ) {
    init();
  }
}
