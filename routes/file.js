const express = require("express");
const router = express.Router();
const isAuth = require("../middlewares/isAuth");
const { fileController } = require("../controllers");
const upload = require("../middlewares/upload");

router.post(
  "/upload-file",
  isAuth,
  upload.single("image"),
  fileController.uploadFile
);

module.exports = router;
