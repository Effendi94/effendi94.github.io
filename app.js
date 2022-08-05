var isFlutterInAppWebViewReady = false;

window.addEventListener("flutterInAppWebViewPlatformReady", function () {
    isFlutterInAppWebViewReady = true;
});

async function closeWebView(base64) {
    const data = [
        {
            type: "share",
            base64: base64,
        },
    ];
    if (isFlutterInAppWebViewReady) {
        window.flutter_inappwebview.callHandler("shareHandler", ...data);
    }
}
