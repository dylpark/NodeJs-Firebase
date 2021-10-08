// Dylan Park, 2021.
// Node.js w/Firebase Tutorial.

'user strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const studentRoutes = require('./routes/student-routes');

const app = express();

const {Storage} = require('@google-cloud/storage');
const storage = new Storage();
async function listBuckets() {
  try {
    const results = await storage.getBuckets();

    const [buckets] = results;

    console.log('Buckets:');
    buckets.forEach(bucket => {
      console.log(bucket.name);
    });
  } catch (err) {
    console.error('ERROR:', err);
  }
}
listBuckets();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api', studentRoutes.routes);

app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));