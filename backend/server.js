const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Enable cors on frontent
app.use(cors({
    origin: 'http://localhost:5173'
}));

// Create uploads folder
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Setup multer for file handling
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({storage});

app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).send('No file uploaded.');
  res.status(200).json({
    message: 'File uploaded successfully.',
    filename: req.file.filename,
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://<YOUR-BACKEND-IP>:${PORT}`);
});