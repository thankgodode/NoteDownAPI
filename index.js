const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express();
const PORT = process.env.PORT || 5000

app.use(cors({
  origin: function (origin, callback) {
    // Allow mobile apps (origin = null)
    if (!origin) return callback(null, true);

    // Allow browser dev environment
    if (origin.startsWith("http://localhost")) return callback(null, true);

    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true
}));

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true, limit: "100mb" }));

app.use("/api/toDocx", require("./routes/docx"))

app.get("/", (req, res) =>{
    res.status(200).json({message:"Backend working...!"})
})

app.listen(PORT, () => {
    console.log("Routing on Port: ", PORT)
});