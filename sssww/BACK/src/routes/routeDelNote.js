import express from 'express';
const router = express.Router();
import NoteSchema from '../modules/noteSchema.js';
let i = 0;
// @route    POST api/deletenotes
// @desc     give notes to the server
// @access   Public
router.post('/', async (req, res) => {
  try {
    const { topic } = req.body
    console.log(topic)
    const deletedDoc = await NoteSchema.findOneAndDelete({ topic: topic });
    console.log(deletedDoc)
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router