document.addEventListener('DOMContentLoaded', function () {   
    window.addEventListener('message', MSG.received);
});

//handles messaging to opposite api
var MSG = {
    //source of secure api, set on first received message 
    secureSource: null,
    //origin of secure api, set on first received message
    secureOrigin: null,
    //message received
    received: function (e) {
        console.log('message received in sandbox', e);
    },
    //send message
    sendMessage: function (e) {
        MSG.secureSource.postMessage(data, MSG.secureOrigin);
    }
}