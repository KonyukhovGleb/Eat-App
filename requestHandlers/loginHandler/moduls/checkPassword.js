function checkPassword(userData, collection) {
    return new Promise((resolve, reject) => {
        collection.findOne({"email": userData.email})
            .then(user => {
                if(user === null) 
                    reject("Invalid username");
                else if (user.password !== userData.password)
                    reject("Invalid password");
                else resolve(user);
                

        }).catch(err => console(err))
    })
    

}

exports.checkPassword = checkPassword; 