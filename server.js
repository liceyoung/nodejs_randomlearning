const exprees = require('express')
const path=require('path')

const app = express(_)
app.use('/', express.static(path.join(_dirname,'static')))

app.listen(9999, () => {
    console.log('Server up at 9999')
})