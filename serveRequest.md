app.post('/addAnswer', (req, res) => {
  axios.post(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${req.headers.id}/answers`,
    {
      body: req.body.body,
      name: req.body.name,
      email: req.body.email,
      photos: req.body.photos
    },
    {
      headers: {
        Authorization: `${auth.TOKEN}`
      }
    }
  )
  .then(result => {
    res.status(200).send('Success server side!')
  })
  .catch(error => {
    console.log('POST ANSWER SERVER SIDE: ', error);
  })
})

app.post('/addQuestion', (req, res) => {
  let productId = Number(req.body.product_id);
  axios.post(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/`,
    {
      body: req.body.body,
      name: req.body.name,
      email: req.body.email,
      product_id: productId
    },
    {
      headers: {
        Authorization: `${auth.TOKEN}`
      }
    }
  )
  .then(result => {
    res.status(200).send('Success server side!')
  })
  .catch(error => {
    console.log('SERVER SIDE ERROR', error);
  })
})

app.put('/answerReport', (req, res) => {
  axios.put(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${req.headers.id}/report`, null, {
      headers: {
        Authorization: `${auth.TOKEN}`
      }
    }
  )
  .then(result => {
    res.status(204).send('Success!')
  })
  .catch(error => {
    console.log('SERVER ERROR', error);
  })
})

app.put('/answerHelpfulness', (req, res) => {
  axios.put(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${req.headers.id}/helpful`, null, {
      headers: {
        Authorization: `${auth.TOKEN}`
      }
    }
  )
  .then( result => {
    res.status(204).send('Success!')
  })
})

app.get('/productAnswers', (req, res) => {
  axios.get(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${req.headers.id}/answers`,
    {
    params: {
      page: 1,
      count: 50
    },
    headers: {
      Authorization: `${auth.TOKEN}`
    }
  })
  .then( result => {
    res.send(result.data)
  })
  .catch(error => {
    console.log('SERVER SIDE ERROR', error);
  })
})

app.put('/questionHelpfulness', (req, res) => {
  axios.put(
    `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${req.headers.id}/helpful`, null,{
    headers: {
      Authorization: `${auth.TOKEN}`
    }
  })
  .then(result => {
    res.status(204).send('Success!')
  })
})

app.get('/productQuestions', (req, res) => {
  axios({
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/?product_id=${req.headers.id}`,
    params: {
      // page: 1,
      count: 50
    },
    headers: {
      Authorization: `${auth.TOKEN}`
    }
  })
  .then(response => {
    res.send(response.data);
  })
  .catch(err => {
    res.send(err);
  })
})

/*
