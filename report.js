/*globals ReportApp */
'use strict';
//creates an instance 
const app = new ReportApp();
//gets its dom with its render() method
const dom = app.render();
//grabs div #root-report to attach app (now "dom") to
const rootReport = document.getElementById('root-report');
//appends app dom to rootReport
rootReport.appendChild(dom);