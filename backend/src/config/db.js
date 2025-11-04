import dotenv from "dotenv";
import { Sequelize } from "sequelize";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const {
  DB_DIALECT = "sqlite",
  DB_STORAGE = path.join(__dirname, "../../data.sqlite"),
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_USER,
  DB_PASS,
} = process.env;

const sequelize = new Sequelize(DB_NAME || "", DB_USER || "", DB_PASS || "", {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
  storage: DB_DIALECT === "sqlite" ? DB_STORAGE : undefined,
  logging: false,
});

// Models registration
import initModels from "../models/index.js";
const models = initModels(sequelize);

// CLI: node src/config/db.js --sync [--force]
if (process.argv.includes("--sync")) {
  const force = process.argv.includes("--force");
  sequelize
    .sync({ force })
    .then(() => {
      console.log(`DB synced (force=${force})`);
      process.exit(0);
    })
    .catch((e) => {
      console.error(e);
      process.exit(1);
    });
}

export { sequelize, models };
