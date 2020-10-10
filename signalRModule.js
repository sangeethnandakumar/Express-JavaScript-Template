var signalRModule = (function () {

    var connection = null;

    //APIs exposed
    return {
        init: init,
        listenMessagingEvents: listenMessagingEvents,
        invokeHub: invokeHub
    }

    //Public functions
    function init() {
        connection = new signalR.HubConnectionBuilder()
            .withUrl("/chatHub/")
            .configureLogging(signalR.LogLevel.Information)
            .build();
        connection.onclose(start);
        start();
    }

    function listenMessagingEvents() {
        //Event: MessageSend
        connection.on('MessageSend', function () {

        });
        //Event: MessageReceived
        connection.on('MessageReceived', function () {

        });        
    }

    function invokeHub() {
        //Invoke
        connection.invoke("SendMessage", "demo username", "demo message");
    }

    //Private functions
    async function start() {
        try { await connection.start(); console.log("SignalR Connected."); } catch (err) { console.log(err); setTimeout(start, 5000); }
    };

})();