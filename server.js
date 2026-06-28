const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.get("/", (_req, res) => {
  res.send("Backend is running");
});

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "openshift-backend",
    message: "Hello from OpenShift CRC"
  });
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});