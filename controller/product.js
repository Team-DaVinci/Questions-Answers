const db = require("../model");
const Product = db.product;
const Question = db.question;
const Answer = db.answer;
const Photo = db.photo;


// exports.createProduct = async (product) => {
//   await Product.create({
//       id: product.id
//   })
// }

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


  result = JSON.parse(JSON.stringify(result));
    if (result.rows[0]) {

      for (let j in result.rows[0].results) {
        let a = result.rows[0].results[j];
        a.answers = convertArrayToObject(a.answers, "id");

        for (let i in a.answers) {
          a.answers[i].photos = a.answers[i].photos.map((item) => item.url);
        }
      }
      result.rows[0].product_id = result.rows[0].id;
      result.rows[0].id = undefined;

    }



  return result.rows[0];
};

const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };å
  }, initialValue);
};
