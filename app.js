const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./src/config/dbConection")
require("dotenv").config();
const app = express();
const RouterModules = require("./src/routes");

app.use(cors());
app.use(express.json());
app.use("/api", RouterModules)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Tu app  esta lista  por  http://localhost:' + port);
})


dbConnect();