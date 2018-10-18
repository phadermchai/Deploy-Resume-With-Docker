const express = require('express')
const app = express()
const port = 3000

app.use(express.static('/root/public'));

app.get('/', (req, res) => res.sendfile('/root/public/index.html'));

app.listen(port, () => console.log("app listening on port"+port))

