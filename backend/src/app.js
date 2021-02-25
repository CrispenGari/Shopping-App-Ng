import server from "./server/index.js";
import mongoose from "mongoose";
const host = "localhost" || "127.0.0.1";
const port = 3001 || process.env.PORT;

const { productModel, basketModel } = server.models;
// Database Connection

mongoose
  .connect(server.dbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("CONNECTED TO CLOUD MONGODB"))
  .catch((error) => console.log(error));
mongoose.connection.once("open", () => {
  console.log("MongDB has been LINKED with localhost:" + port);
});

//  App Routes
server.app.get("/", (req, res) => {
  return res.status(200).redirect("/products");
});

server.app.get("/products", (req, res) => {
  productModel.find({}, (err, model) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(model);
    }
  });
});

server.app.post("/products/new", (req, res) => {
  const data = req.body;
  productModel.create(data, (error, data) => {
    if (!error) {
      res.status(201).send(data);
    } else {
      res.status(500).send(error);
    }
  });
});

server.app.get("/basket", (req, res) => {
  basketModel.find({}, (err, model) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(model);
    }
  });
});

server.app.post("/basket/add", (req, res) => {
  const basketData = req.body;
  basketModel.create(basketData, (error, data) => {
    if (!error) {
      res.status(201).send(data);
    } else {
      res.status(500).send(error);
    }
  });
});

server.app.delete("/basket/remove/:itemId", (req, res) => {
  const { itemId } = req.params;
  basketModel.deleteOne({ _id: itemId }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
server.app.delete("/basket/remove/all", (req, res) => {
  basketModel.deleteMany({});
});
server.app.listen(port, host, () => {
  console.log(`The server is running on port: ${port}`);
  console.log(`Visit: http://${host}:${port}/`);
});
