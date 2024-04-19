const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const PORT = 8000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
// db connection
mongoose
  .connect("mongodb://127.0.0.1:27017/Restaurant")
  .then(() => {
    console.log("db connection succesfully");
  })
  .catch((error) => {
    console.log(error);
  });

//user schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    table_no: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
   
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

// create user
app.post("/createuser", async (req, res) => {
  try {
    const bodyData = req.body;
    const user = new User(bodyData);
    const userData = await user.save();
    res.send(userData);
  } catch (error) {
    res.send(error);
  }
});

app.listen(PORT, () => {
  console.log(`server is running on ...${PORT}`);
});