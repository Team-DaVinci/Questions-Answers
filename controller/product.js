const db = require("../model");
const Product = db.product;
const Question = db.question;
const Answer = db.answer;
const Photo = db.photo;


exports.getQuestionList = async (productId, page = 1, count = 5) => {

  return await Product.findAndCountAll({

    where: { id: productId },

    include: [{
      model: Question,
      as: 'questions',
      limit: count,
      offset: count * (page - 1),

      required: true,

      include: [{
        model: Answer,
        as: "answers",
        subQuery: false,
        required: true,
        separate: true,

        include: [{
          model: Photo,
          as: "photos",
          subQuery: false,
          required: true,
          separate: true,

        }]
      }]

    }]
  })
};