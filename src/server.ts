import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/", async (req, res) => {
    const body = req.body;
    const user = await createUser(body);
    
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user
  })
});

const name:string=10

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
