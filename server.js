const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = 5500;

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

const patientData = [];

app.get('/patient-data', (req, res) => {
    res.status(200).json(patientData);
});

app.post('/patient-data', (req, res) => {
    const { fname, mname, lname, age, phone_number, address, birth_date, weight_lbs, height_cm, notes } = req.body;
    const id = uuidv4();

    const newPatientData = {
        id: id,
        fname: fname,
        mname: mname,
        lname: lname,
        age: age,
        phone_number: phone_number,
        address: address,
        birth_date: birth_date,
        weight_lbs: weight_lbs,
        height_cm: height_cm,
        notes: notes
    };

    patientData.push(newPatientData);

    res.status(201).json({
        message: 'Patient data created successfully',
        patientData: newPatientData
    });
});

app.delete('/patient-data/:id', (req, res) => {
    const { id } = req.params;

    const patientIndex = patientData.findIndex(patient => patient.id === id);

    if (patientIndex === -1) {
        return res.status(404).json({
            message: 'Patient not found'
        });
    }

    patientData.splice(patientIndex, 1);

    res.status(200).json({
        message: 'Patient deleted successfully'
    });
});