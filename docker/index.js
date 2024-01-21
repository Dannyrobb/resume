const app = require("express")();

app.get("/", (req, res) => {
  res.json({ message: "dockerrrr" });
});
app.listen(3000, () => {
  console.log("listening on 3000");
});
