const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema(
    {
        title: {
            type: String,
            minLength: 1,
            required: true,
            trim: true,
        },
        noteCards: [
            {
                type: Schema.Types.ObjectId,
                ref: "NoteCard",
            }
        ]
    },
    {timestamps: true}
);

const Note = mongoose.model("Notes", noteSchema);
module.exports = Note;
