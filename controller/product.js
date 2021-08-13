const db = require("../model");
const Product = db.product;
const Question = db.question;
const Answer = db.answer;
const Photo = db.photo;


exports.getQuestionList = async (productId, page = 1, count = 5) => {

  let result =  await Product.findAndCountAll({
    where: { id: productId },
    include: [{
      model: Question,
      as: 'results',
      limit: count,
      offset: count * (page - 1),
      attributes: [["id", "question_id"], ["body", "question_body"], ["date", "question_date"], ["helpfulness", "question_helpfulness"], ["name", "asker_name"], "reported"],

      include: [{
        model: Answer,
        as: "answers",
        subQuery: false,
         separate: true,
        attributes: ["id", "body", "date", ["name", "answerer_name"], "helpfulness"],

        include: [{
          model: Photo,
          as: "photos",
          subQuery: false,
          separate: true,
        }]
      }]
    }]
  })


  return result
};

