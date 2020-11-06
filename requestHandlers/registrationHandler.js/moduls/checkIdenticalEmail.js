function checkIdenticalEmail(email, collection) {
    return new Promise((resolve, reject) => {
        collection.findOne({"email": email})
            .then(user => { 
                user === null ? resolve(true) : reject(`This email has been used ${email}`)
        
            }).catch(err => console.log(err))
    });
}

exports.checkIdenticalEmail = checkIdenticalEmail;