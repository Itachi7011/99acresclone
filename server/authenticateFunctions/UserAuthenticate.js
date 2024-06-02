const jwt = require("jsonwebtoken");


const userAccounts = require("../database/schema/users/userRegistration");

const userAuthenticate = async (req, res, next) => {
    try {

        const token = req.cookies.cookies1;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        

        const rootUser = await userAccounts.findOne({ _id: verifyToken._id, "tokens": token })



        

        if (rootUser) {
            req.token = token;
            req.rootUser = rootUser;
            req.id = rootUser._id;

        }
        
        else if (!rootUser) {

            throw new Error("User Not Found During Authentication!")

        }




        next();

    } catch (err) {
        res.status(401).send("UnAuthorised User, No Token Found!")
        console.log(`UnAuthorised User - ${err}`);
    }
}
module.exports = userAuthenticate;
