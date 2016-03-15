function connectWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        callback(WebViewJavascriptBridge)
    } else {
        document.addEventListener('WebViewJavascriptBridgeReady', function() {
          callback(WebViewJavascriptBridge)
        }, false)
    }
}
connectWebViewJavascriptBridge(function(bridge) {
    bridge.init(function(message, responseCallback) {
       message = JSON.parse(message);                           
       var element = document.getElementById(message.imageUrl)
       if (element.src.match("loading")) {
            element.src = message.imagePaths
       }
    });

    bridge.callHandler('testObjcCallback', {'url': 'http://wb145230.github.io/1456296311571.jpg'}, function(response) {

    });  
    bridge.callHandler('testObjcCallback', {'url': 'http://wb145230.github.io/1456296247502.jpg'}, function(response) {

    });
    bridge.callHandler('testObjcCallback', {'url': 'http://wb145230.github.io/1456296277575.jpg'}, function(response) {

    });
    bridge.callHandler('testObjcCallback', {'url': 'http://wb145230.github.io/1456296279927.jpg'}, function(response) {

    });
    bridge.callHandler('testObjcCallback', {'url': 'http://wb145230.github.io/1456296289528.jpg'}, function(response) {

    });
    bridge.callHandler('testObjcCallback', {'url': 'http://wb145230.github.io/1456296294820.jpg'}, function(response) {

    });
    bridge.callHandler('testObjcCallback', {'url': 'http://wb145230.github.io/1456296298849.jpg'}, function(response) {

    });
    bridge.callHandler('testObjcCallback', {'url': 'http://wb145230.github.io/1456296241206.jpg'}, function(response) {

    });
})

function onLoad() {
  var now = new Date().getTime();
  var page_load_time = now - performance.timing.navigationStart;
  alert("page loading time: " + page_load_time);
}