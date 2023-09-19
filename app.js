const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3030;

// Where we will keep courses
let courses = [
    {cid: 1, name: 'Software Engineering'},
    {cid: 2, name: 'Operating System'},
    {cid: 3, name: 'Java Programming'}
    ];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/courses', (req, res) => {
    res.json({
        courses: courses,
        infraDetails: {
            podIp: 'podIp',
            dateTime: 'dateTime',
            clusterInfo: 'clusterInfo',
            workerNodeIp: 'workerNodIp'
        }});
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));