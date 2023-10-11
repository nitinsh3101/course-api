const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const moment = require('moment');

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


app.get('/api/v1/courses', (req, res) => {
    res.json({
        courses: courses,
        infraDetails: {
            podIp: process.env.POD_IP,
            podName: process.env.POD_NAME,
            dateTime: moment().format('MMMM Do YYYY, h:mm:ss a'),
            clusterInfo: process.env.CLUSTER_NAME,
            nodeName: process.env.NODE_NAME,
            workerNodeIp: process.env.NODE_IP
        }});
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));