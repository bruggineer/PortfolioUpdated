const express = require('express');
const path = require("path");
const app = express();

app.use(express.static("public"));

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on  on port " + port)

