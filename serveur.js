const express = require('express');

const app = express();
const PORT = 3000;

// route principale
app.get('/', (req, res) => {
  res.send('Serveur calculator-app en marche');
});

// route webhook
app.post('/webhook', (req, res) => {
  console.log('Webhook reçu');
  res.send('OK');
});

// démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});