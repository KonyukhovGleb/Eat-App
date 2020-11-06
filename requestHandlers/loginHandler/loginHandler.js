const MongoClient = require("mongodb").MongoClient;

const checkPassword = require("./moduls/checkPassword.js").checkPassword;


function login(response, data) {

    let userData = JSON.parse(data);

    const url = "mongodb://localhost:27017/";
    const mongoClient = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    mongoClient.connect().then((client) => {
        const db = client.db("eatappdb");
        const collection = db.collection("users");
        
        checkPassword(userData, collection).then(user => {
            console.log(user);
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write("User is login");
            response.end();


        }).catch(err => {
            console.log(err)
            response.writeHead(400, {"Content-Type": "text/plain"});
            response.write(err);
            response.end();
        });

        
    })




}

exports.login = login;