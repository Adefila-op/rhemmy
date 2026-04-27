import fs from "fs";
import path from "path";
import { createServer as createViteServer } from "vite";
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

async function startServer() {
  if (process.env.NODE_ENV === "development") {
    // Development mode with Vite HMR
    const vite = await createViteServer({
      server: { middlewareMode: true },
    });
    app.use(vite.middlewares);
  } else {
    // Production mode - serve pre-built files
    const distPath = path.join(__dirname, "dist", "client");
    app.use(express.static(distPath));
  }

  // SSR handler for all routes
  app.use("*", async (req, res) => {
    try {
      let html;
      if (process.env.NODE_ENV === "development") {
        const vite = await createViteServer();
        const template = fs.readFileSync(
          path.join(__dirname, "index.html"),
          "utf-8"
        );
        html = await vite.transformIndexHtml(req.originalUrl, template);
      } else {
        html = fs.readFileSync(
          path.join(__dirname, "dist", "client", "index.html"),
          "utf-8"
        );
      }
      res.setHeader("Content-Type", "text/html");
      res.send(html);
    } catch (error) {
      console.error("Error handling request:", error);
      res.status(500).send("Internal Server Error");
    }
  });

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
