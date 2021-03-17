'use strict';
const express = require('express');
// import express from 'express';
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/hello', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/catinfo', (req, res) => {
  const cat = {
    name: 'Seppo',
    age: 6,
    weight: 5,
  };
  res.json(cat);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
