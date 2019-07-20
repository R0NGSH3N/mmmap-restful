var usermapModel = require('./usermapModel.js');
var mongoose = require('Mongoose');

/**
 * usermapController.js
 *
 * @description :: Server-side logic for managing usermaps.
 */
module.exports = {

    /**
     * usermapController.list()
     */
    list: function (req, res) {
        usermapModel.find(function (err, usermaps) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting usermap.',
                    error: err
                });
            }
            return res.json(usermaps);
        });
    },

    /**
     * usermapController.show()
     */
    show: function (req, res) {
        const criteria = {};
        criteria.$or = [];

        var id = req.params.id;
        
        if (mongoose.Types.ObjectId.isValid(id)) { criteria.$or.push({ _id: id });}

        criteria.$or.push({ userName: { $regex: id, $options: 'i' }});
        criteria.$or.push({ userId: { $regex: id, $options: 'i' }});

        usermapModel.findOne(criteria, function (err, usermap) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting usermap.',
                    error: err
                });
            }
            if (!usermap) {
                return res.status(404).json({
                    message: 'No such usermap'
                });
            }
            return res.json(usermap);
        });
    },

    /**
     * usermapController.create()
     */
    create: function (req, res) {
        var usermap = new usermapModel({
			userId : req.body.userId,
			userName : req.body.userName,
			mapIds : req.body.mapIds

        });

        usermap.save(function (err, usermap) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating usermap',
                    error: err
                });
            }
            return res.status(201).json(usermap);
        });
    },

    /**
     * usermapController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        usermapModel.findOne({_id: id}, function (err, usermap) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting usermap',
                    error: err
                });
            }
            if (!usermap) {
                return res.status(404).json({
                    message: 'No such usermap'
                });
            }

            usermap.userId = req.body.userId ? req.body.userId : usermap.userId;
			usermap.userName = req.body.userName ? req.body.userName : usermap.userName;
			usermap.mapIds = req.body.mapIds ? req.body.mapIds : usermap.mapIds;
			
            usermap.save(function (err, usermap) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating usermap.',
                        error: err
                    });
                }

                return res.json(usermap);
            });
        });
    },

    /**
     * usermapController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        usermapModel.findByIdAndRemove(id, function (err, usermap) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the usermap.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
