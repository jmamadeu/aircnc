const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const routes = require("./routes");

const app = express();
const server = http.Server(app);

mongoose
  .connect(
    "mongodb://ghostdev:ghostdev@cluster0-shard-00-00-aa5rx.mongodb.net:27017,cluster0-shard-00-01-aa5rx.mongodb.net:27017,cluster0-shard-00-02-aa5rx.mongodb.net:27017/aircnc?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

server.listen(3333);
