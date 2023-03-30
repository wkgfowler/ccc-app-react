const express = require('express');
const app = express();
const cors = require('cors');
const pg = require('pg');
const db = require('./models');

//middleware
app.use(cors());
app.use(express.json());

// register and login routes
app.use("/auth", require("./routes/jswtAuth"));

// api routes
app.use("/api", require("./routes/api"))

// basic routes
app.use("/", require("./routes/basic"))

db.sequelize.sync().then((req) => {
    app.listen(3000, () => {
        console.log("server running");
    });
}).catch((err) => {console.error(err.message)});
