const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("✅ Bot AzoYa berjalan sukses!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server AzoYa aktif di port ${PORT}`);
});add index.js server dummy
