
import userModel from '../models/userModel.js';



//Add product to user cart

const addToCart = async (req, res) => {
  try {
    const {userId, productId, size} = req.body;

    if (!userId || !productId || !size) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    //checking if product already exists in the cart

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData ;

    if(cartData[productId]){
      if(cartData[productId][size]){
        cartData[productId][size] += 1;
      }else{
        cartData[productId][size] = 1;
      }
    } else {
      cartData[productId] = {};
      cartData[productId][size] = 1;
    }


    await userModel.findByIdAndUpdate(userId, {cartData});
    res.json({success:true, message: "Product added to cart"})

  } catch (error) {
    console.log(error);
    res.json({success:false, message: error.message})

  }
}

//Updateuser cart

const updateCart = async (req, res) => {

  try {

    const {userId, productId, size, quantity} = req.body;
    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }
    let cartData = await userData.cartData;

    // cartData[productId][size] = quantity;

     // Ensure the product and size exist before updating
    if (cartData[productId] && cartData[productId][size]) {
      cartData[productId][size] = quantity;
    } else {
      return res.json({ success: false, message: "Product or size not found in cart" });
    }


    await userModel.findByIdAndUpdate(userId, {cartData});
    res.json({success:true, message: "Cart updated successfully"})


  } catch (error) {
    console.log(error);
    res.json({success:false, message: error.message})

  }
}

//Get  user cart data

const getUserCart = async (req, res) => {
  try {

    const {userId} = req.body;
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;
    res.json({success:true, cartData})

  } catch (error) {
    console.log(error);
    res.json({success:false, message: error.message})

  }
}


export {addToCart, updateCart, getUserCart}
