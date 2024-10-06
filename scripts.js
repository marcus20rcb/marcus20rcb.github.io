var meses = ["Setembro","Outubro","Novembro","Dezembro","Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro"];
    var planejadas = [16,10,13,38,41,49,35,35,34];
    var executadas = [13,10,7,29,35,34,31,35,33];
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: meses,
            datasets: [
                { 
                    data: planejadas,
                    label: "planejadas",
                    borderColor: "#3e95cd",
                    fill: false
                },
                { 
                    data: executadas,
                    label: "executadas",
                    borderColor: "#3e95cd",
                    fill: false
                }
            ]   
        }
    });
