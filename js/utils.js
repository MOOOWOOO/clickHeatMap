/**
 * Created by Jux.Liu on 2014/11/18.
 */

/**
 * 组织时间格式
 * @returns {string}, YYYY-MM-DD HH:NN:SS
 */
function getDateTime() {
    var currentDT = new Date();
    var y, m, d;    // 年月日
    //var w;          // 星期
    var h, n, s;    // 时分秒
    var theDateStr; // 时间字符串
    y = currentDT.getFullYear(); //四位整数表示的年份
    m = currentDT.getMonth() + 1; //月
    d = currentDT.getDate(); //日
    //w = currentDT.getDay(); //星期
    h = currentDT.getHours(); //时
    n = currentDT.getMinutes(); //分
    s = currentDT.getSeconds(); //秒
    theDateStr = y + "-" + m + "-" + d + " " + h + ":" + n + ":" + s;
    return theDateStr;
}

/**
 * 百分比转换为坐标值
 * @param $pct, {'pctx': 横坐标百分比, 'pcty': 纵坐标百分比}
 * @param $size, {'browserWidth': 浏览器宽度, 'browserHeight': 浏览器高度}
 * @returns crd, {crdx: 横坐标值, crdx: 纵坐标值}}
 */
function pct2crd(pct, size) {
    var crd = null;
    var tp = typeof size;
    if (tp == 'number') {
        crd = pct * size / 100;
    } else if (tp == 'object') {
        var crdx = pct['pctx'] * size['browserWidth'] / 100;
        var crdy = pct['pcty'] * size['browserHeight'] / 100;
        crd = {'crdx': crdx, 'crdx': crdy};
    }
    return crd;
}

/**
 * 坐标值转换为百分比
 * @param $crd, {'x': 横坐标值, 'y': 纵坐标值}
 * @param $size, {'browserWidth': 浏览器宽度, 'browserHeight': 浏览器高度}
 * @returns pct, {pctx: 横坐标百分比, pcty: 纵坐标百分比}
 */
function crd2pct(crd, size) {
    var pctx = trans2pct(crd['crdx'], size['browserWidth']);
    var pcty = trans2pct(crd['crdy'], size['browserHeight']);
    var pct = {'pctx': pctx, 'pcty': pcty}
    return pct;
}

/**
 * 计算百分比，四位小数表示: 0.2512=25.12%
 * @param num
 * @param total
 * @returns percent
 */
function trans2pct(num, total) {
    return (Math.round(num / total * 10000) / 100);
}

/**
 * 使用 ajax 想服务器提交信息
 * @param url, 目标地址
 * @param sData, JSON格式参数
 * @param func, 待执行的方法
 */
function ajaxSend(url, sData, func) {
    $.post(url, sData, function (status) {
        //status = JSON.stringify(status);
        if (status != null && status != false) {
            //alert(typeof status);
            func(status);
        } else if (status.length == 0) {
            alert('fail !');
        }
    }, 'JSON');
}

/**
 * 取网页body部分大小
 * @returns {{browserWidth: number, browserHeight: number}}
 */
function getBrowserSize(obj) {
    return {'browserWidth': obj.width(), 'browserHeight': obj.height()};
}

function pointerX(event) {
    event = window.event || event;
    return event.pageX || (event.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft));
}

function pointerY(event) {
    event = window.event || event;
    return event.pageY || (event.clientY + (document.documentElement.scrollTop || document.body.scrollTop));
}