const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());

const SECRET_KEY = 'mySecretKey';

const user = {
  id: 1,
  username: 'admin',
  password: '1234'
};

app.get('/', (req, res) => res.send('Server is alive!'));

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

function verifyToken(req, res, next) {
  console.log('verifyToken called');

  const bearerHeader = req.headers['authorization'];
  if (bearerHeader) {
    const token = bearerHeader.split(' ')[1];
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) return res.status(403).json({ error: 'Invalid token' });
      req.user = decoded;
      next();
    });
  } else {
    res.status(403).json({ error: 'Token not provided' });
  }
}

app.get('/protected', verifyToken, (req, res) => {
  res.json({
    message: 'You accessed a protected route!',
    user: req.user
  });
});

app.use((req, res) => {
  res.status(404).send(`Route ${req.method} ${req.originalUrl} not found`);
});

app.listen(3001, () => console.log('Server running at port 3001'));
