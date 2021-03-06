let crypto = require("crypto")

function generateToken(email) {
    let dateOfCreation = new Date();
    const token = crypto.randomBytes(100).toString('hex');
    

    console.log("token", token);
    console.log("date of creation", dateOfCreation);
    
    return {token, dateOfCreation};
    
}

exports.generateToken = generateToken;