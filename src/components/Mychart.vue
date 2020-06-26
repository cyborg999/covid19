<template>
    <canvas id="planet-chart"></canvas>
</template>

<script>
import Chart from "chart.js"

export default {
    name : "mychart"
    , props : ["data"]
    , data : function(){
        let config = {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [
                        this.data.Confirmed,
                        this.data.Deaths,
                        this.data.Recovered,
                        this.data.Active
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
                    text: 'COVID19 Infographic'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        };

        return {
            planetChartData: config
        }
    }
    , created : function(){
        console.log("created", this.data)
    }
    , watch : {
        data : function(){
            if(this.data.TotalConfirmed != undefined){
                this.createWorldChart();
            }
            else {
                this.createCountryChart();
            }
        }
    }
    , mounted : function(){
        console.log("mounted", this.data)
        this.createChart('planet-chart', this.planetChartData);
    }
    , methods : {
        createChart(chartId, chartData) {
            const ctx = document.getElementById(chartId);
            new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options,
            });
        }
        , createCountryChart : function(){
            let config = {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [
                        this.data.Confirmed,
                        this.data.Deaths,
                        this.data.Recovered,
                        this.data.Active
                    ],
                    backgroundColor: [
                        "red",
                        "black",
                    "green",
                        "yellow"
                    ],
                    label: 'Dataset 1'
                }],
                labels: [
                    'Confirmed('+this.data.Confirmed+')',
                    'Deaths('+this.data.Deaths+')',
                    'Recovered('+this.data.Recovered+')',
                    'Active('+this.data.Active+')'
                ]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'COVID19 Infographic'
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        };

        this.createChart('planet-chart', config);
        }
        , createWorldChart : function(){
            let config = {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: [
                            this.data.TotalConfirmed,
                            this.data.TotalDeaths,
                            this.data.TotalRecovered
                        ],
                        backgroundColor: [
                            "red",
                            "black",
                        "green"
                        ],
                        label: 'Dataset 1'
                    }],
                    labels: [
                        'Confirmed('+this.data.Confirmed+')',
                        'Deaths('+this.data.Deaths+')',
                        'Recovered('+this.data.Recovered+')'
                    ]
                },
                options: {
                    responsive: true,
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'COVID19 Infographic'
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    }
                }
            };
            
            this.createChart('planet-chart', config);
        }
    }
}
</script>