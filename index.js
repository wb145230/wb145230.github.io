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
})