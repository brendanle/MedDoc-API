const express = require('express');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
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
    const id = uuidv4();

    const newCustomerData = {
        id: id,
        name: name,
        age: age
    };

    customerData.push(newCustomerData);
    fs.writeFileSync('customer-data.json', JSON.stringify(customerData));

    res.status(201).json({
        message: 'Customer data created successfully',
        customerData: newCustomerData
    });

});