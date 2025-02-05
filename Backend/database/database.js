// mysql = require('mysql')
mysql = require('mysql2');

/*
db.on('error', function (err) {
    if (err) {
        console.log('4. Se perdió la conexión con la base de datos. Reintentando...', err);
        db.end();
        handleDisconnect();
    } else {
        console.log('3. Nada. Reintentando...');
    }
});

function handleDisconnect() {

    db.connect(function (err) {
        if (err) {
            console.log('2. Error al conectar a la base de datos:', err);
            db.end();
            setTimeout(handleDisconnect, 50000); // Reintentar la conexión después de 2 segundos
        } else {
            console.log('1. Conexión exitosa a la base de datos');
        }
    });
}

handleDisconnect();
*/


// db.connect(function (error) {
//     if (error) {
//         console.error('Error al intentar conectar:', err);
//         // Puedes programar una nueva tentativa de reconexión después de un cierto intervalo de tiempo
//         setTimeout(reconnect, 2000); // Intentar reconectar después de 2 segundos
//     } else {
//         console.log('Conexion correcta a base de datos.');
//     }
// });

// db.on('error', (err) => {
//     console.error('Error de conexión a la base de datos:', err);
//     // Intentar reconectar o realizar alguna acción de manejo de errores
//     reconnect();
// });

// // Función de reconexión
// function reconnect() {
//     // Realizar los pasos necesarios para intentar restablecer la conexión
//     db.connect((err) => {
//         if (err) {
//             console.error('Error al intentar reconectar:', err);
//             // Puedes programar una nueva tentativa de reconexión después de un cierto intervalo de tiempo
//             setTimeout(reconnect, 2000); // Intentar reconectar después de 2 segundos
//         } else {
//             console.log('Conexión restablecida');
//         }
//     });
// }


// db.connect(function (error) {
//     if (error) {
//         throw error;
//     } else {
//         console.log('Conexion correcta a base de datos.');
//     }
// });

function ejecutarQuery(query) {
    var db = mysql.createConnection({
        host: process.env.HOSTDB,
        user: process.env.USERDB,
        password: process.env.PASSDB,
        database: process.env.DB
    });

    return new Promise(async (resolve, reject) => {
        try {
            db.query(query, function (err, data, fields) {
                if (err) {
                    console.log('CONSULTA ERROR 1', query, err)
                    db.end();
                    reject(err)
                } else {
                    db.end();
                    resolve(data)
                }
            });
        } catch (err) {
            console.log('CONSULTA ERROR 2', query, err)
            db.end();
            reject(err)
        }
    });
}

function ejecutarInsercion(query) {
    return new Promise(async (resolve, reject) => {
        try {
            db.query(query, function (err, data, fields) {
                if (err) {
                    reject(err)
                } else {
                    resolve(true)
                }
            });
        } catch (err) {
            reject(err)
        }
    });
}

module.exports.ejecutarQuery = ejecutarQuery;
module.exports.ejecutarInsercion = ejecutarInsercion;
