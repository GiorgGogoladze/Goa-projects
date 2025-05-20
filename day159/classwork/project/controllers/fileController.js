const { Readable } = require("stream");
const mongoose = require("mongoose");
const File = require("../models/fileModel");

let bucket;

const initBucket = (conn) => {
  bucket = new mongoose.mongo.GridFSBucket(conn.db);
};

const uploadFile = async (req, res) => {
  const { file } = req;
  const { fieldname, originalname, mimetype, buffer } = file;

  const newFile = new File({
    filename: originalname,
    contentType: mimetype,
    length: buffer.length,
  });

  try {
    const uploadStream = bucket.openUploadStream(fieldname);
    const readBuffer = new Readable();
    readBuffer.push(buffer);
    readBuffer.push(null);

    await new Promise((resolve, reject) => {
      readBuffer
        .pipe(uploadStream)
        .on("finish", () => resolve())
        .on("error", reject);
    });

    newFile.id = uploadStream.id;
    const savedFile = await newFile.save();

    if (!savedFile) return res.status(500).send("File not saved");

    res.status(200).send({ file: savedFile, message: "File uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error uploading file");
  }
};

const downloadFile = (req, res) => {
  const { fileId } = req.params;

  const downloadStream = bucket.openDownloadStream(new mongoose.Types.ObjectId(fileId));

  downloadStream.on("file", (file) => {
    res.set("Content-Type", file.contentType);
  });

  downloadStream.pipe(res);
};

module.exports = {
  initBucket,
  uploadFile,
  downloadFile,
};
