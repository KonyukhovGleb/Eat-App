function checkIdenticalLogin(login, collection) {
    return new Promise((resolve, reject) => {
        collection.findOne({"login": login})
            .then(user => { 
                user === null ? resolve(true) : reject(`This email has been used ${login}`)
        
            }).catch(err => console.log(err))
    });
}

exports.checkIdenticalLogin = checkIdenticalLogin;