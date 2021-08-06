
export const debounce = (fn ,wait,immediate) => {
    let timeout , result
    function debounced() {
        if(immediate){
           let callnow =  !clearTimeout
            timeout = setTimeout(()=>{
                timeout =null
            },wait)
            if(callnow) result = fn.apply(this,arguments)
        }else{
            if(!timeout) clearTimeout(timeout)
            timeout = setTimeout(()=>{
                fn.apply(this,arguments)
                clearTimeout(timeout)
            },wait)
        }
        return result
    }
    return debounced
}
function throttle(func, wait, options) {
    var timeout, context, args, result;
    var previous = 0;
    if (!options) options = {};

    var later = function() {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        func.apply(context, args);
        if (!timeout) context = args = null;
    };

    var throttled = function() {
        var now = new Date().getTime();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
    };
    return throttled;
}


function throttle (fn ,wait,options={}) {
    let timeout ,context,args,result
    let provious = 0;

    let later = function (params) {
        provious=options.leading === false ? 0 : Date().now()
        timeout = null,
        fn.apply(context,args)
        if(!timeout) context = args = null
    }
    let throttled = function () {
        let now = Date().now()
        if(!provious && options.leading === false) previous = now
        let remaining = wait - (now - previous)
        context = this
        args = arguments
        if (remaining <= 0 || remaining > wait){
            if (timeout) {
                clearTimeout(timeout)
                timeout = null;
            }
            previous = now
            fn.apply(context,args);
            if(!timeout) context = args = null
        }else if(!timeout && options.trailing !== false) {
            timeout = setTimeout(later,remaining)
        }
    }
    
}