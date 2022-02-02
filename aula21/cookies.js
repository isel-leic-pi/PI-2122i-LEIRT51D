const express = require('express')
const cookieParser = require('cookie-parser')


const app = express()

app.use(cookieParser())
app.get('/', rootHandler)
app.get('/addCover', addCover)
app.get('/addSmartphone', addSmartphone)
app.get('/seeBag', seeBag)

app.listen('8080', ()=>{console.log('Listening')})


function rootHandler(req, res){
    
    if(!req.cookies.bag){
        res.cookie("name", "Filipe", {expires : new Date(Date.now() + 60000) })
        res.cookie("bag" , JSON.stringify({items : [],value : 0}) )
    } 
    res.send(`<a href="/seeBag"> see Bag </a>
             <a href="/addSmartphone"> Add Smartphone </a>
             <a href="/addCover"> Add Cover </a>`)
}

function addSmartphone(req, res){
    console.log(req.cookies)
    //console.log(req.get('Cookie'))
    const bag = JSON.parse(req.cookies.bag)
    bag.items.push("Smartphone X")
    bag.value += 1000
    res.cookie("bag" , JSON.stringify(bag) )
    res.redirect(303,'/')
}

function addCover(req, res){
    console.log(req.cookies)
    //console.log(req.get('Cookie'))
    const bag = JSON.parse(req.cookies.bag)
    bag.items.push("Cover Y")
    bag.value += 1000
    res.cookie("bag" , JSON.stringify(bag) )
    res.redirect(303,'/')
}


function seeBag(req, res){
    console.log(req.cookies)
    //console.log(req.get('Cookie'))
    res.send(`${req.cookies.bag}
           <a href="/"> Root </a>`)
}