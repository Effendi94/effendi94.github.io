function closeWebView(base64) {
    const data = {
        type: "share",
        data: base64,
    };
    console.log(data);
    Print.postMessage(data);
}
