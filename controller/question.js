const db = require("../model");
const Product = db.product;
const Question = db.question;
const Answer = db.answer;
const Photo = db.photo;


exports.getAnswerToQuestion = async (questionId, page = 1, count = 5) => {

  let result =  await Question.findAndCountAll({
    where: { id: questionId },
    attributes: ['id'],
      include: [{
        model: Answer,
        as: "answers",
        limit: count,
        offset: count * (page - 1),
        attributes: [["id", "answer_id"], "body", "date", ["name", "answerer_name"], "helpfulness"],

        include: [{
          model: Photo,
          as: "photos",
          subQuery: false,
          separate: true,
        }]
      }]

  })

  results = JSON.parse(JSON.stringify(result));
  results = results.rows[0];
  results.count = count;
  results.page = page;
  results.question = results.id;
  results.id = undefined;
  results.results = results.answers;
  results.answers = undefined

  return results
};




exports.createQuestion = async (body, name, email, productId) => {
  // console.log(body, name, email, productId)
  await Question.create({
    name,
    body,
    email,
    date: new Date().getTime(),
    productId
  })

};



exports.updateQuestionHelpfulness = async (questionId) => {
  // console.log(body, name, email, productId)
  let result = await Question.findByPk(questionId)

  await result.update({
    helpfulness: result.helpfulness + 1,
  })
};

exports.updateQuestionReport = async (questionId) => {
  // console.log(body, name, email, productId)
  let result = await Question.findByPk(questionId)

  await result.update({
    reported: true,
  })
};

