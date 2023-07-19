const { Router } = require('express');
const { dataGet, dataPost } = require('../controllers/data.controllers');

const router = Router()

router.get("/", dataGet);

router.post("/", dataPost);

module.exports = router