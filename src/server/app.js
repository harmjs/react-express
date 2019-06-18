import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.resolve(__dirname, 'static')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'static', 'index.html'));
})

app.listen(3000, function(){
  console.log('app running on port 3000');
})