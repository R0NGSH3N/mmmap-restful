var express = require('express');
var router = express.Router();
var mapController = require('./mapController.js');

/*
 * GET
 */
router.get('/', mapController.list);

/*
 * GET
 */
router.get('/:id', mapController.show);

/*
 * POST
 */
router.post('/', mapController.create);

/*
 * PUT
 */
router.put('/:id', mapController.update);

/*
 * DELETE
 */
router.delete('/:id', mapController.remove);

module.exports = router;
