const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get("/user",(req,res)=>{
//     res.send("THIS IS USER")
// });

// app.post("/user",(req,res)=>{
//     res.send("POST REQUEST");
// })

// app.put('/user', (req, res) => {
//   res.send('Got a PUT request at /user')
// })

// app.delete('/user', (req, res) => {
//   res.send('Got a DELETE request at /user')
// })

// app.use(express.static('public'))


app.all('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/profile', (req, res) => {
  res.send('Hello USER PROFILE!')
});

app.all('/u', (req, res) => {
  res.send('Hello USER2!')
});

app.use('/user', (req, res) => {
  res.send('Hello USER!')
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
