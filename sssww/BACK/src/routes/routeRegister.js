import express from 'express';
const router = express.Router();
import User from "../modules/userSchema.js"; // Importing the User model
import whaHappen from "../../fetchWhaHappen.js"
import bcrypt from "bcrypt"
const saltRounds = 10;

// @route    POST api/register
// @desc     Register user
// @access   Public
router.post('/', async (req, res) => {
  let { username, email, password} = req.body;
  console.log(username, email, password)




  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
    }
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
          return console.error(err);
      }
      console.log('Original password:', password);
      console.log('Hashed password:', hash);
      password = hash
      user = new User({
        username,
        email,
        password,
      });
      console.log(user)
      whaHappen("Registravosi", user)
      user.save();
      res.send('User registered');
  });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router