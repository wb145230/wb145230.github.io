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

    bridge.callHandler('testObjcCallback', {'url': 'http://wb145230.github.io/1456814821774.jpg'}, function(response) {

    });  
    bridge.callHandler('testObjcCallback', {'url': 'http://wb145230.github.io/1455777672282.jpg'}, function(response) {

    });
    bridge.callHandler('testObjcCallback', {'url': 'http://wb145230.github.io/1455777681954.jpg'}, function(response) {

    });
    bridge.callHandler('testObjcCallback', {'url': 'http://wb145230.github.io/1455777702796.jpg'}, function(response) {

    });
    bridge.callHandler('testObjcCallback', {'url': 'http://wb145230.github.io/1455777707801.jpg'}, function(response) {

    });
    bridge.callHandler('testObjcCallback', {'url': 'http://wb145230.github.io/1455777713830.jpg'}, function(response) {

    });
    bridge.callHandler('testObjcCallback', {'url': 'http://wb145230.github.io/1455777733695.jpg'}, function(response) {

    });
    bridge.callHandler('testObjcCallback', {'url': 'http://wb145230.github.io/1455777739677.jpg'}, function(response) {

    });
    bridge.callHandler('testObjcCallback', {'url': 'http://wb145230.github.io/1456814821774.jpg'}, function(response) {

    });    
})

function onLoad() {
  var now = new Date().getTime();
  var page_load_time = now - performance.timing.navigationStart;
  alert("page loading time: " + page_load_time);
}