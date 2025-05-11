const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/schedule', async (req, res) => {
    const { url, message, delay } = req.body;
    setTimeout(async () => {
        try {
            await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: `From Timothy Emaas's Slack Bot: ${message}` })
            });
            console.log('Message sent to Slack', message, delay);
        } catch (err) {
            console.error('Slack send error:', err);
        }
    }, delay);
});

app.listen(PORT, () => {
  console.log(`Slack Scheduler API running on http://localhost:${PORT}`);
});