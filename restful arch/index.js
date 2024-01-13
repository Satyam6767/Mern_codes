const express = require('express');
const app = express();
const path = require('path');


let  comments = [
    {
        id:0,
        username:"sam",
        comments:"Live students km nhi hai"
    },
    {
        id:1,
        username:"sam1",
        comments:"Live students km nhi hai1"
    },
    {
        id:2,
        username:"sam2",
        comments:"Live students km nhi hai2"
    },
    {
        id:3,
        username:"sam3",
        comments:"Live students km nhi hai3"
    }
]

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')));



// body parsing middleware->
// app.use(express.json) // for json data
app.use(express.urlencoded({ extended: true})) // for form data


// TASK1-> SHOW ALL COMMENTS FROM ARRAY
app.get('/comments', (req,res)=>{
    res.render('index', {comments})
})


// TASK 2-> SHOW FORM FOR NEW COMMENTS
app.get('/comments/new', (req,res)=>{
    res.render('new')
})

// TASK 3-> TO ACTUALLY ADD THE COMMENTS IN THE DB/ARRAY
app.post('/comments', (req,res)=>{
    // console.log(req.body)
    let {username, comment } = req.body;
    comments.push({username , comment , id:comments.length});
    res.redirect('/comments')
    // res.send(req.body)
})

let PORT = 8080;
app.listen(PORT, ()=>{
    console.log(`Server is running on: ${PORT}`)
})