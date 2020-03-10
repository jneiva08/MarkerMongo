// Modules
var express = require('express');
//var app = express();

// Express route
var marksRouter = express.Router();

// User schema
var marks = require('../model/marks.model');

// Get All Points
marksRouter.route('/marks/').get((req, res) => {
    marks.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Create Points
marksRouter.route('/marks/').post((req, res, next) => {
    marks.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});


// Get Single Points
marksRouter.route('/marks/:id').get((req, res) => {
    marks.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update Points
marksRouter.route('/marks/:id').put((req, res, next) => {
    marks.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('Point successfully updated!')
        }
    })
})

// Delete student
marksRouter.route('/marks/:id').delete((req, res, next) => {
    marks.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = marksRouter;
