const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());    // for parsing application/json 

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

const customerData = [];

app.get('/customer-data', (req, res) => {
    res.status(200).json(customerData);
});

app.post('/customer-data', (req, res) => {

    const { name, age } = req.body;

    const newCustomerData = {
        name: name,
        age: age
    };

    customerData.push(newCustomerData);

    res.status(201).json({
        message: 'Customer data created successfully',
        customerData: newCustomerData
    });

});