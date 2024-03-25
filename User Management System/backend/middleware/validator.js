const JWT = require("jsonwebtoken");

const signupDataValidate = (req, res, next) => {
    const {name, username, bio, email, password} = req.body;

    if(!name || !username || !bio || !email || !password) {
        return res.status(400).json({
            success:false,
            message: "All fields are required"
        });
    }

    next();
}

const loginDataValidate = (req, res, next) => {
    const {username, password} = req.body;

    if(!username || !password) {
        return res.status(400).json({
            success:false,
            message: "All fields are required"
        });
    }

    next();
}

const authenticateUser = (req, res, next) => {
    const token = (req.cookies && req.cookies.token) || null;
    if(!token) {
        return res.status(400).json({
            success: false,
            message: "Not authorized"
        });
    }

    try {
        const payload = JWT.verify(token, process.env.SECRET);
        req.user = {id: payload.id, username: payload.username};
    }
    catch(e) {
        return res.status(400).json({
            success:false,
            message:e.message
        });
    }

    next();
}

module.exports = {
    signupDataValidate,
    loginDataValidate,
    authenticateUser
}