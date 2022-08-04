function closeWebView(base64) {
    const data = {
        type: "share",
        data: base64,
    };
    const sendData = JSON.stringify(data);
    console.log(sendData);
    Print.postMessage(sendData);
}
