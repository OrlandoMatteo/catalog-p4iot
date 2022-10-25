const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const catalog = require("./catalog.json")
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get("/all", (req, res) => {
    res.send(catalog)
});
app.get("/devices", (req, res) => {
    res.send(catalog.devicesList)
});
app.get("/device/:deviceID", (req, res) => {
    const toFind = req.params.deviceID
    const device = catalog.devicesList.find(({ deviceID }) => deviceID == toFind)
    res.send(device)
});
app.get("/houses", (req, res) => {
    res.send(catalog.housesList)
});
app.get("/house/:houseID", (req, res) => {
    const toFind = req.params.houseID
    const house = catalog.housesList.find(({ houseID }) => houseID == toFind)
    res.send(house)
});
app.get("/users", (req, res) => {
    res.send(catalog.usersList)
});
app.get("/user/:userID", (req, res) => {
    const toFind = req.params.userID
    const user = catalog.usersList.find(({ userID }) => userID == toFind)
    res.send(user)
});
app.get("/mqtt", (req, res) => {
    res.send(catalog.broker)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

