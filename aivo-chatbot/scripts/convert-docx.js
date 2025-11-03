const mammoth = require('mammoth');
const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '..', 'HERO AIVO サービス設計書.docx');
const outputPath = path.join(__dirname, '..', 'knowledge', 'service-design.txt');

mammoth.extractRawText({ path: inputPath })
  .then((result) => {
    const text = result.value;
    const messages = result.messages;

    // Create knowledge directory if it doesn't exist
    const knowledgeDir = path.dirname(outputPath);
    if (!fs.existsSync(knowledgeDir)) {
      fs.mkdirSync(knowledgeDir, { recursive: true });
    }

    // Write the extracted text to file
    fs.writeFileSync(outputPath, text, 'utf-8');

    console.log('✅ Text extracted successfully!');
    console.log(`📄 Output: ${outputPath}`);
    console.log(`📊 Text length: ${text.length} characters`);

    if (messages.length > 0) {
      console.log('\n⚠️  Warnings:');
      messages.forEach(m => console.log(`  - ${m.message}`));
    }
  })
  .catch((error) => {
    console.error('❌ Error:', error);
  });
