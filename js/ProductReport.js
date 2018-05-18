/* exported ProductReport*/
'use strict';
//gets template element 'product-report-template and its content
const productReportTemplate = document.getElementById('product-report-template').content;

class ProductReport {
    constructor(product) {
        this.product = product;
    }
    render() {
        //creates a clone of productReportTemplate
        const dom = productReportTemplate.cloneNode(true);
        //grabs all td elements inside 'product-report-template' and passes the product name and voteCount as text
        const columns = dom.querySelectorAll('td');
        columns[0].textContent = this.product.name;
        columns[1].textContent = this.product.voteCount;
        return dom;
    }
}