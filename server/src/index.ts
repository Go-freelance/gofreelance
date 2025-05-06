import express from "express";
import cors from "cors";
import morgan from "morgan";
import config from "./config/env";
import emailRoutes from "./routes/emailRoutes";

const app = express();

app.use(
  cors({
    origin: config.corsOrigin,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Logger des requêtes HTTP
app.use(morgan(config.isDevelopment ? "dev" : "combined"));

// Parser pour les requêtes JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/emails", emailRoutes);

// Route par défaut pour tester que le serveur fonctionne
app.get("/", (req, res) => {
  res.json({
    message: "API Go Freelance fonctionnelle",
    env: config.nodeEnv,
    version: "1.0.0",
  });
});

// Gestion des routes non trouvées
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route introuvable",
  });
});

// Démarrage du serveur
const PORT = config.port;
app.listen(PORT, () => {
  console.log(
    `✨ Serveur démarré sur le port ${PORT} en mode ${config.nodeEnv}`
  );
  console.log(
    `📬 Service emails accessible sur http://localhost:${PORT}/api/emails`
  );
});

export default app;
