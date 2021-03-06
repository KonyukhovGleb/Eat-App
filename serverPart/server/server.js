const http = require("http");
const url = require("url")

function start(router, handle) {
    function onRequest(request, response) {
        
        let pathName = url.parse(request.url).pathname;
        let data = '';
        
        request.on('data', function(chunk) {
            data += chunk.toString();
            console.log(chunk);
        });
        
        request.on('end', function() {
            router(pathName, handle, response, data);
        });
    }
   
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");

}

exports.start = start;