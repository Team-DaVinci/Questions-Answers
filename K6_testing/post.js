import http from 'k6/http';



export default function () {
  var url = `http://localhost:3000/qa/questions/?question_id=1/answers`;
  var postQuestion = JSON.stringify({

    body: 'Test1',
    name: 'Soph',
    email: 'Soph@',
    question_id: 1

  });

  http.post(url, postQuestion);
}