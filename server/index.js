const express = require('express');
const bodyPasser = require('body-parser');
const cors = require('cors');

const app = express();

// Middelware
app.use(bodyPasser.json());
app.use(cors());

const posts = require('./routes/api/posts');

app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));