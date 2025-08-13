const express = require("express");
const app = express();
const port = 3000;
const expressRouter = express.Router();

// app.use('/secret', (req, res, next) => {
//   console.log('Accessing the secret section ...')
//   next() // pass control to the next handler
// })

// // // GET method route
// app.get('/', (req, res) => {
//   res.send('GET request to the homepage')
// })

// // // POST method route
// app.post('/', (req, res) => {
//   res.send('POST request to the homepage')
// })

// app.get('/*splat', async (req, res) => {
//   res.send('ok')
// })

// app.get('{/*splat}', async (req, res) => {
//   res.send('ok')
// })

// app.get('/[discussion|page]/:slug', async (req, res) => {
// res.status(200).send('ok')
// })

// app.get(['/discussion/:slug', '/page/:slug'], async (req, res) => {
// res.status(200).send('ok')
// })

// app.get('/ab?cd', (req, res) => {
//   res.send('ab?cd')
// })

// app.get('/ab+cd', (req, res) => {
//   res.send('ab+cd')
// })

// app.get('/ab*cd', (req, res) => {
//   res.send('ab*cd')
// })

// app.get(/a/, (req, res) => {
//   res.send('/a/')
// })

// app.get(/.*fly$/, (req, res) => {
//   res.send('/.*fly$/')
// })

// app.get('/users/:userId/books/:bookId', (req, res) => {
//   res.send(req.params)
// })

//ROUTE HANDLERS

// app.get('/example/a', (req, res) => {
//   res.send('Hello from A!')
// })

// app.get('/example/b', (req, res, next) => {
//   console.log('the response will be sent by the next function ...')
//   next()
// }, (req, res) => {
//   res.send('Hello from B!')
// })

// const cb0 = function (req, res, next) {
//   console.log('CB0')
//   next()
// }

// const cb1 = function (req, res, next) {
//   console.log('CB1')
//   next()
// }

// const cb2 = function (req, res) {
//   res.send('Hello from C!')
// }

// app.get('/example/c', [cb1,cb0 , cb2])

// const cb0 = function (req, res, next) {
//   console.log('CB0')
//   next()
// }

// const cb1 = function (req, res, next) {
//   console.log('CB1')
//   next()
// }

// app.get('/example/d', [cb0, cb1], (req, res, next) => {
//   console.log('the response will be sent by the next function ...')
//   next()
// }, (req, res) => {
//   console.log("THIS CB6")
//   res.send('Hello from D!')
// })

////////

// const chappalChecking = function (req, res, next) {
//   console.log("CHAPPAL UTARO HERE!");
//   next();
// };

// const prasad = function (req, res, next) {
//   console.log("PRASAD PURCHASE!");
//   next();
// };

// const poojaPath = function (req, res, next) {
//   console.log("Pooja Path!");
//   next();
// };

// app.get("/temple", chappalChecking, prasad, poojaPath,(req,res,next)=>{

// } ,(req, res) => {
//   res.send("ENTERED IN THE MANDIR!");
// });



///////////// APP ROUTE

// app.route('/book')
//   .get((req, res) => {
//     res.send('Get a random book')
//   })
//   .post((req, res) => {
//     res.send('Add a book')
//   })
//   .put((req, res) => {
//     res.send('Update the book')
//   })



// middleware that is specific to this router
// const timeLog = (req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// }
// router.use(timeLog)

// // define the home page route
// router.get('/', (req, res) => {
//   res.send('Birds home page')
// })
// // define the about route
// router.get('/about', (req, res) => {
//   res.send('About birds')
// })


//

const m1 = function (req,res,next){
  console.log("THIS IS M1");
  next();
}

const m2 = function (req,res,next){
  console.log("THIS IS M2");
  next();
}

app.get("/home",m1,m2,(req,res)=>{
  console.log("THIS IS HOME APP PAGE");
  res.send("THIS IS HOME ROUTE!!");
})

expressRouter.get("/login",(req,res)=>{
  console.log("THIS IS LOGIN ROUTER PAGE");
  res.send("THIS IS ROUTER LOGIN PAGE");
})





/////////////////////////////////////////////////////






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
