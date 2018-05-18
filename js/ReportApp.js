/* exported ReportApp */
/* globals ViewingReport ViewingChart clearProductsData productsArray */
'use strict';
//gets 'report-template' template element
const reportTemplate = document.getElementById('report-template');

class ReportApp {
    constructor() {
        this.productsArray = productsArray;
        this.totalClicks = 0;
    }

    render() {
        //makes dom get the content of reportTemplate
        const dom = reportTemplate.content;

        const button = dom.querySelector('button');
        button.addEventListener('click', () => {
            clearProductsData();
            window.location.reload();
        });

        const viewingReportSection = dom.getElementById('viewing-report');
        const viewingReportComponent = new ViewingReport(this.productsArray);
        const viewingReportDom = viewingReportComponent.render();
        viewingReportSection.appendChild(viewingReportDom);

        const viewingChartSection = dom.getElementById('viewing-chart');
        const viewingChartComponent = new ViewingChart(this.productsArray);
        const viewingChartDom = viewingChartComponent.render();
        viewingChartSection.appendChild(viewingChartDom);

        return dom;
    }
}