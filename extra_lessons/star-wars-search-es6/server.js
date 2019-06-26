const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const characters = [
  {
    routeName: 'yoda',
    name: 'Yoda',
    role: 'Jedi Master',
    age: 900,
    forcePoints: 2000,
  },

  {
    routeName: 'darthmaul',
    name: 'Darth Maul',
    role: 'Sith Lord',
    age: 200,
    forcePoints: 1200,
  },

  {
    routeName: 'obiwankenobi',
    name: 'Obi Wan Kenobi',
    role: 'Jedi Knight',
    age: 60,
    forcePoints: 1350,
  },
];

app.get('/api/characters', (req, res) => {
  res.send(characters);
});

app.get('/api/characters/:character', (req, res) => {
  const { character } = req.params;
  const characterInfo = characters.find(char => char.routeName === character);

  if (characterInfo) {
    res.json(characterInfo);
  } else {
    res.json([false]);
  }
});

app.post('/api/characters/new', (req, res) => {
  characters.push(req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`); // eslint-disable-line
});
