// gen-pricing.mjs — generate assets/pricing.js from pricing.yaml.
// pricing.yaml is a copy of shopify_skill/docs/pricing.yaml (the single price source).
// Run: npm run gen-pricing  (also wired into CI so the page can never drift from the yaml).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const p = yaml.load(fs.readFileSync(path.join(ROOT, 'pricing.yaml'), 'utf8'));

const tiers = {};
for (const [k, v] of Object.entries(p.delivery_tiers)) tiers[k] = { min: v.min, max: v.max, sla: v.sla };

const ops = { none: { min: 0, max: 0 } };
for (const [k, v] of Object.entries(p.ops_tiers)) ops[k] = { min: v.min, max: v.max };

const regions = {};
for (const [k, v] of Object.entries(p.regions)) regions[k] = { mult: v.multiplier, usd: v.currency !== 'RMB', label: v.label_zh };

const addons = {
  compliance:   { pct: p.addons['compliance-us'].value },
  multilingual: { per: p.addons['multilingual'].value },
  payment:      { min: p.addons['payment-local'].min, max: p.addons['payment-local'].max },
  migration:    { min: p.terms.migration_assessment.min, max: p.terms.migration_assessment.max },
};

const data = { fx: p.fx.rmb_per_usd, tiers, ops, regions, addons };
const out = '/* AUTO-GENERATED from pricing.yaml by scripts/gen-pricing.mjs — do not edit by hand. */\n'
  + 'window.PRICING = ' + JSON.stringify(data, null, 2) + ';\n';

fs.mkdirSync(path.join(ROOT, 'assets'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'assets', 'pricing.js'), out);
console.log('wrote assets/pricing.js from pricing.yaml');
console.log('  tiers:', Object.keys(tiers).join(', '), '| fx:', data.fx, '| addons:', Object.keys(addons).join(', '));
