const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const colalineController = require('./controller/colaline')
    app.use(cors());
    app.use(bodyParser.json());
    app.get('/', colalineController.getDetailProfile);
    app.post('/save_profile', colalineController.saveDetailProfile);
    app.post('/calculator_gpa', colalineController.getGpa);
    app.listen('4000',() => {
    console.log('start port 4000');
    })

