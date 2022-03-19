const connect = require("./src/configs/db");

const app = require("./src/index");

const PORT = process.env.PORT || 2345;

app.listen(PORT, async () => {
  await connect();
  console.log("listening on port 2345");
});
