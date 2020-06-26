var config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                100,
                200,
                50,
                20
            ],
            backgroundColor: [
                "red",
                "orange",
               "yellow",
                "green"
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Confirmed',
            'Deaths',
            'Recovered',
            'Active'
        ]
    },
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Doughnut Chart'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
};

export const planetChartData =  config

export default planetChartData;