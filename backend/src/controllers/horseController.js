import {getHorseUsers, getHorseNullUsers} from "../models/horseModel.js";


export const showHorseUsers = (req, res) => {
    getHorseUsers((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showHorseNullUsers = (req, res) => {
    getHorseNullUsers((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}