import express from "express";
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoomAvailability } from "../controllers/roomCont.js";
import { verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router()

// add
router.post('/:hotelId',verifyAdmin, createRoom)


// Update

router.put('/:id',verifyAdmin, updateRoomAvailability)

//  Delete

router.delete('/:id/:hotelid',verifyAdmin, deleteRoom)


//  Get 
router.get('/:id', getRoom)


//  Get All

router.get('/',getAllRoom)

export default router