//INDUCES

//VARIABLES

const express = require('express')
const jsxEngine = require('jsx-view-engine');
const dotenv = require("dotenv")
dotenv.config();
const methodOverride = require('method-override');
const Journals = require('./models/journalSchema');
const path = require('path');
const journalRouter = require('./controllers/Journals')
const cors = require('cors')
require('./config/database');

//ENV. VARIABLES
const app = express();
// const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT || 3005;



//DATA
// const Journals = require('./models/journalSchema')
//Moved to Controllers

app.use(express.json())
app.use(express.urlencoded({extended:true}));//originally false
app.use(cors({ origin: '*' }))

//MIDDLEWARE
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine())



app.use(methodOverride('_method'));

//ROUTES
app.use('/journals', journalRouter)

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

app.listen(PORT, () =>{
    console.log('We in the building at', PORT)
})