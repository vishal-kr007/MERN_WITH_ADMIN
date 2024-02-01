
require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./utils/mongoose');
const errorMiddleware = require('./middlewares/error-middleware');
const contactRoute = require('./router/contact-router')
const cors = require('cors');


const corsOptions = {
    origin: 'http://localhost:5173/',
    method: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true
}

app.use(cors(corsOptions));

app.use(express.json());

const authRoute = require('./router/auth-router');

app.use('/api/auth', authRoute);
app.use('/api/form', contactRoute);

app.use(errorMiddleware);

const PORT = process.env.PORT;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running fine on ${PORT}`)
    });
})

