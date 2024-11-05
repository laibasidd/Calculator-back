require("dotenv").config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const calculatorRoutes = require('./routes/calculatorRoutes');
const bmiRoutes = require('./routes/bmiRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const loanRoutes = require('./routes/loanRoutes');
const salaryRoutes = require('./routes/salaryRoutes');
const ageRoutes = require('./routes/ageRoutes');
const scientificCalculatorRoutes = require('./routes/scientificCalculatorRoutes');
const inflationCalculatorRoutes = require('./routes/inflationCalculatorRoutes');
const gpaRoutes = require('./routes/gpaRoutes');
const emailRoutes = require("./routes/emailRoute");


const app = express();
const port = process.env.PORT || 5000;


app.use(cors());

app.use(express.json());


app.use('/api/calculator', calculatorRoutes);
app.use('/api/bmi', bmiRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/loan', loanRoutes);
app.use('/api/salary', salaryRoutes);
app.use('/api/age', ageRoutes);
app.use('/api/scientific-calculator', scientificCalculatorRoutes);
app.use('/api', inflationCalculatorRoutes);
app.use('/api/gpa', gpaRoutes);
app.use("/api", emailRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Calculator API!');
});

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});




