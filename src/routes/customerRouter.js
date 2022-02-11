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

// /api/customers/:id
router.get('/:id',
    (req, res) => {
        // do stuff with the request, req
        const customerId = req.params.id
        // response
        res.json( {id: customerId} )
    }
)

router.post('/',
    (req, res) => {
        let customerData = req.body
        const id = Math.ceil(Math.random()*1000)+1
        res.json( 
            {
                id,
                ...customerData
            }
        )
    }
)

module.exports = {root, router}
