const {readFileSync} = require('fs')
const { resolve } = require('path')

module.exports = {
    port :{
        http : 7878,
        https : 7879
    },

    security : {
        cert : readFileSync(resolve('ssl', 'esprex.crt')),
        key : readFileSync(resolve('ssl', 'esprex.key'))
    }
}