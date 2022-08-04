function closeWebView(base64) {
    const data = [
        {
            type: "share",
            data: base64,
        },
    ];
    console.log(data);
    // Print.postMessage(data);
    window.addEventListener("flutterInAppWebViewPlatformReady", function () {
        window.flutter_inappwebview.callHandler("shareHandler", ...data);
    });
    console.log("### JS RUN ###");
}
