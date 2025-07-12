const express = require("express");
const path = require("path");

const app = express();

// Railway o cualquier hosting asigna el puerto con process.env.PORT
const PORT = process.env.PORT || 8080;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, "public")));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
