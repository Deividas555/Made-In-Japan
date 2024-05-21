import express from 'express';
const router = express.Router();
import NoteSchema from '../modules/noteSchema.js';

// @route    POST api/givenotes
// @desc     give notes to the server
// @access   Public
router.post('/', async (req, res) => {
  let noteSchema
  try {
    const {topic, description, completion, id } = req.body
    noteSchema = new NoteSchema({
      topic,
      description,
      completion,
      id,
    })
    console.log(noteSchema)
    await noteSchema.save()
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router