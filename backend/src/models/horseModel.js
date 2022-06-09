import db from "../config/database.js";

export const getHorseUsers = (result) => {
    db.query("select us.img, h.namehorse, h.breed, h.age, h.classh, h.sex, h.img_horse, us.firstnameuser, us.secondnameuser, us.threenameuser, us.raiting from users as us inner join horse as h on h.idhorse=us.idhorse ORDER BY us.raiting desc;", (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const getHorseNullUsers = (result) => {
    db.query("SELECT h.namehorse, h.breed, h.age, h.classh, h.sex, h.img_horse FROM horse as h WHERE NOT EXISTS  (SELECT * FROM users as us WHERE h.idhorse = us.idhorse) order by h.namehorse;", (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}