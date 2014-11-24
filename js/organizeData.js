/**
 * Created by Jux on 2014/11/19.
 */
//$(document).ready(function () {
//    $('#select').click(function () {
//        generateParam();
//        ajaxSend('index.php', selectParam, proxy);
//    });
//});

function proxy(data) {
    var size=getBrowserSize($(document.body).find('.heatmap'));
    generateHeatMap(data, size);
}

function generateHeatMap(JSONData, bodyZise) {
    heatmapInstance = h337.create({
        // only container is required, the rest will be defaults
        container: document.querySelector('.heatmap'),
        radius: 30
    });

    // 组织数据
    var points = [];
    var max = 0;
    var body = bodyZise;
    var width = body['browserWidth'];
    var height = body['browserHeight'];
    var len = JSONData.length;

    while (len--) {
        var val = JSONData[len]['val'];// 算数量
        max = Math.max(max, val);
        var point = {
            x: pct2crd(JSONData[len]['RelativeX'], width),
            y: pct2crd(JSONData[len]['RelativeY'], height),
            value: val
        };
        points.push(point);
    }

    // heatmap data format
    var data = {
        max: max,
        data: points
    };

    // if you have a set of datapoints always use setData instead of addData
    // for data initialization
    heatmapInstance.setData(data);
}