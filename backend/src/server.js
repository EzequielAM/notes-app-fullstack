import app from "./app.js";
import dotenv from "dotenv";
import { sequelize } from "./config/db.js";

dotenv.config();
const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connected");
    app.listen(PORT, () => console.log(`Backend listening on :${PORT}`));
  } catch (e) {
    console.error("DB connection error", e);
    process.exit(1);
  }
})();
