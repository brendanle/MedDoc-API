# MedDoc API
The MedDoc API is designed to manage and track comprehensive patient data, including essential information such as the patient's date of birth, contact details, and medical records. The API supports HTTP methods such as GET, POST, DELETE, and PATCH for retrieving, creating, deleting and updating patient data. It also incorporates the UUID module to generate unique identifiers for each patient.

## Deployment
To deploy this project, install the required modules

```
npm i express
npm i uuid
```

Locate the folder and open the index.html file. You may run the following command after:
```
node server.js
```

![App Screenshot](https://cdn.discordapp.com/attachments/1102372755187445860/1114325783327019089/Screenshot_2023-06-02_at_6.52.46_PM.png)

![App Screenshot](https://cdn.discordapp.com/attachments/1102372755187445860/1114323358729908284/Screenshot_2023-06-02_at_6.43.08_PM.png)

## To-Do:
- Deploy *PUT* and ~~PATCH~~ methods
- Enhance safety measures through the use of data privatization for the API
- Include further details for patients
- Include an administrative dashboard to allow seamless access to the methods
- function to get request upon clicking on "GET"

## Completed:
- ~~GET method wip to display uuid, fname, lname, phone_number~~
- ~~Include a drop-down menu for user to select method of choice~~
- ~~Fix bug where upon refreshing the page, popup is shown saying "Failed to fetch patient data"~~
- ~~Rework logic behind PATCH method~~