const express = require('express')
const cors = require('cors')
require("dotenv").config()
var expressLayouts = require('express-ejs-layouts');




// CONNECT DATABASE
const db = require('./app/models/')
db.mongoose.connect(db.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connection established')
}).catch((err) => {
    console.log('Error connecting to database: ' + err.message)
    proccess.exit()
});

// END CONNECT DATABASE

const app = express()



// SETUP EXPRESS
app.use(cors({ credentials:true, origin:process.env.APP_URL }))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine','ejs');
app.use(expressLayouts);
// ENDSETUP

const port = process.env.PORT;


require('./routes/auth.routes')(app)
app.use('',require('./routes/main.routes'))

app.listen(port, () => {
    console.log(`CopyTradeApp listening on port ${port}`)
})
