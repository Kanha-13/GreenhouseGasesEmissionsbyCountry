const app = require('express')();
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose');
const Cors = require('cors')
const env = require('dotenv')
const routes = require('./routers')
//configs
env.config()

// mongo connection 
mongoose.connect(process.env.MONGO_API, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to DB")
}).catch(err => {
  console.log(err)
})


//middlewares
app.use(Cors());

//endpoints
app.use(routes)


//listener
app.listen(PORT, () => console.log(`server running at ${PORT}`))
