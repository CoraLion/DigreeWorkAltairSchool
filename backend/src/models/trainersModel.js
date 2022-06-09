import db from "../config/database.js";

export const getTrainers = (result) => {
    db.query("select w.idworkers, w.firstnameworker, w.secondnameworker, w.threenameworker, w.img, DATE_FORMAT(w.birthday, '%d-%m-%Y') as birthday, w.phone, s.name, s.idstaff, w.staffid from workers as w inner join staff as s on w.staffid=s.idstaff;", (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const  getTrainerSchedule = (result) => {
    db.query("select w.firstnameworker, w.threenameworker, us.firstnameuser, us.threenameuser, tis.timeover, tis.timestart, ts.name, dw.nameday from workers as w inner join service as ser on ser.workid=w.idworkers inner join users as us on us.idusers = ser.usid inner join schedule as sch on us.idusers = sch.usid inner join typesschedule as ts on ts.idtypessc=sch.typesid inner join timeschedule as tis on tis.idtime = sch.timeid inner join dayofweek as dw on dw.idday=sch.dayid;", (err, results) => {
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}