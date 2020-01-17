const express = require('express');

const app = express();

app.use(express.json()); // body with json format

// HTTP Methods: GET, POST, PUT, DELETE

// Params types:
// Query params: req.query (filters, orders, pagination, ...) - visible on URLs
// Route params: request.params (identify resource on update or delete)
// Body: request.body (Data for resource creation or update)

app.get('/', (request, response) => {
    return response.json({
        message: "Hello World! :D"
    });
});

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello World' });
});

app.listen(3333);