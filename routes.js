
import express from "express";

const router = express.Router();



router.post("/submit",(req,res)=>{
  console.log(req.body);
  return res.status(200).send("Form Submitted successfully")
})
export default router;
