const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

// Endpoint pour gérer la soumission du formulaire
app.post('/envoyer-email', (req, res) => {
  const { nom, prenom, societe, email, phone, message } = req.body;

  // Configurer le transporteur SMTP pour l'envoi du courrier électronique
  const transporteur = nodemailer.createTransport({
    service: 'ssl0.ovh.net',
    auth: {
      user: 'contact@mondistri.re',
      pass: '123456',
    },
  });

  // Options du courrier électronique
  const options = {
    from: 'contact@mondistri.re',
    to: 'info@mondistri.re',
    subject: 'Nouveau message de formulaire de contact',
    text: `
      Nom: ${nom}
      Prenom: ${prenom}
      Societe: ${societe}
      Email: ${email}
      Numero: ${phone}
      Message: ${message}
    `,
  };

  // Envoyer le courrier électronique
  transporteur.sendMail(options, (erreur, info) => {
    if (erreur) {
      console.error(erreur);
      res.status(500).send('Erreur lors de l\'envoi du courrier électronique');
    } else {
      console.log('Courrier électronique envoyé :', info.response);
      res.send('Courrier électronique envoyé avec succès');
    }
  });
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
