const express = require("express");
const app = express();
const mongoose = require("mongoose");
const tasksRouter = require("./routes/api/tasks");
const User = require("./models/User");
const cors = require("cors");

app.use(cors());

// connect to db:
mongoose
  .connect(
    "mongodb+srv://admin:1234@task-manager.ngqlldz.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to MongoDB");
    const user = new User({
      username: "admin",
      password: "1234",
      tasks: [
        // {
        //   id: "1",
        //   text: "This is a note",
        //   time: "2021-03-01 12:00:00",
        // },
        // {
        //   id: "2",
        //   text: "This is another note",
        //   time: "2021-03-01 12:00:00",
        // },
      ],
    });

    user.save();
  })
  .catch((err) => console.log(err));

// middleware:
app.use(express.json());

// routes:
app.use("/api/tasks", tasksRouter);

// init server:
app.listen(3000, () => console.log("Server running on port 3000"));
