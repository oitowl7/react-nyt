const express = require('express');
const bodyParser = require("body-parser");
let router = express.Router();
const db = require("../models");




router.get("/articles", (req, res) => {
    db.Articles.find({ _id: req.params.id }).populate('note')
    .then((data) => {
        res.json(data)
    }).catch((err) => {
        console.log(err);
    })
})
router.post("/save/:id", (req, res) => {
    console.log(req.body)
    const result = req.body
    db.Articles.create({ result })
    .then((data) => {
        res.json(data)
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router;
