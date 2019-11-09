const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LessonSchema = new Schema({
    moduleName: {
        type: String,
    },
    question: {
        type: String
    },
    image: {
        type: String,
    },
    voice: {
        type: String,
    },
    choices: {
        type: String
    },
    answer: {
        type: String
    },
    points: {
        type: Number
    },
    difficulty: {
        type: String
    },
    category: {
        type: String,
    }
});
const Lesson = mongoose.Model("Lesson", LessonSchema);
module.exports = Lesson