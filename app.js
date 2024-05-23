require('dotenv').config();
const express=require("express");

const cors=require("cors")
const  booksRoute= require('./routes/booksRoute.js')
// import mongoose from 'mongoose';
const dbconnection = require('./config');


const app = express();

// Middleware for parsing request body
// app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
// app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );



// app.get('/', (request, response) => {
//   console.log(request);
//   return response.status(234).send('Welcome To MERN Stack Tutorial');
// });

// app.use('/books', booksRoute);

// dbconnection
//   .connect(mongoDBURL)
//   .then(() => {
//     console.log('App connected to database');
//     app.listen(PORT, () => {
//       console.log(`App is listening to port: ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });



dbconnection.dbConnect();


app.use(express.json())
app.use(cors())
app.use("/",booksRoute)


const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
});

