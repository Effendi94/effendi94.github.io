function closeWebView(base64) {
    console.log("### JS RUN ###");
    const data = {
        type: "share",
        data: base64,
    };
    console.log(data);
    Print.postMessage(data);
}

window.addEventListener("flutterInAppWebViewPlatformReady", function () {
    window.flutter_inappwebview.callHandler("shareHandler", closeWebView);
});
