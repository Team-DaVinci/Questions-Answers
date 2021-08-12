/* eslint-disable camelcase */
const mongoose = require('mongoose');

//GET /qa/questions

const questionSchema = new mongoose.Schema({
  product_id: Number,
  result: [questionResultSchema]
});

const questionResultSchema = new mongoose.Schema({
 
  question_id: Number,
  question_body: String,
  question_date: String,
  asker_name: String,
  question_helpfulness: Number,
  reported: Boolean,
  answers: {questionAnswerSchema}
});

const questionAnswerSchema = new mongoose.Schema({
  id: Number,
  body: String,
  date: String,
  answerer_name: String,
  helpfulness: Number,
  photos: Array
});


//GET /qa/questions/:question_id/answers

const answerSchema = new mongoose.Schema({
  question: String,
  page: Number,
  count: Number,
  results: [{answerResultSchema}]
});

const answerResultSchema = new mongoose.Schema({
  answer_id: Number,
  body: String,
  date: String,
  answerer_name: String,
  helpfulness: Number,
  photos: [photoResultSchema]
});

const photoResultSchema = new mongoose.Schema({
  id: Number,
  url: String,

});








