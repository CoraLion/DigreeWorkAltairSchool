import db from "../config/database.js";

export const getPrices = (result) => {
    db.query("SELECT pr.nameofprice, pr.price FROM prices as pr", (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}