import express from "express";
import {showTrainerName, showTrainers} from "../controllers/trainersController.js";
import {showHorseUsers, showHorseNullUsers} from "../controllers/horseController.js";
import {showPrices} from "../controllers/pricesController.js";


const router = express.Router();

router.get('/trainer', showTrainers);
router.get('/horseusers', showHorseUsers);
router.get('/horsenullusers', showHorseNullUsers);
router.get('/trainersname',  showTrainerName);
router.get('/pricesname', showPrices);

export default router;