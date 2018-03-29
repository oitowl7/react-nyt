var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    nyt_id: {
        type: String,
        unique: "This thingy is already in here",
        // required: true
    },
    headline: {
        type: String,
        // required: true
    },
    snippet: {
        type: String
    },
    link: {
        type: String,
        // required: true
    }
});
var Articles = mongoose.model("Articles", ArticleSchema);

module.exports = Articles;
