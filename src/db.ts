import { Sequelize } from "sequelize";

export default new Sequelize(
  process.env.DB_NAME || "db",
  process.env.DB_USER || "user",
  process.env.DB_PASSWORD || "password",
  {
    dialect: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: +(process.env.DB_PORT || 5432),
  }
);
