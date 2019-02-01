const express = require('express');
const bodyParser = require('body-parser')
const app = express();
require('dotenv').config();
const ctrl = require('./controller')
const massive = require('massive');


app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance)
}).catch(err => console.log(err));

//endpoints:
const baseurl = '/api/houses';
app.get( `${baseurl}`, ctrl.getHouses )







const SERVERPORT = process.env.SERVERPORT || 4000
app.listen(SERVERPORT, () => console.log(`${SERVERPORT}: tossin lightning!!`))