// Server Side Rendering React
import express from 'express';
import React from 'react';
import fs from 'fs';
import { renderToString } from 'react-dom/server';
import App from './App';

const app = express();

app.use(express.static('./public'));

const robots = JSON.parse(fs.readFileSync('./public/robots.json', 'utf8'));
const RobofriendsApp = React.createElement(App);
app.get('/', (req, res) => {
  response.render('index', {
    content: renderToString(RobofriendsApp({data: robots}))
  });
});
