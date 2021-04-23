const express = require("express");
const app = express();
const accountRoutes = require("./routes/accountRoutes");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine','ejs')
app.use(bodyParser.json());

app.use("/accounts", accountRoutes);
app.use("/task", taskRoutes);
app.listen(3000);