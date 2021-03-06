const MongoClient = require("mongodb").MongoClient;

const checkIdenticalLogin = require("./moduls/checkIdenticalLogin").checkIdenticalLogin;


function registration(response, data) {
    
    const url = "mongodb://localhost:27017/";
    const mongoClient = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    let userData = JSON.parse(data);
    console.log(userData);

    mongoClient.connect().then((client) => {
      
        const db = client.db("eatappdb");
        const collection = db.collection("users");
         
        checkIdenticalLogin(userData.login, collection)
            .then(() => {

                collection.insertOne({ "login": userData.login, 
                                       "password": userData.password, 
                                       "dateOfRegistration": new Date(),
                                       "profileCompleted": false,
                                       "basicUserInfo": undefined,
                                    })

                response.setHeader ('Access-Control-Allow-Origin', '*');
                response.writeHead(200, {"Content-Type": "text/plain"});
                response.write("User is registrated");
                response.end();

            }).catch(err => {
                
                console.log(err)

                response.setHeader ('Access-Control-Allow-Origin', '*');
                response.writeHead(400, {"Content-Type": "text/plain"});
                response.write(err);
                response.end();

            })
    });

   
    
}

exports.registration = registration