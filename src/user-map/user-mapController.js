var user-mapModel = require('./user-mapModel.js');

/**
 * user-mapController.js
 *
 * @description :: Server-side logic for managing user-maps.
 */
module.exports = {

    /**
     * user-mapController.list()
     */
    list: function (req, res) {
        user-mapModel.find(function (err, user-maps) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user-map.',
                    error: err
                });
            }
            return res.json(user-maps);
        });
    },

    /**
     * user-mapController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        user-mapModel.findOne({_id: id}, function (err, user-map) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user-map.',
                    error: err
                });
            }
            if (!user-map) {
                return res.status(404).json({
                    message: 'No such user-map'
                });
            }
            return res.json(user-map);
        });
    },

    /**
     * user-mapController.create()
     */
    create: function (req, res) {
        var user-map = new user-mapModel({
			userId : req.body.userId,
			userName : req.body.userName,
			mapIds : req.body.mapIds

        });

        user-map.save(function (err, user-map) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating user-map',
                    error: err
                });
            }
            return res.status(201).json(user-map);
        });
    },

    /**
     * user-mapController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        user-mapModel.findOne({_id: id}, function (err, user-map) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user-map',
                    error: err
                });
            }
            if (!user-map) {
                return res.status(404).json({
                    message: 'No such user-map'
                });
            }

            user-map.userId = req.body.userId ? req.body.userId : user-map.userId;
			user-map.userName = req.body.userName ? req.body.userName : user-map.userName;
			user-map.mapIds = req.body.mapIds ? req.body.mapIds : user-map.mapIds;
			
            user-map.save(function (err, user-map) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating user-map.',
                        error: err
                    });
                }

                return res.json(user-map);
            });
        });
    },

    /**
     * user-mapController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        user-mapModel.findByIdAndRemove(id, function (err, user-map) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the user-map.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
