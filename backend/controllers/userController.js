import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET,)
}

//Route for user login
const loginUser = async (req, res) => {
  try {

    const {email,password} = req.body

    const user = await userModel.findOne({email})

    if(!user){
      return res.json({success:false, message: "User not found"})
    }

    const match = await bcrypt.compare(password, user.password)

    if(match){
      const token = generateToken(user._id)
      res.json({success:true, token})
    }else{
      res.json({success:false, message: "Invalid credentials"})
    }

  } catch (error) {
    console.log(error);
    res.json({success:false, message: error.message})

  }
};

//Route for user registration

const registerUser = async (req, res) => {
  try {
    const {name, email, password} = req.body;

    //checking user already exists

    const exists = await userModel.findOne({email})

    if(exists){
      return res.json({success:false, message: "User already exists"})
    }

    //validating email formate and strong password

    if(!validator.isEmail(email)){
      return res.json({success:false, message: "Invalid email"})
    }

    if(password.length < 8){
      return res.json({success:false, message: "Please enter a strong password"})
    }

    //hashing password

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //creating new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword
    });

    const user = await newUser.save();

    const token = generateToken(user._id);

    res.json({success:true, token})


  } catch (error) {
      console.log(error);
      res.json({success:false, message: error.message})
  }
};

//Route for admin login

const adminLogin = async (req, res) => {

  try{
    const {email, password} = req.body;

    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
      const token = jwt.sign(email+password, process.env.JWT_SECRET);
      return res.json({success:true, token})
    } else{
      return res.json({success:false, message: "Invalid credentials"})
    }


  }catch(error){
    console.log(error);
    res.json({success:false, message: error.message})
  }
};


export { loginUser, registerUser, adminLogin };
