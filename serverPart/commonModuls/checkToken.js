function checkToken(userData, collection) {
    return new Promise((resolve, reject) => {
        collection.findOne({"login": userData.login})
            .then(user => { 
                console.log("Correct token:",user.token.token === userData.token)
                user.token.token === userData.token ? resolve(true) : reject(`Invaid token`)
                console.log("qweqrqrw", typeof userData.token)
            }).catch(err => console.log(err))
    });
}

exports.checkToken = checkToken;