var express = require('express'); //including express
var app = new express(); //creating the instance
var port = 7777; // selecting port

//Following function is starts sockets and start listen from particular port. In following code I have given call back which contains err. So when port willbe start and listen function will be fire then this function will be execute.  
app.listen(port,function(err){

    if (typeof(err) == "undefined") {  
        console.log('Your application is running on : ' + port + ' port');  
    } 
});
app.use(express.static('public')); //making public directory as static diectorys
//app.use(express.static('src/views')); //making public directory as static diectory
app.set('views','./src/views');

app.set('view engine','ejs');


//Properties
app.get('/', function(req, res) {  
//    res.send('<h1>Hello !!!  Welcome to OEMS</h1>'); 
    res.render('index', {  
    title: 'Web Application using Node.js',  
    heading: 'Hello OLMS Corner, Welcome to Node.js Tutorial',  
    foodItems: ['Login', 'Register', 'Enquiry']
    });
});

app.get('/articles', function(req, res) {  
    res.send('<h1>Welcome to OEMS Articles.</h1>');
});
app.get('/login', function(req, res) {  
    res.send('<h1>Login :: OEMS</h1>');  
});  
app.get('/register', function(req, res) {  
    res.send('<h1>Welcome to OEMS - Registration</h1>');
});
