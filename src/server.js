const path = require('path')
const express = require('express')
const {root,router} = require('./routes/customer_routes')
const app = express()
const port = 3000
const apiRoot = '/api'
console.log(root)
app.use(express.static(path.join(__dirname,'../www') ))
app.get('/', (req, res) => {
    res.sendFile('index.html')
})
app.use(apiRoot+root, router)
const listenCallback = () => {
    console.log(`Express is listening at http://localhost:${port}`);
}
app.listen(port, listenCallback)

app.get('/test',
    (req, res) => {
        // do stuff with the request, req
    
    
    // response
    res.json({
        name:'Ted'
    })
    }
)