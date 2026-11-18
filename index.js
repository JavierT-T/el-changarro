const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Sirve todos tus archivos HTML y tu carpeta css automáticamente
app.use(express.static(__dirname));

// Página principal que abrirá Render al entrar a tu link
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Login.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});