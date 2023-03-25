const express= require('express');
const loginForm = require ('../forms/login');
const router = express.Router();

router.get('/', (req,res) =>{
res.render('index' , {
    person: [
{name: "KMH", address: "Myanmar"},
{name: "Neo", address: "UK"}
    ]
    
});
});

// call the form module
router.get('/login', (req,res) => {
res.render('login' ,{
    form: loginForm.toHTML(),
});
});

router.post('/login', (req,res) => {
    if (req.body.username === 'KMH' && 
    req.body.password === '123') {
        //Log in the user
        res.redirect('/');
        return
    }
    res.render('login',{
        form: loginForm.toHTML(),
    });
    });

router.get('/register', (req,res) => {
    res.send ('OK OK OK')
})


module.exports=router;
