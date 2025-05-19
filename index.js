const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bookRoutes = require("./routes/bookRoutes")

app.use(express.json());

app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});