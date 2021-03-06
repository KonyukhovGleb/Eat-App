const MongoClient = require("mongodb").MongoClient;

const checkToken = require("../../commonModuls/checkToken").checkToken;
const dataFiltr = require("../basicUserInfoHandler/moduls/dataFiltr").dataFiltr;

function basicUserInfo(response, data) {
    
    const url = "mongodb://localhost:27017/";
    const mongoClient = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    let userData = JSON.parse(data);
    console.log(userData);

    mongoClient.connect().then((client) => {
      
        const db = client.db("eatappdb");
        const collection = db.collection("users");
        
        checkToken(userData, collection).then((res) => {

            return collection.findOne({'login': userData.login})
        
        }).then((res) => {
            console.log(res)
            return dataFiltr(collection, userData.login);

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

exports.basicUserInfo = basicUserInfo