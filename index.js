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

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json({ limit: "5mb" }))

app.use("/api/toDocx", require("./routes/docx"))

app.listen(PORT, () => {
    console.log("Routing on Port: ", PORT)
});