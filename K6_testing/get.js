import http from 'k6/http';

///Get Testing
export default function () {
  var url = 'http://localhost:3000/qa/questions?product_id=1';
  http.get(url);
}



