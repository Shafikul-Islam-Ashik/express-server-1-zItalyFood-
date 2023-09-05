const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const path = require("path");

// environment variables
const PORT = process.env.PORT || 6060;

// init express
const app = express();

// express middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static foldet
app.use(express.static("public"));

// routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/archive", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/archive.html"));
});

app.get("/gallery", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/gallery.html"));
});

app.get("/location", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/location.html"));
});

app.get("/menu", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/menu.html"));
});

app.get("/news", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/news.html"));
});

app.get("/reservation", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/reservation.html"));
});

app.get("/staff", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/staff.html"));
});

// 404 not found
app.get("*", (req, res) => {
  res.send(`<h1>404 | Not found</h1>`);
});

// post method for "reservation" page form
app.post("/reservation", (req, res) => {
  res.send(req.body);
});

// listen server
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`.bgGreen.black);
});
