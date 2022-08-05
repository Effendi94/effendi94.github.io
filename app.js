var isFlutterInAppWebViewReady = false;

window.addEventListener("flutterInAppWebViewPlatformReady", function () {
    isFlutterInAppWebViewReady = true;
});

async function closeWebView(base64) {
    const data = [
        {
            type: "share",
            data: base64,
        },
    ];
    // Print.postMessage(data);

    console.log("### JS RUN ###");
    if (isFlutterInAppWebViewReady) {
        window.flutter_inappwebview.callHandler("shareHandler", ...data);
    }
}
