const express = require("express");
const connectDB = require("./config/db.js");
const cors = require("cors");
const userRouter = require("./routes/userRoute.js");
const adminRouter = require("./routes/adminRoute.js");

// App config
const app = express();
const port = process.env.PORT || 8888;

// database connection
connectDB();

app.use(express.json());
app.use(cors());

// api endpoints

app.use("/api/user", userRouter);
app.use("/api/adminPanel", adminRouter);

app.get("/", (req, res) => res.send("Back End"));

app.listen(port, () =>
  console.log(`server is started on http://localhost:${port}`)
);
