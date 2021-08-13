import http from 'k6/http';

export default function () {
  var url = 'http://localhost:3000/qa/questions/1/answers';
  var postQuestion = JSON.stringify({
    body: 'hello',
    name: 'sadaf',
    email: 'sadaf@',
    question_id: req.params.question_id,
  });

  http.post(url, postQuestion);
}