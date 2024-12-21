const express = require("express");
const userRoute = require("./routes/user.routes");
require("./config/mongodb.connection");
const PORT = 3000;
const cors = require("cors");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
