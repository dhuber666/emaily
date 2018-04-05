const express = require("express");
const app = express();
const keys = require("./config/keys");
const mongoose = require("mongoose");

mongoose.connect(keys.mongoURI);

require("./model/User");
require("./routes/authRoutes")(app);

require("./services/passport");

app.listen(5000);
