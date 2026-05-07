======English=====

Energyner
Email: webmaster@energyner.net
________________________________________
	api_render

 API Render

Professional modular API developed with Node.js and Express, designed for deployment in cloud environments such as [Render](https://render.com?utm_source=chatgpt.com).
The project integrates a scalable architecture based on routes, controllers, services, and calculation cores, including automated testing with Postman, Newman, OpenAPI/Swagger, and JSON Schema validation.

---

 Project Description

API Render is a modular backend platform created to demonstrate the development, testing, documentation, and deployment of professional APIs in modern cloud environments.

The system currently includes three independent APIs:

* Energy Consumption API
* Carbon Footprint API
* Solar Production API

Each API follows a professional layered architecture:

Route
  ↓
Controller
  ↓
Service
  ↓
Core Calculation
  ↓
JSON Response

The project also integrates:

* OpenAPI / Swagger documentation
* Postman collections
* Newman automated testing
* JSON Schema validation
* HTML reports
* Frontend test interfaces
* Health check monitoring
* Cloud deployment support
---
 Technologies

* Node.js
* Express.js
* JavaScript ES Modules (.mjs)
* OpenAPI / Swagger
* Postman
* Newman
* JSON Schema
* HTML / CSS / JavaScript
* Render Cloud Platform
---

 Project Structure

api-render/
│
├── api/
│   ├── controllers/
│   ├── services/
│   └── v1/
│       ├── routes/
│       └── swagger.yaml
│
├── core/
│   └── calculations/
│
├── public/
│   ├── consumo/
│   ├── footprint/
│   ├── solar/
│   └── assets/
│
├── postman/
│   └── v1/
│       ├── collection.json
│       ├── environment.local.json
│       └── environment.production.json
│
├── tests/
│   ├── reports/
│   ├── schema.json
│   └── scripts/
│
├── src/
│   └── server/
│       └── index.mjs
│
├── package.json
└── README.md

---

 APIs Included

 1. Energy Consumption API

Calculates electrical energy consumption based on power and usage hours.

 Endpoint

POST /api/v1/consumo

 Example Request

{
  "potencia": 350,
  "horas": 1
}

---
 2. Carbon Footprint API

Calculates household carbon footprint based on electricity, gas, water, transportation, and consumption variables.

 Endpoint

POST /api/v1/footprint

---
 3. Solar Production API

Calculates solar energy production using area, irradiation, and efficiency.

 Endpoint

POST /api/v1/solar

 Example Request


{
  "area": 20,
  "irradiacion": 500,
  "eficiencia": 0.8
}

---
 Installation

Clone the repository:

git clone https://github.com/energyner/api-render.git

Enter the project directory:

cd api-render

Install dependencies:

npm install

---

 Run the Project

 Development Mode

npm run dev

 Production Mode

npm start

---

 Local URLs

 Health Check

http://localhost:3000/health

 Frontend Interfaces

http://localhost:3000/consumo/consumo.html
http://localhost:3000/footprint/footprint.html
http://localhost:3000/solar/solar.html

---

 OpenAPI / Swagger

The API documentation is located at:

api/v1/swagger.yaml

Validate the specification:

npm run validate:openapi

---
 Automated Testing

The project includes automated API testing using Postman and Newman.

 Local Testing

npm run test:local

 Production Testing

npm run test:production

 Generate HTML Report

npm run test:report

---
 Newman HTML Report

After running the tests, the report will be available at:

tests/reports/newman-report.html

or directly in the browser:

http://localhost:3000/reports/newman-report.html

---
 Deployment on Render

This project is fully compatible with [Render](https://render.com?utm_source=chatgpt.com).

 Recommended Configuration

 Build Command

npm install

 Start Command

npm start
---
 Environment Requirements

* Node.js >= 18
* npm >= 9

---
 Features

* Modular architecture
* REST API versioning
* JSON responses
* OpenAPI documentation
* Automated testing
* JSON Schema validation
* Health check monitoring
* Static frontend integration
* Cloud deployment ready
* CI/CD ready

---

 Testing Workflow

Swagger
   ↓
Postman Collection
   ↓
Environment Configuration
   ↓
API Requests
   ↓
Schema Validation
   ↓
Newman Execution
   ↓
HTML Dashboard Report

---

 Author: Energyner

---

 License

MIT License
