const express = require("express");
const cors = require("cors");
const db = require("./models");
const morgan = require("morgan");
const { default: helmet } = require("helmet");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(morgan('short'))
app.use(helmet());

app.use("/api/", routes);

db.sequelize.sync()
  .then(()=>{
    app.listen(3000, () => {
      console.log("Connected to database.");
    });
  })
  .catch((error)=>{
    console.log("Error connecting to database.")
  })

