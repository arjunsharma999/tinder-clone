import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://arjun:Arjun@cluster0.qg7qohx.mongodb.net/?retryWrites=true&w=majority'

 app.use(express.json());
 app.use(cors());


mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //  useCreateIndex: false,
})



app.get("/", (req, res) => res.status(200).send("hello mern"));

app.post("/tinder/cards", (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });

});

app.get("/tinder/cards", (req, res) => {

    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }

    });
});




app.listen(port, () => console.log('listning on localhost: ${port}'));


