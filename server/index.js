const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 5300;
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("*", (req,res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});