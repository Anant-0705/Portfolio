import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const paths = ['public/relay/index.html', 'public/relay/privacy/index.html'];
const permissions = ['gmail.readonly', 'gmail.send', 'calendar.freebusy', 'calendar.app.created'];
for (const path of paths) {
  const html = readFileSync(resolve(root, path), 'utf8');
  assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, `${path}: exactly one h1`);
  for (const required of ['lang="en"', 'name="viewport"', 'name="description"', 'rel="canonical"', 'href="#main"', 'id="main"', 'anantsinghal2134@gmail.com']) {
    assert.ok(html.includes(required), `${path}: missing ${required}`);
  }
  for (const permission of permissions) assert.ok(html.includes(permission), `${path}: missing ${permission}`);
  assert.ok(!/<(?:script|iframe|form)\b/i.test(html), `${path}: static information pages only`);
  assert.ok(!/GOCSPX-|ya29\.|4\/0A|"refresh_token"\s*:|"client_secret"\s*:/i.test(html), `${path}: possible credential`);
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (href.startsWith('#')) {
      assert.ok(html.includes(`id="${href.slice(1)}"`), `${path}: missing anchor ${href}`);
    } else if (href.startsWith('/relay')) {
      const publicFile = href.endsWith('.css') || href.endsWith('.svg')
        ? `public${href}` : `public${href}/index.html`;
      assert.ok(existsSync(resolve(root, publicFile)), `${path}: broken internal link ${href}`);
    }
  }
}
const css = readFileSync(resolve(root, 'public/relay/relay.css'), 'utf8');
assert.ok(!/@import|url\(\s*["']?https?:/i.test(css), 'No external CSS/font requests');
assert.ok(css.includes(':focus-visible'), 'Keyboard focus styling');
assert.ok(css.includes('prefers-reduced-motion'), 'Reduced-motion support');
const config = JSON.parse(readFileSync(resolve(root, 'vercel.json'), 'utf8'));
assert.deepEqual(config.rewrites.map(({ source }) => source), ['/relay', '/relay/', '/relay/privacy', '/relay/privacy/']);
for (const { destination } of config.rewrites) assert.ok(existsSync(resolve(root, `public${destination}`)), `Missing rewrite target ${destination}`);

function luminance(hex) {
  const channels = hex.match(/[\da-f]{2}/gi).map((channel) => parseInt(channel, 16) / 255)
    .map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
}
for (const text of ['#f2f0eb', '#b5b5ad', '#92928b', '#c8ff00']) {
  const ratio = (luminance(text) + 0.05) / (luminance('#141414') + 0.05);
  assert.ok(ratio >= 4.5, `Text contrast ${text}: ${ratio.toFixed(2)}:1`);
}
console.log('Relay page checks passed: content, scopes, links, static-only delivery, routes, credential patterns, and text-color contrast.');
