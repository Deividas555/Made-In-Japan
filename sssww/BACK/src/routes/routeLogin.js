import express from 'express';
import bcrypt from 'bcrypt'
import User from "../modules/userSchema.js"

const router = express.Router();
// @route    POST api/login
// @desc     User logins
// @access   Public
router.post('/', async (req, res) => {
    const vartotojas = req.body
  try {
    const checkHash = await User.find({username: vartotojas.username});
    bcrypt.compare(vartotojas.password, checkHash[0].password, (err, result) => {
        if (err) {
            console.error(err);
        } else if (result) {
            console.log('Password match!');
            res.send({state: true})
        } else {
            console.log('Password does not match!');
        }
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router