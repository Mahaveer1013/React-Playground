const express = require('express');
const exec = require('child_process').exec;
const path = require('path');
const cors = require('cors'); // Import the CORS package

const app = express();
app.use(express.json());

// Enable CORS for all routes (you can customize this as needed)
app.use(cors());

// Directory for storing installed packages in the frontend (parent directory)
const INSTALL_DIR = path.join(__dirname, '..');  // Install in the frontend folder (parent)


// Endpoint to install packages
app.post('/api/install-package', (req, res) => {
  const { packageName } = req.body;

  if (!packageName) {
    return res.status(400).send('Package name is required');
  }

  // Adjust npm install command to install in the frontend folder
  exec(`npm install ${packageName} --prefix ${INSTALL_DIR}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${stderr}`);
      return res.status(500).send(stderr);
    }
    console.log(`Installed: ${stdout}`);
    res.status(200).send(`Package ${packageName} installed successfully.`);
  });
});

app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});
