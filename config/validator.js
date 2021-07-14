const {check} = require('express-validator');

const validateNote = [
    check("title").isString().withMessage("Title should be String"),
];

const validateNoteCard = [
    check("note").isString().withMessage("Note should be a string"),
    check("completed")
        .isBoolean()
        .withMessage("Comleted Should be a Boolean")
        .optional(),
];

module.exports = {validateNote,validateNoteCard};