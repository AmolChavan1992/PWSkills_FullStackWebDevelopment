const userModel = require("../model/userSchema");
const emailValidator = require("email-validator");
const bcrypt = require("bcrypt");

const signUp = async (req, res, next) => {
  const { uname, email, password, confirmPassword } = req.body;

  if (!uname || !email || !password || !confirmPassword) {
    res.status(400).json({
      success: false,
      message: "All fields are required",
    });
    return;
  }

  const validEmail = emailValidator.validate(email);
  if (!validEmail) {
    res.status(400).json({
      success: false,
      message: "Invalid email format",
    });
    return;
  }

  if (password != confirmPassword) {
    res.status(400).json({
      success: false,
      message: "Password and confirm password must be same",
    });
    return;
  }

  try {
    const userInfo = userModel(req.body);
    const result = await userInfo.save();

    return res.status(200).json({
      success: true,
      data: result,
    });
  } catch (e) {
    if (e.code == 11000) {
      return res.status(400).json({
        success: false,
        data: "Account already exists.",
      });
    }

    return res.status(400).json({
      success: false,
      data: e.message,
    });
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      success: false,
      message: "All fields are mandetory",
    });
  }

  try {
    const user = await userModel
      .findOne({
        email,
      })
      .select("+password");

    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = user.jwtToken();
    user.password = undefined;

    const cookieOption = {
      MaxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    };

    res.cookie("token", token, cookieOption);
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      data: e.message,
    });
  }
};

const getUser = async (req, res, next) => {
    const userId = req.user.id;

    try {
      const user = await userModel.findById(userId);
      return res.status(200).json({
        success:true,
        data:user
      })
    }
    catch(e) {
        res.status(400).json({
            success:false,
            message:e.message
        })
    }
};

const logout = (req, res) => {
  try {
    const cookieOption = {
      expires: new Date(),
      httpOnly: true
    };

    res.cookie("token", null, cookieOption);
    res.status(200).json({
      success:true,
      message:"Logged out"
    });
  }
  catch(e) {
    res.status(400).json({
      success:false,
      message:e.message
    });
  }
}

module.exports = {
  signUp,
  signIn,
  getUser,
  logout,
};
