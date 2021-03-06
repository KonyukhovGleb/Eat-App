function checkPassword(userData, collection) {
    console.log(userData)
    return new Promise((resolve, reject) => {
        collection.findOne({"login": userData.login})
            .then(user => {

                if(user === null) {     
                    console.log(user);
                    reject("Invalid login or password");
                    
                }    
                else if (user.password !== userData.password){
                    console.log(user);

                    reject("Invalid login or password");
                }
                else resolve(user);
                

        }).catch(err => console(err))
    })
    

}

exports.checkPassword = checkPassword; 