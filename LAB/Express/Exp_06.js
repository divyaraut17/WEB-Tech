const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
 const time = new Date()
  res.json({
    message: 'Hello World!',
    time: time.toISOString(),
  })

})
app.use((req,res,next) =>{
console.log('Request received: ' + new Date())
next();
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})