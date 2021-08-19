import http from 'k6/http';

///Get Testing
export default function () {
  var url = `http://localhost:3010/qa/questions?product_id=${Math.floor(Math.random() * 1000011) + 1}`;
  http.get(url);
}



