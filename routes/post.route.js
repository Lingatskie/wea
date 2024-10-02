const express = require("express")

const routes = express.Router()

routes.get("/home", (req, res) => {
    res.send("Welcome Home!")
})

routes.get("/about", (req, res) => {
    res.send("About Us")
})

routes.get("/contact", (req, res) => {
    res.send("Contact Us")
})

module.exports = routes