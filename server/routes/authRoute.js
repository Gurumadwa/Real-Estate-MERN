const { Router } = require("express");
let router = Router();

const signup =require('../controllers/authController')

router.post('/signup',signup)

module.exports = router