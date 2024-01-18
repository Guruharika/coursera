var express=require('express')
var mongoose=require('mongoose')
var bodyparser=require('body-parser')
var cors=require('cors')
var path=require('path')

var app=express();
const route=require('./routes/route')

//mongodb connection
mongoose.connect('mongodb+srv://xxxxx:xxxxx@cluster0.bhwcicq.mongodb.net/contactSchema');

//on connection
mongoose.connection.on('connected',()=>{
    console.log('connected');
});

//on error
mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('error in connection:',err);
    }
})




//port no
const port=3000;

//adding middleware
app.use(cors());

//body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

app.use('/api',route);
app.get('/',(req,res)=>{
    res.send('testing');
})
app.listen(port,()=>{
    console.log('Server listening to the port:',port);
})
