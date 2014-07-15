var service = {
    client: new $.es.Client({
        hosts: 'talkboard-talkboard.rhcloud.com'
    }),
    list: function (successCallback, errorCallback) {
        service.client.search({
            index: 'talkboard',
            type: 'board'
        }).then(successCallback, errorCallback);
    },
    searchByName: function (name, successCallback, errorCallback) {
        service.client.search({
            index: 'talkboard',
            type: 'board',
            body: {
                query: {
                    match: {
                        name: name
                    }
                }
            }
            //body: {
            //  query: {
            //    match: {
            //      body: 'elasticsearch'
            //    }
            //  }
            //}
        }).then(successCallback, errorCallback);
    },
    getById : function () {
        var id = prompt("getById");
    },
    write: function () {
        var id = prompt("write");
    }
};
