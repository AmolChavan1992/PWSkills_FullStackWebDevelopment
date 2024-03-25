const express = require("express");
const { homepage, aboutpage, contactpage } = require("./controllers");
const routers = express.Router();

routers.post("/about", aboutpage);
routers.post("/contact", contactpage);
routers.post("/", homepage);

module.exports = routers;