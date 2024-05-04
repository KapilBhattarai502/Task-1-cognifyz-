
import express from "express";
import formRoutes from "./routes.js";
import { fileURLToPath } from 'url';
import path from "path";
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);





const app =express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));//this is basically to decode the data send through html form 





// app.set('view engine','ejs');//setting ejs as the view engine 
// app.set('views','./views')

//rendering the form
app.get('/',(req,res)=>{
    res.sendFile(`public/index.html`,{root:__dirname});
    

   
})
//handle form submission 
app.use(formRoutes);




const port=3500;

app.listen(port,()=>{
    console.log(`App is listening to port ${port}`);
})