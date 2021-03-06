function dataFiltr(collection, login) {
    return new Promise((resolve, reject) => {
        collection.findOne({"login": login})
            .then(user => {
                if(user.profileСompleted === false) {     
                    let profileСompleted = {profileСompleted: false}

                    resolve(profileСompleted);                    
                }    
                else {
                    let userFiltrData = {}
                    
                    userFiltrData.profileCompleted = user.profileСompleted
                    userFiltrData.basicUserInfo = user.basicUserInfo 
                    console.log(userFiltrData)

                    resolve(userFiltrData);
                }
                

        }).catch(err => console(err))
    })
}

exports.dataFiltr = dataFiltr;