# Jobs API Project
This is a RESTful API built to track job applications and their status. The application was built using Node.js, MongoDB, and various packages to provide additional functionality and security.

## Features
The following are the features included in the API:

Authentication: Users are authenticated using JSON Web Tokens (JWT). Users can register and login to access their applications data.

Authorization: Only authenticated users can create, update, and delete job applications associated with their account.

Job Application Management: Users can create, read, update, and delete job applications. Users can track their job application status (applied, under review, interviewed, etc.) and add notes about the application.

API Documentation: The API has been documented using Swagger. This provides an interactive user interface that allows users to view the API endpoints, methods, and parameters.

Security: The API has been secured using various packages, including Helmet, CORS, bcryptjs, express-rate-limit, rate-limiter, and xss-clean.

### Technologies Used
The following technologies were used to build the API:

Node.js
MongoDB
bcryptjs
cors
express
express-async-errors
express-rate-limit
helmet
http-status-codes
jsonwebtoken
mongoose
rate-limiter
swagger-ui-express
xss-clean
yamljs
Getting Started
To use this API, you will need to have Node.js and MongoDB installed on your local machine.


Clone the repository:
```bash
git clone https://github.com/Olumarshal/jobs-api.git
```
Navigate to the project directory and install dependencies:

```bash
cd jobs-api && npm install
```
Create a .env file and add the following variables:

makefile
Copy code
PORT=<port-number>
MONGO_URI=<mongodb-uri>
JWT_SECRET=<jwt-secret>
RATE_LIMIT=<rate-limit>
Start the server:

```bash
npm start
```
Open your browser and navigate to http://localhost:<port-number>/api-docs to view the API documentation.

### Conclusion
This API provides an easy and efficient way to track job applications and their status. With its security features, users can trust that their data is secure and easily accessible.
