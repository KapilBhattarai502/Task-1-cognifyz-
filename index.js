
import express from "express";
import formRoutes from "./routes.js";



const app =express();
app.use(express.json());




app.set('view engine','ejs');//setting ejs as the view engine 
app.set('views','./views')

//rendering the form
app.get('/',(req,res)=>{
    res.render('index')
})
//handle form submission 
app.use(formRoutes);


const port=3500;

app.listen(port,()=>{
    console.log(`App is listening to port ${port}`);
})