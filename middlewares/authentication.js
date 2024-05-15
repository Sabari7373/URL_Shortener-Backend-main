const jwt = require("jsonwebtoken");

const authentication = (req,res,next)=>{
    let token = req.headers.authorization;
  if (token) {
    try {
      let decode = jwt.verify(token, process.env.SECRETKEY)
      if (decode) {
        next();
      }

    } catch (error) {
      res.json({
        statusCode: 401,
        message: "Your Session is About to Expire!",
        error,
      })
    }

  } else {
    res.json({
      statusCode: 401,
      message: "unauthorized"
    })
  }

}

module.exports = { authentication }
