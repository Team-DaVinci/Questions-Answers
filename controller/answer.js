const db = require("../model");
const Answer = db.answer;
const Photo = db.photo;

exports.createAnswer = async (body, name, email, photos = [], questionId) => {
  // console.log(body, name, email, productId)
  let result = await Answer.create({
    name,
    body,
    email,
    date: new Date().getTime(),
    questionId
  })

  for( let photo of photos) {
    await Photo.create({
      url: photo,
      answerId: result.id
    })

  }
};

exports.updateAnswerHelpfulness = async (answerId) => {
  // console.log(body, name, email, productId)
  let result = await Answer.findByPk(answerId)

  await result.update({
    helpfulness: result.helpfulness + 1,
  })
};

exports.updateAnswerReport = async (answerId) => {
  // console.log(body, name, email, productId)
  let result = await Answer.findByPk(answerId)

  await result.update({
    reported: true,
  })
};
