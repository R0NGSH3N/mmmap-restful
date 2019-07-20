var express = require('express');
var router = express.Router();
var usermapController = require('./usermapController.js');

/*
 * GET
 */
router.get('/', usermapController.list);

/*
 * GET
 */
router.get('/:id', usermapController.show);

/*
 * POST
 */
router.post('/', usermapController.create);

/*
 * PUT
 */
router.put('/:id', usermapController.update);

/*
 * DELETE
 */
router.delete('/:id', usermapController.remove);

module.exports = router;
