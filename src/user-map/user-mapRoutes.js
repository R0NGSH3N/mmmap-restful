var express = require('express');
var router = express.Router();
var user-mapController = require('./user-mapController.js');

/*
 * GET
 */
router.get('/', user-mapController.list);

/*
 * GET
 */
router.get('/:id', user-mapController.show);

/*
 * POST
 */
router.post('/', user-mapController.create);

/*
 * PUT
 */
router.put('/:id', user-mapController.update);

/*
 * DELETE
 */
router.delete('/:id', user-mapController.remove);

module.exports = router;
