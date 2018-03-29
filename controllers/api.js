const express = require('express');
const bodyParser = require("body-parser");
let router = express.Router();
const db = require("../models");
const axios = require("axios");
const request = require("request")
require('dotenv').config()




router.get("/articles", (req, res) => {
    db.Articles.find({ })
    .then((data) => {
        res.json(data)
    }).catch(err => console.log(err))
});

router.post("/save/", (req, res) => {
    const result = {
        nyt_id: req.body.nyt_id,
        headline: req.body.headline,
        link: req.body.link,
        snippet: req.body.snippet
    }
    db.Articles.create(result)
    .then((data) => {
        res.json(data)
    }).catch(err => console.log(err))
})

router.delete("/delete/:nyt_id", (req, res) => {
    db.Articles.deleteOne({ _id: req.params.nyt_id })
    .then(data => res.json(data))
    .catch(err => console.log(err))
});

router.post('/search/', (req, res) => {
    const query = req.body
    const searchURL = createUrl(query)
    return request(searchURL, (err, response, body) => {
        thingy = JSON.parse(body);
        res.json(thingy);
    })
})
router.get('dpoqwieurpoiusadpoidjfpoaijsdfpoij', (req, res) => res.send("you've discovered my secret page"))


//comment
const authKey = process.env.NYT
const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
  authKey;


const createUrl = (query) => {
    let search = queryURLBase;

    search = `${search}&q=${query.query}`

    if (query.startDate) {
        search = search + "&begin_date=" + query.startDate + "0101";
    }
    if (query.endDate) {
        search = search + "&end_date=" + query.endDate + "0101";
    }
    return search;
}
module.exports = router;
