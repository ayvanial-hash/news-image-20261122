const { chromium } = require('playwright-core');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1024, height: 1024 });

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <style>
        body { font-family: 'Times New Roman', serif; background: #fff; margin: 0; padding: 20px; width: 1024px; height: 1024px; box-sizing: border-box; color: #1a1a1a; overflow: hidden; }
        h1 { font-size: 36px; text-align: center; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 4px solid #000; text-transform: uppercase; font-weight: bold; }
        .story { padding: 10px; margin-bottom: 10px; border-left: 10px solid #ccc; background: #fff; }
        h2 { font-size: 30px; font-weight: bold; margin: 0 0 5px 0; color: #000; text-transform: uppercase; }
        p { font-size: 18px; margin: 2px 0; line-height: 1.2; color: #1a1a1a; }
      </style>
    </head>
    <body>
      <h1>THE WORLD - SUNDAY, NOVEMBER 22, 2026</h1>
      <div class="story" style="border-left-color: #e63946;">
        <h2>COP31 COLLAPSES: EU REJECTS ANTALYA PACT</h2>
        <p>COP31 in Antalya ended without a deal on Sunday after nations rejected the final draft.</p>
        <p>This is the first climate summit failure in 17 years and the longest in history.</p>
      </div>
      <div class="story" style="border-left-color: #457b9d;">
        <h2>S. KOREA EDUCATION MINISTER CHOI RESIGNS</h2>
        <p>Minister Choi Kyo-jin resigned following a massive AI-assisted cheating scandal.</p>
        <p>111 students were caught using smart devices, prompting calls for a 10-year ban.</p>
      </div>
      <div class="story" style="border-left-color: #2a9d8f;">
        <h2>INDIA SCORES 720/9 IN WELLINGTON, 96-YEAR RECORD</h2>
        <p>India recorded its highest-ever away Test total in Wellington on Sunday.</p>
        <p>Centuries from KL Rahul and Rishabh Pant secured a 352-run first-innings lead.</p>
      </div>
      <div class="story" style="border-left-color: #f4a261;">
        <h2>NEPAL PM BALENDRA SHAH ARRIVES IN NEW DELHI</h2>
        <p>PM Balendra Shah arrived in New Delhi for his first official foreign visit.</p>
        <p>The 34-member delegation is focusing on energy and connectivity initiatives.</p>
      </div>
      <div class="story" style="border-left-color: #264653;">
        <h2>FBI CONFIRMS MAJOR NCIC DATABASE BREACH</h2>
        <p>The FBI has confirmed a major security breach of the NCIC database.</p>
        <p>A full-scale cybersecurity investigation is underway to assess the impact.</p>
      </div>
    </body>
    </html>
  `;

  await page.setContent(html);
  await page.screenshot({ path: 'entry.png', clip: {x: 0, y: 0, width: 1024, height: 1024} });
  await browser.close();
})();
