import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

// Serve static files from client directory
app.use(express.static(path.join(__dirname, '../client')));
app.use('/src', express.static(path.join(__dirname, '../client/src')));

// Handle SPA routing - serve index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});

console.log('Static file server started');