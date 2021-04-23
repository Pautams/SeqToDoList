const account = require("../models/account");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.createAccount = async (req,res) => {
    var salt = bcrypt.genSalt(saltRounds);
    var hash = bcrypt.hashSync(req.body.password, salt);
    req.body.code = generateCode();
    let data = await account.model.create(
        req.body
    )
    console.log("account created successfully");
}

exports.readAccount = async(req,res) =>{
    let data = await account.model.findByPk(
        req.body.id,
        {raw: true}
    )
}
generateCode = () => {
    let generate = "";
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 32;
    for ( var i = 0; i < length; i++ ) {
        generate += char.charAt(Math.floor(Math.random() * char.length));
    }
    return generate;
}