var chartData = [{
    "country": "USA",
    "visits": 4252
}, {
    "country": "China",
    "visits": 1882
}, {
    "country": "Japan",
    "visits": 1809
}, {
    "country": "Germany",
    "visits": 1322
}, {
    "country": "UK",
    "visits": 1122
}, {
    "country": "France",
    "visits": 1114
}, {
    "country": "India",
    "visits": 984
}, {
    "country": "Spain",
    "visits": 711
}, {
    "country": "Netherlands",
    "visits": 665
}, {
    "country": "Russia",
    "visits": 580
}, {
    "country": "South Korea",
    "visits": 443
}, {
    "country": "Canada",
    "visits": 441
}, {
    "country": "Brazil",
    "visits": 395
}, {
    "country": "Italy",
    "visits": 386
}, {
    "country": "Australia",
    "visits": 384
}, {
    "country": "Taiwan",
    "visits": 338
}, {
    "country": "Poland",
    "visits": 328
}];

// the actual code

AmCharts.ready(function() {
    // chart code will go here

    // shows the country data
    var chart = new AmCharts.AmSerialChart();
    chart.dataProvider = chartData;
    chart.categoryField = "country";



    // show the value data as visits
    var graph = new AmCharts.AmGraph();
    graph.valueField = "visits";
    graph.type = "line";
    graph.balloonText = "[[category]]: <b>[[value]]</b>";
    graph.fillAlphas = 0; // or delete this line, as 0 is default
    graph.bullet = "round";
    graph.lineColor = "#8d1cc6";
    chart.addGraph(graph);

    // prints all countries to the x axis.
    var categoryAxis = chart.categoryAxis;
    categoryAxis.autoGridCount  = false;
    categoryAxis.gridCount = chartData.length;
    categoryAxis.gridPosition = "start";
    categoryAxis.labelRotation = 90;

    chart.write('chartdiv');
});