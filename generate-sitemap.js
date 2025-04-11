// generate-sitemap.js
import { SitemapStream, streamToPromise } from "sitemap";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

// Xử lý __dirname trong ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Danh sách các trang cần đưa vào sitemap
const links = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/menu", changefreq: "weekly", priority: 0.8 },
  { url: "/gioi-thieu", changefreq: "monthly", priority: 0.6 },
  { url: "/lien-he", changefreq: "monthly", priority: 0.5 },
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: "https://banhcuontayho.vn" });

  const xml = await streamToPromise(
    links.reduce((acc, item) => {
      acc.write(item);
      return acc;
    }, sitemap)
  );

  sitemap.end();

  // Ghi vào thư mục public (tạo sitemap.xml tại đó)
  const outputPath = path.join(__dirname, "/public", "sitemap.xml");
  fs.writeFileSync(outputPath, xml.toString());

  console.log("Sitemap created successfully at:", outputPath);
}

generateSitemap();
