const { request } = require("http");

const MongoClient = require("mongodb").MongoClient;


function test(response, data) {
    const url = "mongodb://localhost:27017/";
    const mongoClient = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    mongoClient.connect().then((client) => {
      
        const db = client.db("eatappdb");
        const collection = db.collection("users");
        
        collection.find({}, function(error, results) {
            if (error) {
                console.log(error);
                response.setHeader ('Access-Control-Allow-Origin', '*');
                response.writeHead(400, {"Content-Type": "text/plain"});
                response.write(err);
                response.end();
            } else {
                results.toArray().then(array => {
                    console.log(array.length);

                    let answer = {
                        numberOfUsers: array.length
                    }

                    console.log(array)
                    console.log("JSON",JSON.stringify(answer))
                    response.setHeader ('Access-Control-Allow-Origin', '*');
                    response.writeHead(200, {"Content-Type": "application/json"});
                    response.write(JSON.stringify(answer));
                    response.end();
                });
            }
        })

        
    });

}

exports.test = test; 