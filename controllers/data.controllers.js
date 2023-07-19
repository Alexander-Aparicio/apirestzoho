require("dotenv").config();
const response = require("express");
const axios = require("axios");
const config = require("../axios/config");

const dataGet = (req, res = response) => {
  res.json({
    msj: "GET API - CONTROLLERS",
  });
};

const dataPost = (req, res = response) => {
  const body = req.body;
  //Los campos que van a enviar desde voxiplant son estos const { id, phone_a, phone_b, call_status, call_cost, duration } = body
  const { Name, Email, Precio, Tipo_de_M_quina } = body;

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

  let token = process.env.TOKEN;

  let headers = {
    Authorization: `Zoho-oauthtoken ${token}`,
    "Content-Type": "application/json",
  };

  config.headers = headers;
  config.data = data;

  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      res.json({
        msj: "POST DATA",
        body,
      });
    })
    .catch((error) => {
      console.log(error);
      res.json({
        msj: "ERROR EN EL ENVÍO",
        body,
        error
      });
    });
};

module.exports = {
  dataGet,
  dataPost,
};
