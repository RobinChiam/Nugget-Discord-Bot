const express = require("express")
const app = express()
app.get("/", (req, res) => {
  res.send("hello Nugget!")
})

app.listen(3000, () => {
 console.log("Nugget Connected!")
})