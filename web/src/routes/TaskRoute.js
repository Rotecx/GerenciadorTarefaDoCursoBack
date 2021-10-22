const express = require('express');

const router = express.Router();

const TaskController = require('../controller/TaskController');

router.post ('/', TaskController.create);
router.put ('/:id', TaskController.update);
//router.post ('/:id', TaskController.read);
//router.delete ('/:id', TaskController.delete);
module.exports = router;