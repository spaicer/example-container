const debug = require('debug')('app')
const OpenApiValidator = require('express-openapi-validator');
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');


(async () => {


    const port = process.env.PORT || 3001
    const server = express()
    server.use(bodyParser())

    //cors
    var corsOptionsDelegate = function (req, callback) {
        var corsOptions = {
            "origin": "*",
            "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
            "preflightContinue": false,
            "optionsSuccessStatus": 204
        }
        callback(null, corsOptions) // callback expects two parameters: error and options
    }
    server.use(cors(corsOptionsDelegate))

    //openapi definitions
    server.use(
        OpenApiValidator.middleware({
            apiSpec: './openapi.yaml',
            validateRequests: true,
            validateResponses: true,
            formats: require('./api/utils/formats'),
            validateSecurity: {
                handlers: require('./api/utils/authentication')
            },
            $refParser: {
                mode: 'dereference'
            }
        }),
    );


    server.use('/example', require("./src/http/example"))


    server.listen(port, () => debug(`Node listening on port ${port}`))

    server.use((err, req, res, next) => {
        // format error
        res.status(err.status || 500).json({
            message: err.message,
            errors: err.errors,
        });

    });
})()
