const express = require('express');
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

module.exports = router;
