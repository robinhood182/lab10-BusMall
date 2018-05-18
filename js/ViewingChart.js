/* exported ViewingChart */
/* globals Chart */
'use strict';

const viewingChartTemplate = document.getElementById('viewing-chart-template').content;

class ViewingChart {
    constructor(productsArray) {
        this.productsArray = productsArray;
    }

    render() {
        const dom = viewingChartTemplate;
        const canvas = dom.querySelector('canvas');
        const ctx = canvas.getContext('2d');

        let labels = [];
        let data = [];

        for(let i = 0; i < this.productsArray.length; i++) {
            const product = this.productsArray[i];
            labels.push(product.name);
            data.push(product.voteCount);
        }

        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                datasets: [{
                    label: 'Number of votes',
                    data: data,
                    backgroundColor: [
                        'rgba(200, 110, 150, 0.2)',
                        'rgba(75, 182, 255, 0.2)',
                        'rgba(255, 206, 75, 0.2)',
                    ],
                    borderColor: [
                        'rgba(200, 110, 150, 1)',
                        'rgba(75, 182, 255, 1)',
                        'rgba(255, 206, 75, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });

        return dom;
    }
}