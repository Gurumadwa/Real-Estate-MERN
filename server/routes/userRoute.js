

const { Router } = require("express");
let router = Router();



const test = require('../controllers/userController')



router.get('/test',test)

module.exports=router