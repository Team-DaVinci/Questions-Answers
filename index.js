const express = require("express");
const product = require("./controller/product.js");
const question = require("./controller/question.js");
const answer = require("./controller/answer.js");

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

const db = require("./model");
db.sequelize.sync();

// simple route

/////////////////////GET///////////////////////////
app.get("/qa/questions/:question_id/answers", async (req, res, next) => {
  try {
    if (!(req.params.question_id && !isNaN(req.params.question_id))) {
      throw new Error("Wrong Id");
    }
    const result = await question.getAnswerToQuestion(
      req.params.question_id,
      req.query.page,
      req.query.count
    );
    res.status(200).send(result);
  } catch (err) {
    next(err);
  }
});

app.get("/qa/questions", async (req, res, next) => {
  try {
    if (!req.query.product_id) {
      res.status(400).send("Provide the Prodcut Id");
    }

    let result = await product.getQuestionList(
      req.query.product_id,
      req.query.page,
      req.query.count
    );



    res.send(result);
  } catch (err) {
    next(err);
  }


  // for ( let i = 1; i < 1000012; i++) {
  //   await product.createProduct({
  //     id: i
  //   })
  // }
});


///////////////////PUT//////////////////////
app.put("/qa/questions/:question_id/helpful", async (req, res, next) => {
  try {
    if (!req.params.question_id)
      throw new Error("Please provide a question id");

    await question.updateQuestionHelpfulness(req.params.question_id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

app.put("/qa/questions/:question_id/report", async (req, res, next) => {
  try {
    if (!req.params.question_id)
      throw new Error("Please provide a question id");

    await question.updateQuestionReport(req.params.question_id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

app.put("/qa/answers/:answer_id/helpful", async (req, res, next) => {
  try {
    if (!req.params.answer_id) throw new Error("Please provide an answer id");

    await answer.updateAnswerHelpfulness(req.params.answer_id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

app.put("/qa/answers/:answer_id/report", async (req, res, next) => {
  try {
    if (!req.params.answer_id) throw new Error("Please provide an answer id");

    await answer.updateAnswerReport(req.params.answer_id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});
///////////////////POST//////////////////////
app.post("/qa/questions/:question_id/answers", async (req, res, next) => {
  try {
    if (!req.body.body) throw new Error("Please provide a body");
    if (!req.body.name) throw new Error("Please provide a name");
    if (!req.body.email) throw new Error("Please provide an email");


    await answer.createAnswer(
      req.body.body,
      req.body.name,
      req.body.email,
      req.body.photos,
      +req.params.question_id
    );
    res.status(201).send();
  } catch (err) {
    next(err);
  }
});

app.post("/qa/questions", async (req, res, next) => {
  try {
    await question.createQuestion(
      req.body.body,
      req.body.name,
      req.body.email,
      req.body.product_id
    );
    res.status(201).send();
  } catch (err) {
    next(err);
  }
});

/////////////////
/////ERROR Handling
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err);
});

const PORT = 3010;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
