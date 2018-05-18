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
        console.log('productsArray', this.productsArray);

        for(let i = 0; i < this.productsArray.length; i++) {
            const product = this.productsArray[i];
            labels.push(product.name);
            data.push(product.voteCount);
        }

        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Number of votes',
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(138, 205, 234, 1)',
                        'rgba(116, 109, 117, 1)',
                        'rgba(140, 72, 67, 1)',
                        'rgba(158, 100, 60, 1)',
                        'rgba(237, 230, 242, 1)',
                        'rgba(237, 174, 73, 1)',
                        'rgba(209, 73, 91, 1)',
                        'rgba(0, 121, 140, 1)',
                        'rgba(48, 99, 142, 1)',
                        'rgba(0, 61, 91, 1)',
                        'rgba(234, 196, 53, 1)',
                        'rgba(52, 89, 149, 1)',
                        'rgba(3, 206, 164, 1)',
                        'rgba(251, 77, 61, 1)',
                        'rgba(202, 21, 81, 1)',
                        'rgba(142, 177, 199, 1)',
                        'rgba(176, 46, 12, 1)'
                    ],
                    
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(138, 205, 234, 1)',
                        'rgba(116, 109, 117, 1)',
                        'rgba(140, 72, 67, 1)',
                        'rgba(158, 100, 60, 1)',
                        'rgba(237, 230, 242, 1)',
                        'rgba(237, 174, 73, 1)',
                        'rgba(209, 73, 91, 1)',
                        'rgba(0, 121, 140, 1)',
                        'rgba(48, 99, 142, 1)',
                        'rgba(0, 61, 91, 1)',
                        'rgba(234, 196, 53, 1)',
                        'rgba(52, 89, 149, 1)',
                        'rgba(3, 206, 164, 1)',
                        'rgba(251, 77, 61, 1)',
                        'rgba(202, 21, 81, 1)',
                        'rgba(142, 177, 199, 1)',
                        'rgba(176, 46, 12, 1)'
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