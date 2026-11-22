
const { chromium } = require('playwright-core');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1024, height: 1024 });

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <style>
        body { font-family: sans-serif; background: #f0f0f0; margin: 0; padding: 20px; width: 1024px; height: 1024px; box-sizing: border-box; }
        h1 { font-size: 48px; text-align: center; margin-bottom: 30px; color: #333; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .block { padding: 20px; border-radius: 10px; color: white; }
        h2 { font-size: 24px; margin: 0 0 10px 0; }
        p { font-size: 16px; margin: 0; }
      </style>
    </head>
    <body>
      <h1>SUNDAY, 22 NOVEMBER 2026</h1>
      <div class="grid">
        <div class="block" style="background: #e63946;">
          <h2>COP31 Bubar: EU Tolak Pakta Antalya</h2>
          <p>Sidang pleno COP31 Antalya berakhir tanpa kesepakatan setelah EU dan negara lain menolak draf yang mengabaikan bahan bakar fosil.</p>
        </div>
        <div class="block" style="background: #457b9d;">
          <h2>Menhan Pendidikan Korsel Choi Mundur</h2>
          <p>Choi Kyo-jin mengundurkan diri pasca skandal kecurangan AI massal pada ujian masuk Suneung di Korea Selatan.</p>
        </div>
        <div class="block" style="background: #2a9d8f;">
          <h2>India 720/9 di Wellington, Rekor 96 Tahun</h2>
          <p>India mencatatkan total Tes tertinggi di Selandia Baru dalam 96 tahun dalam pertandingan kriket di Wellington.</p>
        </div>
        <div class="block" style="background: #f4a261;">
          <h2>PM Nepal Balendra Shah Tiba di New Delhi</h2>
          <p>PM Nepal Balendra Shah memulai kunjungan resmi dua hari ke India, pertemuan pertama dengan PM Modi.</p>
        </div>
        <div class="block" style="background: #264653;">
          <h2>9 Tewas Kecelakaan Cruiser di Kota-Udaipur</h2>
          <p>Sembilan anggota keluarga tewas dalam kecelakaan Cruiser di Rajasthan saat dalam perjalanan pulang.</p>
        </div>
        <div class="block" style="background: #6a4c93;">
          <h2>Houthi: Serangan Sanaa, 6 Pekerja Luka</h2>
          <p>Serangan udara menghantam stasiun bahan bakar di Sanaa, Yaman, menyebabkan enam pekerja terluka.</p>
        </div>
        <div class="block" style="background: #bc6c25;">
          <h2>Trump Tunjuk Barrack Utusan Suriah–Irak</h2>
          <p>Presiden Trump menunjuk Tom Barrack sebagai utusan khusus untuk Suriah dan Irak.</p>
        </div>
        <div class="block" style="background: #283618;">
          <h2>Brussels Airport Batalkan Penerbangan Senin</h2>
          <p>Sebagian besar penerbangan di Bandara Brussels dibatalkan Senin karena mogok nasional pengatur lalu lintas udara.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  await page.setContent(html);
  await page.screenshot({ path: 'entry.png', fullPage: true });
  await browser.close();
})();
