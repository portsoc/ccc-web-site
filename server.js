const express = require('express');
const app = express();

app.use(express.static(__dirname));

const likeCounts = {
  a1: 10,
  a2: 3,
}

app.get('/api/likes/:id', (req, res) => {
  res.json(likeCounts[req.params.id] || 0);
})

app.post('/api/likes/:id', (req, res) => {
  const current = likeCounts[req.params.id] || 0;
  likeCounts[req.params.id] = current + 1;
  res.sendStatus(200);
  console.log('increased like count for ' + req.params.id);
})

app.listen(process.env.PORT || 8080, () => {
  console.log('server started');
});
