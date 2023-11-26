const jwt = require('jsonwebtoken');
const jwtController = async(req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'});
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production" ? true: false,
        sameSite: process.env.NODE_ENV === "production" ? "none": "strict",
      })
      .send({success: true});
}

module.exports = jwtController;