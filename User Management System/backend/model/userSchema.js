const mongoose = require('mongoose');
const JWT = require("jsonwebtoken");
require('dotenv').config();
const bcrypt = require("bcrypt");

const {schema} = mongoose;

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        require: [true, "name is requird"],
        minLength: [5, "Name must be atleast 5 characters"],
        maxLength: [10, "Name must be maximum 10 characters"],
        trim:true
    },
    username: {
        type: String,
        require: [true, "user name is required"],
        minLength: [3, "User name must be atleast 3 characters"],
        maxLength: [10, "User name must be maximum 10 characters"],
        trim:true
    },
    email: {
        type:String,
        require: [true, "Email is required"],
        unique: true,
        lowercase: true,
        unique: [true, "Already exist"]
    },
    password: {
        type: String,
        select: false
    }
},
{
    timestamps: true
});

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    return next();
});

userSchema.methods ={
    jwtToken() {
        return JWT.sign(
            {id: this._id, username: this.username},
            process.env.SECRET,
            { expiresIn: "24h" }
        )
    }
}

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;