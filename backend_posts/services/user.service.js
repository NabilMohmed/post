const userModel = require("../models/users.model");
const bcrypt = require("bcrypt"); // علشان اعمل Hash for password
const jwt =require("jsonwebtoken")  // علشان اعمل Authentication

module.exports.signUp = async (req, res) => {
  
 
    const { name, password, email, age } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      res.json({ message: "email already exist" });
    } else {
      bcrypt.hash(password, 4, async function (err, hash) {
        // Store hash in your password DB.
        await userModel.insertMany({ name, password: hash, email, age });
        res.json({ Message: "added" });
      });
    }

  

};

module.exports.signin = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  if (user) {
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      //login
      let token = jwt.sign({role:"user",name:user.name,userid:user._id},'Nabil')
      res.json({ message: "Succes", token });
    } else {
      res.json("password incorrect");
    }
  } else {
    res.json({ message: "email dosent exist" });
  }
};
