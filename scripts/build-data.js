
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Recreate __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, '../content');
const outputDir = path.join(__dirname, '../public/data');
const outputFile = path.join(outputDir, 'db.json');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function readCollection(collectionName) {
  const collectionPath = path.join(contentDir, collectionName);

  if (!fs.existsSync(collectionPath)) {
    console.warn(`Collection directory not found: ${collectionPath}`);
    return [];
  }

  const files = fs.readdirSync(collectionPath);
  return files
    .filter(file => file.endsWith('.json'))
    .map(file => {
      const filePath = path.join(collectionPath, file);
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(content);
        return data;
      } catch (err) {
        console.error(`Error reading file ${file}:`, err);
        return null;
      }
    })
    .filter(item => item !== null);
}

const products = readCollection('products');
const testimonials = readCollection('testimonials');

const db = {
  products,
  testimonials,
  generatedAt: new Date().toISOString()
};

fs.writeFileSync(outputFile, JSON.stringify(db, null, 2));
console.log(`Database generated at ${outputFile} with ${products.length} products and ${testimonials.length} testimonials.`);
