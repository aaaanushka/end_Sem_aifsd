const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const errorMiddleware = require(
    "./middleware/errorMiddleware"
);

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API Running");
});

app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/complaints", require("./routes/complaintRoutes"));

app.use("/api/ai", require("./routes/aiRoutes"));

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`
    );
});