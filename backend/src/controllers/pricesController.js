import {getPrices} from "../models/pricesModel.js";

export const showPrices = (req, res) => {
    getPrices((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}