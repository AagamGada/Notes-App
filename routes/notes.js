const express = require("express");
const router = express.Router();
const { validateNote, validateNoteCard } = require("../config/validator");
const NoteController = require("../controller/notes");

router.post("/", validateNote, NoteController.postNote);
router.post("/:noteId", validateNoteCard, NoteController.postNoteCard);
router.get("/", NoteController.getAllNotes);
router.delete("/:noteId", NoteController.deleteNote);
router.delete("/card/:noteCardId", NoteController.deleteNoteCard);
router.put("/card/:noteCardId", NoteController.updateNoteCard);

module.exports = router;