const express = require("express");
const app = express();
const path = require("path");

// Set the view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Route to serve the main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route to handle square HTML content
app.get("/square", (req, res) => {
  res.render("square");
});

app.get("/welcome", (req, res) => {
  res.render("welcome");
});

// Route to handle triangle HTML content
app.get("/triangle", (req, res) => {
  res.render("triangle");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
