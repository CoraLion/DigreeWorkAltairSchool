import mysql from "mysql2";

const db = mysql.createConnection({
    host: 'localhost',
    port: '3307',
    user: 'root',
    password: 'ilikejean21',
    database: 'horsealtair'
});

db.connect(function (err) {
    if(err) {
        return console.error("Ошибка" + err.message);
    } else {
        console.log("Подключение успешно!")
    }
})

export default db;