const express = require('express');
const router = express.Router();
const notes = require('../controllers/notes');

router.post("/notes", notes.CreateNotes);
router.get("/notes", notes.GetAllNotes);
router.get("/notes/:id", notes.GetOneNotes)
router.put("/notes/:id", notes.UpdateNotes);
router.delete("/notes/:id", notes.DeleteNotes)

module.exports = router