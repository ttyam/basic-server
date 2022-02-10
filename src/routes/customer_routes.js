const express = require('express')
const router = express.Router();
const root = '/customers'
router.get('/',
    (req, res) => {
        // do stuff with the request, req
        console.log(req)
    
        // response
        res.json({
            name:'Ted'
        })
    }
)

module.exports = {root, router}
