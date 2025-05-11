export default async function handler(req, res) {
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

  res.status(200).json({ status: 'Scheduled' });
}