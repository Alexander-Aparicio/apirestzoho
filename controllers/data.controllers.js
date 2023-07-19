const response = require('express');
const axios = require("axios");
const config = require('../axios/config');

const dataGet = (req, res = response) => {
  
  res.json({
    msj:'GET API - CONTROLLERS'
  });

}

const dataPost = (req, res = response) => {
  const body = req.body
  // const { id, phone_a, phone_b, call_status, call_cost, duration } = body 
  const {Name, Email,Precio,Tipo_de_M_quina} = body

  let data = JSON.stringify({
    data: [
      {
        Name: Name,
        Email: Email,
        Precio: Precio,
        Tipo_de_M_quina: Tipo_de_M_quina,
      },
    ],
  });

  config.data = data

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });

  res.json({
    msj: 'POST DATA',
    body
  })

}

module.exports = {
  dataGet,
  dataPost
}