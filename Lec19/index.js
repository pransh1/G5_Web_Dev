const express = require("express");
const multer  = require('multer')
const upload = require("./storage/diskStorage.js");
const mem_upload = require("./storage/memoryStorage.js");
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
//OVERRIDDING SENDSTATUS CODE

// app.response.sendStatus = function (statusCode, type, message) {
//   // code is intentionally kept simple for demonstration purpose
//   return this.contentType(type)
//     .status(statusCode)
//     .send(message)
// }

// app.get("/", (req,res)=>{
//   // res.sendStatus(200)
//   res.sendStatus(200, 'text/plain', '{"message":"All Set"}')

// });

// app.get("/error", (req,res)=>{
//   // res.sendStatus(400)
//   res.sendStatus(400, 'application/json', '{"error":"resource not found"}')

// });

// app.get("/unauthorized", (req,res)=>{
//   // res.sendStatus(401)
//   res.sendStatus(401, 'application/json', '{"error":"UNAUTHORIZED not found"}')

// });

// app.get("/notfound", (req,res)=>{
//   // res.sendStatus(404)
//   res.sendStatus(404, 'application/json', '{"error":"resource not found"}')

// });

// app.get("/internal", (req,res)=>{
//   // res.sendStatus(500)
//   res.sendStatus(500, 'application/json', '{"error":"SERVER ERROR not found"}')

// });


/// TEMPLATE ENGINE USING HBS

var hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);


app.get("/",(req,res)=>{
  res.render('home.hbs',{
    firstname:"Priyanshu",
    lastname: "Saini Sir"
  })
})

app.get("/products",(req,res)=>{
  res.render('products.hbs',{
  products: [
    "Watch",
    "Shirts",
    "Sunglasses",
  ],
})
})

// app.post('/profile', upload.single('avatar'), function (req, res, next)  {
//   console.log(req.body);
//   console.log(req.file);
//   return res.redirect('/');
// })

app.post('/profile', mem_upload.single('avatar'), function (req, res, next)  {
  console.log(req.body);
  console.log(req.file);
  if(req.file) {
    const filePath = Path2D.join(__dirname, 'uploads', )
  }
  return res.redirect('/');
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
