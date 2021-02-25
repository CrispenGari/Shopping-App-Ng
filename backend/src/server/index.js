import express from "express";
import models from "../models/index.js";
import dbUrl from "../url/index.js";
import cors from "cors";

const app = express();

// Midleways
app.use(cors());
app.use(express.json());

class Server {
  constructor() {}
  app = app;
  models = models;
  dbUrl = dbUrl;
}

const server = new Server();
export default server;
