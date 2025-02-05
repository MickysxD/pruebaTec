const express = require('express');
const cors = require('cors');
// bodyParser = require('body-parser')
require('dotenv').config();
var corsOptions = { origin: true, optionsSuccessStatus: 200 };

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(cors());

const proyectoRouter = require('./routes/proyectoRouter');
const rubroRouter = require('./routes/rubroRouter');
const donacionRouter = require('./routes/donacionRouter');

app.use('/proyecto', proyectoRouter);
app.use('/rubro', rubroRouter);
app.use('/donacion', donacionRouter);


var server = {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'localhost',
};

console.log(server)
app.listen(server.port, server.host, () => console.log(`Server iniciado en el puerto: ${server.port}`));


/*

// Configuración de la base de datos
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('Error al conectar a MySQL:', err);
        process.exit(1);
    }
    console.log('Conectado a MySQL');
});

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('API funcionando correctamente');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

*/