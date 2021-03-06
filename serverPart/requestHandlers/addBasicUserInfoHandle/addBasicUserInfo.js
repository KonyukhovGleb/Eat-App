const MongoClient = require("mongodb").MongoClient;

const checkToken = require("../../commonModuls/checkToken").checkToken;

function addBasicUserInfo(response, data) {
    
    const url = "mongodb://localhost:27017/";
    const mongoClient = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    let userData = JSON.parse(data);

    mongoClient.connect().then((client) => {
        console.log(userData.basicUserInfo);
      
        const db = client.db("eatappdb");
        const collection = db.collection("users");
        console.log("addBasicUserInfo")
        checkToken(userData, collection).then((res) => {

            return collection.findOneAndUpdate({ 'login': userData.login}, 
                                               { $set: {'basicUserInfo': userData.basicUserInfo}}
                                                
                                              );

        }).then((res) => {
            return collection.findOneAndUpdate({ 'login': userData.login}, 
                                               { $set: {'profileCompleted': true}}
                                      
                                              );


        }).then((res) => {
            response.setHeader ('Access-Control-Allow-Origin', '*');
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write(JSON.stringify(res));
            response.end();
        })
        .catch(err => {
            console.log('err', err)
            response.setHeader ('Access-Control-Allow-Origin', '*');
            response.writeHead(401, {"Content-Type": "text/plain"});
            response.write(JSON.stringify(err));
            response.end();
        })
        

    });

   
    
}

exports.addBasicUserInfo = addBasicUserInfo;