import Fastify from "fastify";
import type { HealthResponseDto } from "@deepertr/types";
import { adminPageData, archiveData, homePageData, memberProfileData } from "./data";

const app = Fastify({ logger: true });
const port = Number(process.env.PORT ?? 4000);
const host = process.env.HOST ?? "0.0.0.0";

app.get<{ Reply: HealthResponseDto }>("/health", async () => ({ status: "ok", uptime: process.uptime() }));
app.get("/api/home", async () => homePageData);
app.get("/api/archive", async () => archiveData);
app.get("/api/member/profile", async () => memberProfileData);
app.get("/api/admin/dashboard", async () => adminPageData);

const start = async () => {
  try {
    await app.listen({ port, host });
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

void start();
