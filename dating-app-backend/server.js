import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Cards from './dbCards.js'

//App Config
const app = express()
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://shawnklein202:MtMX6q2fy4ocH04H@cluster0.ro67ybl.mongodb.net/?retryWrites=true&w=majority'

//Middleware
app.use(express.json())
// app.use(Cors({credentials: true, origin: true}))
app.use(Cors())

//DB Config
mongoose.connect(connection_url, {
  // useNewUrlParser: true
  // useCreateIndex: true,
  // useUnifiedTopology: true
})

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"))

app.post('/dating/cards', async (req, res) => {
  try {
    const dbCard = req.body

    console.log(dbCard)

    Cards.create(dbCard).then( (data) => {
        res.send(data)
    })
  } catch (err) {
    console.log(err);
  }
})

app.get('/dating/cards', async (req, res) => {
  Cards.find().then( data => { 
    res.status(201).send(data)
  }).catch( err => {
    console.log(err);
  })
})

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))
