const express = require("express");

const router = express.Router();

const UploadController = require("../controllers/UploadController");

const upload = require("../config/multer");

router.post("/", upload.single("arquivo"), UploadController.upload);

module.exports = router;
