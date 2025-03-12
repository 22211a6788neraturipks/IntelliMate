import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_Vus7wUf8bzko@ep-icy-night-a88z9av2-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
  },
});
