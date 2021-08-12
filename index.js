const express = require("express");
const product = require("./controller/product.js");


const app = express();



// parse requests of content-type - application/json
app.use(express.json());


const db = require("./model");
db.sequelize.sync();

// simple route

/////////////////////GET///////////////////////////
app.get('/productAnswers', async (req, res) => {
  let result = await product.getQuestionList(5)
  res.send(result)
});


app.get('/productQuestions', async (req, res) => {

  res.send(200)
});

///////////////////PUT//////////////////////
app.put('/questionHelpfulness', async (req, res) => {

});

app.put('/answerHelpfulness', async (req, res) => {

});

app.put('/answerReport', async (req, res) => {

});
///////////////////POST//////////////////////
app.post('/addQuestion', async (req, res) => {

});

app.post('/addAnswer', async (req, res) => {

});

/////////////////

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});