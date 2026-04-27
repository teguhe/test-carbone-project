const carbone = require('carbone');
const fs = require('fs');

const data = {
  nama: "Budi Santoso",
  tanggal_lahir: "1 Januari 1990",
  kota: "Salatiga",
  produk: [
    { no: 1, nama: "Laptop",   harga: "Rp 12.000.000" },
    { no: 2, nama: "Mouse",    harga: "Rp 250.000" },
    { no: 3, nama: "Keyboard", harga: "Rp 500.000" }
  ]
};

// Render ke ODT (tanpa LibreOffice)
carbone.render('./template_surat.odt', data, function(err, result) {
  if (err) return console.error('Error:', err);
  fs.writeFileSync('output_surat.odt', result);
  console.log('✅ Report berhasil dibuat: output_surat.odt');
});

// Render ke PDF (butuh LibreOffice)
carbone.render('./template_surat.odt', data, { convertTo: 'pdf' }, function(err, result) {
  if (err) return console.error('Error PDF:', err);
  fs.writeFileSync('output_surat.pdf', result);
  console.log('✅ PDF berhasil dibuat: output_surat.pdf');
});