const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('');
});

baseRouter.post('/add', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    const result = num1 + num2;

    res.json({ "result": result });
});


baseRouter.post('/subtract', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;

    const result = num1 - num2;

    res.json({ "result": result });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});
