import express from 'express';
const router = express.Router();
import NoteSchema from '../modules/noteSchema.js';

// @route    POST api/getnotes
// @desc     Take nots from the server
// @access   Public
router.get('/', async (req, res) => {
  let noteSchema
  try {
    async function fetchData() {
      try {
        const docs = await NoteSchema.find({});
        console.log('Fetched data:', docs);
        console.log(JSON.stringify(docs))
        res.send(docs)
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    }
    fetchData();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router