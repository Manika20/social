const express =require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");

router.get('/',homeController.home);
// /users commands wl be sent to /users file.
router.use('/users',require('./users'));
router.use('/formdata',require('./formdata'));
router.use('/donetask',require('./donetask'));
router.use('/deletetask',require('./deletetask'));
console.log("router loaded");

module.exports = router;