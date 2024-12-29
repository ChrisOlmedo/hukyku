const mongoose = require('mongoose');
require('dotenv').config();

console.log(process.env.DB_CONNECTION);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {});
    console.log('MongoDB conectado correctamente');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    process.exit(1); // Detiene la aplicación en caso de error
  }
};

module.exports = connectDB;