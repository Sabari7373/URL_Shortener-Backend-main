const jwt = require("jsonwebtoken");

const authentication = (req,res,next)=>{
    let { token } = req.body;
  if (token) {
    try {
      let decode = jwt.verify(token, process.env.SECRETKEY)
      if (decode) {
        next();
      }

    } catch (error) {
      res.json({
        statusCode: 401,
        message: "Your mail link expiry",
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
