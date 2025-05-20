const express = require("express");
const router = express.Router();
const multer = require("multer");
const { uploadFile, downloadFile } = require("../controllers/fileController");

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/upload", upload.single("file"), uploadFile);
router.get("/image/:fileId", downloadFile);

module.exports = router;
