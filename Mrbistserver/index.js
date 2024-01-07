const express = require('express');
const app = express();

const cors = require('cors');
const prot= process.env.PORT || 5000;
//midlearware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('running server>>>!');
    });
 app.listen(prot, () => {
    console.log(`server is running on port ${prot}`);
    }   
    );  
    
