const express= require('express');
const loginForm = require ('../forms/login');
const router = express.Router();

router.get('/', (req,res) =>{
let name = '';
if (req.session.user) {
    name = req.session.user.name;
}
    res.render('index', {
        name: name,
    
});
});

// call the form module
router.get('/login', (req,res) => {
    if (req.session.uesr) {
        res.redirect('/');
        return
    }
res.render('login' ,{
    form: loginForm.toHTML(),
});
});

router.post('/login', (req,res) => {
    if (req.body.username === 'KMH' && 
    req.body.password === '123') {
        //Log in the user
        req.session.user = {
            name:'KMH'
        }
        res.redirect('/');
        return
    }
    res.redirect('/login');    
    
    });

    router.get('/logout', (req,res) => {
        req.session.user = null;
        res.redirect('/');
    })

router.get('/register', (req,res) => {
    res.send ('OK OK OK')
})


module.exports=router;
