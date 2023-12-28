document.addEventListener('DOMContentLoaded', function () {
    // Sample data (randomly generated for demonstration)
    const dates = ['2023-01-01', '2023-02-01', '2023-03-01', '2023-04-01', '2023-05-01'];
    const usdRates = [1.0, 1.1, 1.2, 1.15, 1.18];
    const gbpRates = [0.75, 0.73, 0.72, 0.74, 0.76];
    const cadRates = [1.25, 1.23, 1.22, 1.20, 1.18];
    const kesRates = [110, 105, 108, 112, 115];
    const nzdRates = [1.4, 1.35, 1.38, 1.36, 1.34];
    const btcRates = [0.000025, 0.000030, 0.000028, 0.000027, 0.000029];
  
    // Create a line chart
    const ctx = document.getElementById('currencyChart').getContext('2d');
    const currencyChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            label: 'USD',
            borderColor: 'rgba(255, 99, 132, 1)',
            data: usdRates,
            fill: false,
          },
          {
            label: 'GBP',
            borderColor: 'rgba(54, 162, 235, 1)',
            data: gbpRates,
            fill: false,
          },
          {
            label: 'CAD',
            borderColor: 'rgba(255, 206, 86, 1)',
            data: cadRates,
            fill: false,
          },
          {
            label: 'KES',
            borderColor: 'rgba(75, 192, 192, 1)',
            data: kesRates,
            fill: false,
          },
          {
            label: 'NZD',
            borderColor: 'rgba(153, 102, 255, 1)',
            data: nzdRates,
            fill: false,
          },
          {
            label: 'BTC',
            borderColor: 'rgba(255, 159, 64, 1)',
            data: btcRates,
            fill: false,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: 'Currency Comparison Chart',
        },
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              unit: 'month',
            },
            distribution: 'series',
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Exchange Rate',
            },
          }],
        },
      },
    });
  });
  