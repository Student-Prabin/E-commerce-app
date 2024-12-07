import userModel from "../userModel.js";
import validator from "validator";
import bycript from "bcrypt";
import jwt from "jsonwebtoken"

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET)
}

// Route for userLogin
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "user does not exists" })
    }

    const isMatch = await bycript.compare(password, user.password);

    if (isMatch) {
      const token = createToken(user._id);
      res.json({ success: true, token })
    } else {
      res.json({ success: false, message: "invalid password" })
    }

  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message })
  }
}


// Route for userRegistration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // check if user already exists or not
    const exists = await userModel.findOne({ email })
    if (exists) {
      return res.json({ success: false, message: "user already exists" })
    }
    // validating a strong password

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid email" })
    }
    if (password.length < 8) {
      return res.json({ success: false, message: "Please enter a strong password" })
    }

    // hashing user password
    const salt = await bycript.genSalt(10)
    const hashedPassword = await bycript.hash(password, salt)

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword
    })

    const user = await newUser.save()

    const token = createToken(user._id)

    res.json({ success: true, token })

  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message })
  }
}

// Route for adminLogin
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.json({ success: true, token })
    } else {
      res.json({ success: false, message: "invalid details" })
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message })
  }
}

export { loginUser, registerUser, adminLogin }