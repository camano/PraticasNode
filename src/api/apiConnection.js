'use strict'

var rp = require('request-promise')
const fetch = require("node-fetch")



const apiConeccion = async function(url, option) {
    var hh = await fetch(url, option)
        .then(function(parsedBody) {
            return parsedBody.json();
        })
        .catch(function(err) {
            return err.error
        })
    return hh
}

module.exports.apiConeccion = apiConeccion