import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/userCont.js";
import { verifyUser } from "../utils/verifyToken.js";

const router = express.Router()

// router.get("/checkauth",verifyToken,(req,res,next)=>{
//     res.send("Hello User you are logged in")
// });


router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
    res.send("Hello User you are logged in you can update")
});

// router.get("/checkuser/:id",verifyAdmin,(req,res,next)=>{
//     res.send("Hello User you are logged in you can update")
// });
// Update

router.put('/:id',verifyUser, updateUser)

//  Delete

router.delete('/:id',verifyUser, deleteUser)


//  Get 
router.get('/:id',verifyUser, getUser)


//  Get All

router.get('/',getUsers)

export default router