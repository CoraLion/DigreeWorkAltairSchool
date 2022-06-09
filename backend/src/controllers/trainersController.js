import {getTrainers, getTrainerSchedule} from "../models/trainersModel.js";

export const showTrainers = (req, res) => {
    getTrainers((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showTrainerName = (req, res) => {
    getTrainerSchedule((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}