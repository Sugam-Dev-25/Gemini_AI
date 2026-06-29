const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const chatRoutes = require("./app/routes/chatRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", chatRoutes);



app.get("/", (req, res) => {
  res.send("Server is running");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
