import express from "express";
import mongoose from "mongoose";
import cards from "./dbCards.js";
import cors from "cors";

//admin : NsYemQYsd4ZcSdfp
//App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://admin:NsYemQYsd4ZcSdfp@cluster0.acllq.mongodb.net/tinderDatabase?retryWrites=true&w=majority";

//Middlewares
app.use(express.json());
app.use(cors());

//DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//API endpoints
app.get("/", (req, res) => res.status(200).send("hello"));
app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
