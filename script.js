//primeiro grafico - nomes dos meses na horizontal
var meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto'];
//desenho das linhas
var planejadas = [10,13,38,41,49,35,35,34];
var executadas = [10,7,29,35,34,31,35,33];

//puxando desenho dos graficos do chartjs
var ctx = document.getElementById("graf1");
var graf1 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: meses,
    datasets: [
      { 
        data: planejadas,
        label: "OS Planejadas",
        borderColor: "#ff0000",
        fill: false
      },
      { 
        data: executadas,
        label: "OS Executadas",
        borderColor: "#00ff00",
        fill: false
      }
    ]
  }
});

//segundo gráfico - nomes das atividades
var tiposOs = ['Obra','Preventiva','Instalação','Instalação Corporativo','Massiva','Suporte','Comercial']
//quantidade para tamanho dos graficos
var quantidadeExecutadas = [34,20,19,13,11,6,2]

var ctx = document.getElementById("graf2");
var graf2 = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: tiposOs,
    datasets: [
      {
        data: quantidadeExecutadas,
        label: "Quantidade Executadas",
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          'rgb(10, 235, 18)',
          'rgb(216, 19, 230)',
          'rgb(247, 92, 14)',
          'rgb(171, 166, 166)'
        ],
        hoverOffset: 4
      }
    ]
  }
});

const config = {
  type: 'doughnut',
  data: graf2.data,
  plugins: [plugin],
};

const image = new Image();
image.src = 'https://www.chartjs.org/img/chartjs-logo.svg';

const plugin = {
  id: 'customCanvasBackgroundImage',
  beforeDraw: (chart) => {
    if (image.complete) {
      const ctx = chart.ctx;
      const {top, left, width, height} = chart.chartArea;
      const x = left + width / 2 - image.width / 2;
      const y = top + height / 2 - image.height / 2;
      ctx.drawImage(image, x, y);
    } else {
      image.onload = () => chart.draw();
    }
  }
};