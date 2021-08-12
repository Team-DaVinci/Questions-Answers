const express = require("express");
const product = require("./controller/product");

const app = express();



// parse requests of content-type - application/json
app.use(express.json());


const db = require("./model");
db.sequelize.sync();

// simple route
app.get("/createProduct", async (req, res) => {
  // for (let i = 1; i < 1000012; i++) {
  //   await product.createProduct({
  //       id: i
  //   })


  // }
  res.send(200)
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});