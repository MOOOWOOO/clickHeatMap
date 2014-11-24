/**
 * Created by Jux on 2014/11/19.
 */
var selectParam = null;

function generateParam() {
    var datetimeStart = $('#startTime').val();
    var datetimeEnd = $('#endTime').val();
    var url = $('#url').val();

    selectParam = {
        'type': 'select',
        'param': {
            'startDateTime': datetimeStart,
            'endDateTime': datetimeEnd,
            'URL': url
        }
    }
}
