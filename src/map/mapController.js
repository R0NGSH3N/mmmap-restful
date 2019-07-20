var mapModel = require('./mapModel.js');
var mongoose = require('mongoose');

/**
 * mapController.js
 *
 * @description :: Server-side logic for managing maps.
 */
module.exports = {
    /**
     * mapController.list()
     */
    list: function (req, res) {
        mapModel.find(function (err, maps) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting map.',
                    error: err
                });
            }
            return res.json(maps);
        });
    },

    /**
     * mapController.show()
     */
    show: function (req, res) {
        const criteria = {};
        criteria.$or = [];

        var id = req.params.id;

        if (mongoose.Types.ObjectId.isValid(id)) {
            criteria.$or.push({
                _id: id
            });
        }

        criteria.$or.push({ userName: { $regex: id, $options: 'i' }});
        criteria.$or.push({ userId: { $regex: id, $options: 'i' }});
        criteria.$or.push({ name: { $regex: id, $options: 'i' }});

        mapModel.findOne(criteria, function (err, map) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting map.',
                    error: err
                });
            }
            if (!map) {
                return res.status(404).json({
                    message: 'No such map'
                });
            }
            return res.json(map);
        });
    },

    /**
     * mapController.create()
     */
    create: function (req, res) {
        var map = new mapModel({
			name : req.body.name,
			userName : req.body.userName,
			userId : req.body.userId,
			nodes : req.body.nodes,
			connectors : req.body.connectors,
			lastUpdateDate : req.body.lastUpdateDate

        });

        map.save(function (err, map) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating map',
                    error: err
                });
            }
            return res.status(201).json(map);
        });
    },

    /**
     * mapController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        mapModel.findOne({_id: id}, function (err, map) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting map',
                    error: err
                });
            }
            if (!map) {
                return res.status(404).json({
                    message: 'No such map'
                });
            }

            map.name = req.body.name ? req.body.name : map.name;
			map.userName = req.body.userName ? req.body.userName : map.userName;
			map.userId = req.body.userId ? req.body.userId : map.userId;
			map.nodes = req.body.nodes ? req.body.nodes : map.nodes;
			map.connectors = req.body.connectors ? req.body.connectors : map.connectors;
			map.lastUpdateDate = req.body.lastUpdateDate ? req.body.lastUpdateDate : map.lastUpdateDate;
			
            map.save(function (err, map) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating map.',
                        error: err
                    });
                }

                return res.json(map);
            });
        });
    },

    /**
     * mapController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        mapModel.findByIdAndRemove(id, function (err, map) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the map.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
