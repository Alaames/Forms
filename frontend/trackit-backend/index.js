const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/submit-all', (req, res) => {
  const { inflow, outflow, expense, description, revenue, kpiGoal } = req.body;

  console.log('Received full data:', {
    inflow,
    outflow,
    expense,
    description,
    revenue,
    kpiGoal,
  });

  // Here, you can process and store the data as needed.
  res.status(200).send('All data received successfully!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

