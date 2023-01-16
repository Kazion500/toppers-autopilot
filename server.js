import { app } from "./app.js";
const port = process.env.PORT || 5100;

const startServer = async () => {
  app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
  });
};

startServer();
