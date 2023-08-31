const express = require('express');
const cors = require('cors');
const notes = require('./src/routes/notes');
const app = express()
const port = 3000

// app use
app.use(express.json())
app.use(cors());

// server listener
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})

// routes
app.use("/", notes)

module.exports = app