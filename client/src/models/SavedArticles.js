const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    nyt_id: {
        type: String,
        unique: "This thingy is already in here",
        required: true
    },
    headline: {
        type: String,
        required: true
    },
    snippet: {
        type: String
    },
    link: {
        type: String,
        required: true
    }
});

const SavedArticle = mongoose.model("Article", ArticleSchema);

module.exports = SavedArticle;

