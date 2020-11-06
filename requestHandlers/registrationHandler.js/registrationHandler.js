const MongoClient = require("mongodb").MongoClient;

const checkIdenticalEmail = require("./moduls/checkIdenticalEmail").checkIdenticalEmail;


function registration(response, data) {
    
    const url = "mongodb://localhost:27017/";
    const mongoClient = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    let userData = JSON.parse(data);
    console.log(userData);

    mongoClient.connect().then((client) => {
      
        const db = client.db("eatappdb");
        const collection = db.collection("users");
         
        checkIdenticalEmail(userData.email, collection).then(() => {
            collection.insertOne(userData).then(() => {

                response.writeHead(200, {"Content-Type": "text/plain"});
                response.write("User is registrated");
                response.end();
                
                client.close();
            })
            .catch(err => {
                console.log(err)
                response.writeHead(400, {"Content-Type": "text/plain"});
                response.write("This email has been used");
                response.end();
            })
                  
    
        }).catch(err => console.log(err))

        
    });

   
    
}

exports.registration = registration