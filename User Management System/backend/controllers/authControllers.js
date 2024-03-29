const userModel = require("../model/userSchema");
const emailValidator = require("email-validator");
const bcrypt = require("bcrypt");

const signUp = async (req, res, next) => {
  const validEmail = emailValidator.validate(req.body.email);
  if (!validEmail) {
    res.status(400).json({
      success: false,
      message: "Invalid email format",
    });
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

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await userModel
      .findOne({
        username,
      })
      .select("+password");

    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
      return;
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

module.exports = {
  signUp,
  login,
  getUser
};
