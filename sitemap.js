import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Configuration du site
const SITE_URL = "https://gofreelancerdc.com";
const CURRENT_DATE = new Date().toISOString().split("T")[0];

const routes = [
  {
    path: "/",
    priority: 1.0,
    changefreq: "weekly",
    lastmod: CURRENT_DATE,
  },
  {
    path: "/contact",
    priority: 0.8,
    changefreq: "monthly",
    lastmod: CURRENT_DATE,
  },
  {
    path: "/tiers",
    priority: 0.6,
    changefreq: "monthly",
    lastmod: CURRENT_DATE,
  },
  {
    path: "/services/automatisation",
    priority: 0.6,
    changefreq: "monthly",
    lastmod: CURRENT_DATE,
  },
  {
    path: "/services/campagne-cross-canal",
    priority: 0.6,
    changefreq: "monthly",
    lastmod: CURRENT_DATE,
  },
  {
    path: "/services/campagne-publicitaire",
    priority: 0.6,
    changefreq: "monthly",
    lastmod: CURRENT_DATE,
  },
  {
    path: "/services/developpement-web-et-mobile",
    priority: 0.6,
    changefreq: "monthly",
    lastmod: CURRENT_DATE,
  },
  {
    path: "/services/integration-ia",
    priority: 0.6,
    changefreq: "monthly",
    lastmod: CURRENT_DATE,
  },
  {
    path: "/services/solution-enterprise",
    priority: 0.6,
    changefreq: "monthly",
    lastmod: CURRENT_DATE,
  },
  {
    path: "/services/transformation-digitale",
    priority: 0.6,
    changefreq: "monthly",
    lastmod: CURRENT_DATE,
  },
  {
    path: "/services/developpement-wordpress-elementor",
    priority: 0.6,
    changefreq: "monthly",
    lastmod: CURRENT_DATE,
  },
];

// Fonction pour générer le XML du sitemap
function generateSitemapXML(routes) {
  const urlEntries = routes
    .map((route) => {
      return `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${route.lastmod || CURRENT_DATE}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

// Fonction pour générer le sitemap
function generateSitemap() {
  try {
    const sitemapXML = generateSitemapXML(routes);
    const outputPath = path.join(process.cwd(), "public", "sitemap.xml");

    // Créer le dossier public s'il n'existe pas
    const publicDir = path.dirname(outputPath);
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Écrire le fichier sitemap.xml
    fs.writeFileSync(outputPath, sitemapXML, "utf8");

    console.log("✅ Sitemap généré avec succès:", outputPath);
    console.log(`📄 ${routes.length} routes ajoutées au sitemap`);

    // Afficher les routes ajoutées
    routes.forEach((route) => {
      console.log(
        `   - ${SITE_URL}${route.path} (priorité: ${route.priority})`
      );
    });
  } catch (error) {
    console.error("❌ Erreur lors de la génération du sitemap:", error);
    process.exit(1);
  }
}

// Fonction pour générer robots.txt également
function generateRobotsTxt() {
  try {
    const robotsContent = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${SITE_URL}/sitemap.xml

# Bloquer les dossiers de développement
Disallow: /src/
Disallow: /node_modules/
Disallow: /*.js$
Disallow: /*.ts$
Disallow: /*.tsx$
`;

    const robotsPath = path.join(process.cwd(), "public", "robots.txt");
    fs.writeFileSync(robotsPath, robotsContent, "utf8");

    console.log("✅ Robots.txt généré avec succès:", robotsPath);
  } catch (error) {
    console.error("❌ Erreur lors de la génération de robots.txt:", error);
  }
}

// Vérifier si le script est exécuté directement
const __filename = fileURLToPath(import.meta.url);
const isMainModule = process.argv[1] === __filename;

// Exécution du script
if (isMainModule) {
  console.log("🚀 Génération du sitemap et robots.txt...\n");

  // Générer le sitemap avec les routes manuelles
  generateSitemap();

  // Générer aussi robots.txt
  generateRobotsTxt();

  console.log("\n🎉 Génération terminée !");
}

// Export pour utilisation dans d'autres scripts
export { generateSitemap, generateRobotsTxt, routes };
