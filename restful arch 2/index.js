const { log } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override')


let  comments = [
    {
        id:0,
        username:"sam",
        comment:"Live students km nhi hai"
    },
    {
        id:1,
        username:"sam1",
        comment:"Live students km nhi hai1"
    },
    {
        id:2,
        username:"sam2",
        comment:"Live students km nhi hai2"
    },
    {
        id:3,
        username:"sam3",
        comment:"Live students km nhi hai3"
    }
]

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')));



// body parsing middleware->
// app.use(express.json) // for json data
app.use(express.urlencoded({ extended: true})) // for form data

app.use(methodOverride('_method'))

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


// TASK=4-> TO SHOW A PARTICULAR COMMENT IN THE DB/ARRAY  -> req.params
app.get('/comments/:commentId', (req, res)=>{
    let { commentId } = req.params;
    let foundComment = comments.find((comment)=>{
        
        return comment.id === parseInt(commentId)
    })
    // console.log(foundComment);
    res.render('show', {foundComment})
})


//TASK 5-> EDIT THE ALREADY AVAILABLE COMMENTS, To show a edit form
app.get('/comments/:commentId/edit', (req, res)=>{
    let { commentId } = req.params;
    let foundComment = comments.find((comment)=>{
        return comment.id === parseInt(commentId)
    })
    res.render('edit', {foundComment})

})


 

//TASK-6 -> to actually edit in the DB/ARRAY
app.patch('/comments/:commentId', (req,res)=>{
    let { commentId } = req.params;
    let foundComment = comments.find((comment)=>{
        return comment.id === parseInt(commentId)
    })
    let { comment } = req.body;
    foundComment.comment = comment;
    res.redirect('/comments');

})




//TASK-7 -> to actually delete from the DB/ARRAY
app.delete('/comments/:commentId' , (req,res)=>{
    let {commentId} = req.params;
    let newComments = comments.filter((comment)=>{return comment.id != commentId});
    comments = newComments;
    console.log(newComments,'sam');
    res.redirect('/comments');
})


let PORT = 8080;
app.listen(PORT, ()=>{
    console.log(`Server is running on: ${PORT}`)
})