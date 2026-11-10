import express from 'express';

const app = express();

const trains = [
  { id: 1, code: 'RABe 501 / INTERNATIONAL', name: 'Giruno', description: 'L’horizon européen. Une silhouette élancée, pensée pour traverser les Alpes et les frontières.', image: '/images/giruno-studio.webp' },
  { id: 2, code: 'RABDe 500 / GRANDES LIGNES', name: 'ICN', description: 'L’intelligence de la courbe. Un caractère singulier. Une technologie pendulaire au service du mouvement.', image: '/images/icn-studio.webp' },
  { id: 3, code: 'RABe 502 / GRANDES LIGNES', name: 'FV-Dosto', description: 'Une autre dimension. Deux niveaux pour voir le quotidien et les grandes lignes en grand.', image: '/images/dosto-studio.webp' }
];

app.get('/api/items', (_req, res) => res.json(trains));

app.listen(3001, () => console.log('API sur http://localhost:3001/api/items'));
