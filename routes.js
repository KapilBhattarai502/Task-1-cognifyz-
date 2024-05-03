import exp from "constants";
import express from "express";

const router=express.Router();


router.post("/submit",(req,res)=>{
    
    return res.send("Form Submitted successfully");
});
export default router;