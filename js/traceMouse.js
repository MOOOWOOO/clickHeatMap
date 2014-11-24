/**
 * Created by Jux.Liu on 2014/11/18.
 */
var Data = null;    // 最终提交的JSON对象
var totalClick = null;    // 总点击数组
var cBrowser = null;
var url = null;
/**
 *  初始化数据
 */
function initData() {
    url = window.location.href;
    cBrowser = getBrowserSize($(document.body));
    Data = {'type': 'insert', 'param': null};
    totalClick = [];
}

/**
 * 组织本轮收集到的数据
 */
function submitData() {
    Data['param'] = totalClick;
    if (Data['param'].length == 0) {
        return ;
    }
    ajaxSend('index.php', Data, initData);
}

/**
 * 定时任务
 */
var intervalID = setInterval(function () {
    submitData();
}, 10000);

$(document).ready(function () {

    // 页面加载完成，首次初始化数据。
    initData();
    var tmpBrowser = cBrowser;

    /**
     * 绑定页面点击事件，获取访客每次点击的鼠标坐标和时间。
     */
    $(document).click(function (obj) {
        var localtion = obj ? obj : window.event;
        var mydate = getDateTime();
        var crd={'crdx': localtion.clientX, 'crdy':localtion.clientY};
        var pct=crd2pct(crd, tmpBrowser);
        // 单次点击的浏览器窗口尺寸、鼠标位置和时间
        var signleClick = {
            'screenX': tmpBrowser['browserWidth'],
            'screenY': tmpBrowser['browserHeight'],
            'crdx': crd['crdx'],
            'crdy': crd['crdy'],
            'pctx': pct['pctx'],
            'pcty': pct['pcty'],
            'url': url,
            'datetime': mydate
        };
        totalClick.push(signleClick);
        //alert(JSON.stringify(signleClick));
    });

    $('input').click(function () {
        submitData();
    });

    /**
     * 当窗口大小变化时，修改窗口对象。
     */
    $(window).resize(function () {
        cBrowser = getBrowserSize($(document.body));
    });

    /**
     * 定时循环检测窗口对象是否变化，如果变化(表示窗口大小有变化)，则发送新窗口数据。
     * 针对 IE 和 Firefox，因为拖动窗口变化时，会连续触发resize操作，所以为避免特地进行定时循环
     */
    setInterval(function () {
        if (tmpBrowser != cBrowser) {
            tmpBrowser = cBrowser;
        }
    }, 3000);
});