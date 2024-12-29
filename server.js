const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' });
const connectDB = require('./config/db.js');

const app = express();

connectDB();


const allowedOrigins = ['https://unservicio.com', 'http://localhost:5173']; // Lista de orígenes permitidos

// Configuración de CORS
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      // Permite la solicitud si el origen está en la lista o no tiene origen (e.g., herramientas locales)
      callback(null, true);
    } else {
      // Bloquea la solicitud si el origen no está permitido
      callback(new Error('No permitido por CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
};

app.use(cors(corsOptions)); // Aplica el middleware de CORS
app.use(express.json());

app.get('/', (req, res) => {
  res.send('This is the backend');
})

app.get('/api/test', (req, res) => {
  console.log('Solicitud recibida en /api/test');
  res.json({ message: 'Hola frontend, este es un mensaje desde el Backend' });
});

const PORT = process.env.PORT || 3000;
// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});


