const express = require("express");
const app = express();
app.use(express.json());

app.use('/records', require('./userRouter'))

const port= 5000;
app.listen(port, () =>
  console.log("Express server is runnig at port no : 5000")
);

