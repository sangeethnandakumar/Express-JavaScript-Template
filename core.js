//Generic functions

//DEBOUNCING - Execute every X ms after previous event
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

//THROTTLING - Execute every X ms without checking previous event
function throttle(callback, limit) {
    var waiting = false;
    return function () {
        if (!waiting) {
            callback.apply(this, arguments);
            waiting = true;
            setTimeout(function () {
                waiting = false;
            }, limit);
        }
    }
}

//STANDARD ERROR HANDLING
function handleErrorMessage(standardResponse) {
    if (standardResponse != null) {
        switch (standardResponse.responseStatus ) {
            case 1:
                //Success
                break;
            case 2:
                //Warning
                break;
            case 3:
                //Error
                break;
                //Exception
            case 4:
                break
        }
    }
}