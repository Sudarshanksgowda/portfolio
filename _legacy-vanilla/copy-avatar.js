const fs = require('fs');
const path = require('path');

const src = "C:\\Users\\compu\\.gemini\\antigravity\\brain\\4affbe8e-f178-4c20-8b0a-4477c8e8d386\\avatar_1785312807997.jpg";
const dest = "C:\\Users\\compu\\..gemini\\antigravity\\scratch\\sudarshan_portfolio\\avatar.png";

// Let's resolve the path correctly to make sure the escape characters are handled
const absoluteDest = path.resolve("C:/Users/compu/.gemini/antigravity/scratch/sudarshan_portfolio/avatar.png");
const absoluteSrc = path.resolve("C:/Users/compu/.gemini/antigravity/brain/4affbe8e-f178-4c20-8b0a-4477c8e8d386/avatar_1785312807997.jpg");

try {
  fs.copyFileSync(absoluteSrc, absoluteDest);
  console.log("SUCCESS: Copied avatar image successfully.");
} catch (err) {
  console.error("ERROR copying file:", err);
}
