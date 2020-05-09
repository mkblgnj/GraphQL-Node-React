const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

const cors = require('cors');


//allow cross origin request
app.use(cors());
//db Connection
const mongoose = require('mongoose')
const password = "qwerty123";
const url =
  `mongodb+srv://hathodi:${password}@gql-hathodi-wyypm.mongodb.net/test?retryWrites=true&w=majority`
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })







// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));


// app.listen(4000, () => {
//     console.log('now listening for requests on port 4000');
// });
const port = process.env.PORT || 4000;
app.listen(port, () =>{
  console.log('Server is up and running on port number ' + port);
  
});
