import express from "express";



const app =express();
app.set('view engine','ejs')
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

//homepage
app.get('/',(req,res)=>{
    res.render('homepage')
})
app.get('/login',(req,res)=>{
    res.render('login')
})


const PORT=process.env.PORT||2000

app.listen(PORT,()=>{
console.log(`server is up on ${PORT}...`)
})