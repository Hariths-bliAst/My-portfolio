import { createWriteStream, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { deflateSync } from 'node:zlib';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');

function crcTable() {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  return table;
}

const CRC = crcTable();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i += 1) c = CRC[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const t = Buffer.from(type);
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const payload = Buffer.concat([t, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(payload));
  return Buffer.concat([len, payload, crc]);
}

function png(width, height, colorAt) {
  const raw = Buffer.alloc((width * 3 + 1) * height);
  for (let y = 0; y < height; y += 1) {
    const row = y * (width * 3 + 1);
    raw[row] = 0;
    for (let x = 0; x < width; x += 1) {
      const [r, g, b] = colorAt(x, y, width, height);
      const i = row + 1 + x * 3;
      raw[i] = r;
      raw[i + 1] = g;
      raw[i + 2] = b;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 2;
  const body = Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw)),
    chunk('IEND', Buffer.alloc(0)),
  ]);
  return body;
}

function write(path, buf) {
  mkdirSync(dirname(path), { recursive: true });
  const stream = createWriteStream(path);
  stream.end(buf);
}

const portrait = png(480, 480, (x, y, w, h) => {
  const nx = x / w;
  const ny = y / h;
  const glow = Math.exp(-((nx - 0.5) ** 2 + (ny - 0.38) ** 2) / 0.18);
  const r = Math.round(8 + glow * 20);
  const g = Math.round(20 + glow * 90);
  const b = Math.round(30 + glow * 70);
  return [r, g, b];
});
write(join(root, 'profile.jpg'), portrait);

const palettes = [
  (t, ny) => [10 + t * 20, 40 + t * 90, 50 + ny * 40],
  (t, ny) => [12, 30 + t * 70, 70 + ny * 50],
  (t, ny) => [16 + ny * 20, 50 + t * 80, 40],
  (t, ny) => [14, 24 + t * 40, 48 + ny * 60],
];

palettes.forEach((fn, idx) => {
  const img = png(960, 600, (x, y, w, h) => {
    const t = x / w;
    const ny = y / h;
    const band = Math.sin((x / 18 + y / 40) + idx) * 0.5 + 0.5;
    const [r, g, b] = fn(t * 0.6 + band * 0.4, ny);
    return [Math.min(255, r), Math.min(255, g), Math.min(255, b)];
  });
  write(join(root, 'projects', `project${idx + 1}.jpg`), img);
});
