var express = require('express');
var router = express.Router();
var userController = require('./userController.js');

/*
 * GET
 */
router.get('/', userController.list);

/*
 * GET
 */
router.get('/:id', userController.queryUser);

/*
 * GET
 */
//router.get('/username:userName', userController.queryByUserName);
/*
 * POST
 */
router.post('/', userController.create);

/*
 * PUT
 */
router.put('/:id', userController.update);

/*
 * DELETE
 */
router.delete('/:id', userController.remove);

module.exports = router;
