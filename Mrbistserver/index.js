const express = require('express');
const app = express();

const cors = require('cors');
require('dotenv').config();
const prot= process.env.PORT || 5000;
//midlearware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://tofayeltuhin143:${process.env.DB_PASS}@mrbist.mqwmvhz.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();


const menucollection = client.db("mrbistmenu").collection("menu");

app.get('/menu', async(req, res) => {
     const result = await menucollection.find()
      .toArray();
      res.send(result);
   }
   )






    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('running server>>>!');
    });
 app.listen(prot, () => {
    console.log(`server is running on port ${prot}`);
    }   
    );  
    
