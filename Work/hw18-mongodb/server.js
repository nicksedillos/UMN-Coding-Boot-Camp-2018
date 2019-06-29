// Dependencies.
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const mongoose = require("mongoose");
const db  = require("./models");

const PORT = 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Database connection. If deployed, use the deployed database. Otherwise use the local mongoHeadlines database.
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);

// Scrape route.
app.get("/scrape", function(req, res) {
  axios.get("http://www.woodburybulletin.com/tags/police-report/").then(function(response) {
    const $ = cheerio.load(response.data);
    $("div.article-main").each(function(i, element) {
      var result = {};
      console.log(result);
      result.title = $(this)
        .children("div.article-title")
        .text();
      result.link = $(this)
        .children("a.article-link")
        .attr("href");
        db.Article.create(result)
        .then(function(dbArticle) {
          console.log(dbArticle);
        })
        .catch(function(err) {
          return res.json(err);
        });
    });
    res.send("Scrape Complete");
  });
});

// Initialize server.
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});