Course Information Management API

Setup :
1. npm install
2. npm start (application run on port 3030)

Environment variables to set :
1. POD_IP
2. CLUSTER_NAME
3. NODE_IP

APIs available
1. GET /courses
    
    Response example :
    {
        "courses":
            [
                {"cid":1,"name":"Software Engineering"},
                {"cid":2,"name":"Operating System"},
                {"cid":3,"name":"Java Programming"}
            ],
        "infraDetails":
            {
                "podIp":"1.1.1.1",
                "dateTime":"September 19th 2023, 9:20:05 am",
                "clusterInfo":"MyCluster",
                "nodeIp":"2.2.2.2"
            }
    }