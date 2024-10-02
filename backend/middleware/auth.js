import jwt from 'jsonwebtoken';

const authUser = (req, res, next) => {
  //get users token from headers

  const {token} = req.headers;

  if (!token) {
    return res.json({success:false, message: "Not Authorized Login Again"});
  }

  try {
    const token_decoded = jwt.verify(token, process.env.JWT_SECRET);

    // the id is gotten from the generate fuction in the userController
    // the id is the user id
    req.body.userId = token_decoded.id;
    next();

  } catch (error) {
    console.log(error);
    return res.json({success:false, message: error.message});

  }
}

export default authUser;
