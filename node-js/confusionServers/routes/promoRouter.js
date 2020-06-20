const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());


promoRouter
    .route('/')
    .all(function (req, res, next) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        next()
    })

    .get(function (req, res, next) {
        res.end('We will send all the promotions to you!')
    })

    .post(function (req, res, next) {
        res.end('We will add the dish: ' + req.body.name + ' with details: ' + req.body.description)
    })

    .delete(function (req, res, next) {
        res.end('Farewell promotions.')
    });


promoRouter
    .route('/:promoId')
    .all(function (req, res, next) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        next()
    })

    .get(function (req, res, next) {
        res.end('We will send details of the promotion: ' + req.params.promoId + ' to you!')
    })

    .put(function (req, res, next) {
        res.write('Updating the promotion: ' + req.params.promoId + '\n');
        res.end('We will update the promotion: ' + req.body.name +
            ' with details: ' + req.body.description)
    })

    .delete(function (req, res, next) {
        res.end('Farewell promotion: ' + req.params.promoId)
    });

module.exports = promoRouter;