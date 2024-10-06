// Our labels along the x-axis
var meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto'];
// For drawing the lines
var planejadas = [10,13,38,41,49,35,35,34];
var executadas = [10,7,29,35,34,31,35,33];


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: meses,
    datasets: [
      { 
        data: planejadas,
        label: "OS Planejadas",
        borderColor: "#3e95cd",
        fill: false
      },
      { 
        data: executadas,
        label: "OS Executadas",
        borderColor: "#8e5ea2",
        fill: false
      }
    ]
  }
});