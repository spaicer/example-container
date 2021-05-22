const http = require('express').Router()

http.get('/', async (req, res) => {
    try {

        //add algorithms here
        res.status(200).send({
            type: 'threshold breached',
            timestamp: Date.now(),
            name: "Anomaly Detection Service",
            importance: 2,
            isAnomaly: true
        })
    } catch (err) { res.status(500).send("error occured: " + err) }
})


module.exports = http

