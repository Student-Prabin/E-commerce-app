import userModel from "../userMode";

// Route for userLogin
const loginUser = async (req, res) => {
  res.json({ msg: " login api working" })
}


// Route for userRegistration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // check if user already exists or not
    const exists = await userModel.findOne({ email })
    if (exists) {
      return res.json(success: "false", message: "user already exists")
    }
  }(error){ }
}

// Route for adminLogin
const adminLogin = async (req, res) => {

}

export { loginUser, registerUser, adminLogin }