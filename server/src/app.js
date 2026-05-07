const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

const notFoundMiddleware = require("./middlewares/notFoundMiddleware");
const errorMiddleware = require("./middlewares/errorMiddleware");

const app = express();


// ==========================================
// MIDDLEWARES
// ==========================================
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// ==========================================
// HOME ROUTE
// ==========================================
app.get("/", (req, res) => {
  res.send("API is running...");
});


// ==========================================
// USER ROUTES
// ==========================================
app.use("/api/users", userRoutes);


// ==========================================
// NOT FOUND MIDDLEWARE
// ==========================================
app.use(notFoundMiddleware);


// ==========================================
// ERROR MIDDLEWARE
// ==========================================
app.use(errorMiddleware);


module.exports = app;