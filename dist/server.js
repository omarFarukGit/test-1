
      import { createRequire } from 'module';
      const require = createRequire(import.meta.url);
    

// src/server.ts
import express from "express";
var app = express();
var port = 3e3;
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
  });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=server.js.map