/**
 * Created by Jux on 2014/11/19.
 */

function proxy(data) {
    var size=getBrowserSize($(document.body).find('.heatmap'));
    $("#heatframe").html('');
    $("#heatframe").attr("src", "countClick.html").css("height", parseInt(data[0]["Height"]));
    $(".heatmap").css("height", 30 + parseInt(data[0]["Height"]));
    size["browserHeight"] = parseInt(data[0]["Height"]);
    generateHeatMap(data, size);
}

function generateHeatMap(JSONData, bodyZise) {
    heatmapInstance = h337.create({
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