const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
require('dotenv').config()
const bodyParser = require("body-parser")
const cors = require('cors')
const nodemailer = require('nodemailer');

const { typeDefs, resolvers } = require('./schemas')
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');
const { Router } = require('express');


const PORT = process.env.PORT || 3001;
const app = express();

const startServer = async () => {
    // creating new apollo server
    const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});

    await server.start();

    // integrate our Apollo server with the express application as middleware
    server.applyMiddleware({ app });

    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
}

startServer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

// transport.verify(function(error, success) {
//   if(error){
//     console.log(error)
//   } else {
//     console.log("server is ready to take our message")
//   }
// })

app.post('/sign-up', (req, res, next) => {
  const email = req.body.email
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const address = req.body.address
  const allergies = req.body.allergies
  const phoneNumber = req.body.phoneNumber

  const content = `email: ${email} \n Full name: ${firstName} ${lastName}`
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  const mail ={ 
    from: process.env.MAIL_FROM,
    to: 'test@test.com',
    subject:'You Got an ORDER!',
    message: `${firstName}`,
    content: content,
    html: `
    <h1>You Got an Order!</h1>
    <p> ${firstName} </p>
    <p> ${lastName} </p>
    <p> ${address} </p>
    <p> ${phoneNumber} </p>
    <h1> Allergies </h1>
    <p> ${allergies} </p>
    `
    
  }

  transport.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
        status: 'success'
      })
    }
  })

})



// app.post('/send_mail', cors(), async (req, res) => {
//     let {firstName} = req.body.firstName
//     const transport = nodemailer.createTransport({
//       host: process.env.MAIL_HOST,
//       port: process.env.MAIL_PORT,
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS
//       }
//     })
//     await transport.sendMail({
//       from: process.env.MAIL_FROM,
//       to: "test@test.com",
//       subject: "You got an ORDER!",
//       html: `
//       <h2>you got an order</h2>
//       <p>${firstName}</p>
//       `
//     })
// })

// static assets under here 



// Will uncomment  out everything under this  once we create a build folder for production

// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build/index.html'));
//   });

//   app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });