/* AUTO-GENERATED from pricing.yaml by scripts/gen-pricing.mjs — do not edit by hand. */
window.PRICING = {
  "fx": 7.2,
  "tiers": {
    "landing": {
      "min": 2500,
      "max": 3500,
      "sla": "48 小时"
    },
    "standard": {
      "min": 15000,
      "max": 25000,
      "sla": "7 天"
    },
    "custom": {
      "min": 45000,
      "max": 80000,
      "sla": "3–4 周"
    },
    "enterprise": {
      "min": 100000,
      "max": null,
      "sla": "按合同"
    }
  },
  "ops": {
    "none": {
      "min": 0,
      "max": 0
    },
    "basic": {
      "min": 1500,
      "max": 3000
    },
    "growth": {
      "min": 3000,
      "max": 6000
    },
    "enterprise": {
      "min": 6000,
      "max": 12000
    }
  },
  "regions": {
    "mainland_hk": {
      "mult": 1,
      "usd": false,
      "label": "大陆 / 港"
    },
    "north_america": {
      "mult": 1.15,
      "usd": true,
      "label": "北美（USD 上浮）"
    },
    "europe": {
      "mult": 1.15,
      "usd": true,
      "label": "欧洲（USD 上浮）"
    },
    "southeast_asia": {
      "mult": 0.85,
      "usd": true,
      "label": "东南亚（USD 下探）"
    }
  },
  "addons": {
    "compliance": {
      "pct": 20
    },
    "multilingual": {
      "per": 2000
    },
    "payment": {
      "min": 3000,
      "max": 5000
    },
    "migration": {
      "min": 2000,
      "max": 4000
    }
  }
};
