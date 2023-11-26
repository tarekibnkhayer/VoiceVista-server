const logout = async(req, res) => {
   try {
    res.clearCookie('token', {
        maxAge: 0,
        secure: process.env.NODE_ENV === 'production' ? true: false,
        sameSite: process.env.NODE_ENV === 'production'? "none": "strict",
    })
    .send({success: true});
   } catch (error) {
    console.error('Error clearing token:', error);
    res.status(500).send({ success: false, error: 'Internal Server Error' });
   }
}
module.exports = logout;