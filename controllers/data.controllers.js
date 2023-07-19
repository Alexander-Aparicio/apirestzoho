const response = require('express');

const dataGet = (req, res = response) => {
  
  res.json({
    msj:'GET API - CONTROLLERS'
  });

}

const dataPost = (req, res = response) => {
  const body = req.body
  res.json({
    msj: 'POST DATA',
    body: body.name
  })

}

module.exports = {
  dataGet,
  dataPost
}