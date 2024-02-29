const express = require("express");
const cors = require("cors");
const db = require("./models");
const morgan = require("morgan");
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('short'))

app.get("/", (req, res) => {
  res.json("hello");
});

db.sequelize.sync().then(()=>{
  app.listen(3000, () => {
    console.log("Connected to backend.");
  });
})

