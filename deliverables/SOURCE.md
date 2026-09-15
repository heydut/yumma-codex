# Fieldwork: complete text source

Every authored text source file is included below. The accompanying fieldwork-source.zip also includes all binary icons, social images and QA screenshots. Build outputs are reproducible with npm ci and npm run build.

## .env.example

``````
SITE_URL=https://fieldwork.example
CONTACT_EMAIL=hello@fieldwork.example

``````

## .gitignore

``````
node_modules/
dist/
.build/
.env
.env.*
!.env.example
test-results/
playwright-report/
.sites-runtime/

``````

## package.json

``````
{
  "name": "fieldwork",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --host 127.0.0.1",
    "typecheck": "tsc --noEmit",
    "validate": "yummacss-canon",
    "assets": "node scripts/generate-assets.mjs",
    "build": "npm run typecheck && npm run validate && npm run assets && vite build && vite build --ssr src/entry-server.tsx --outDir .build/server && node scripts/prerender.mjs",
    "preview": "node scripts/serve.mjs",
    "test": "playwright test",
    "check": "node scripts/check.mjs",
    "check:launch": "node scripts/check-launch.mjs"
  },
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1"
  },
  "devDependencies": {
    "@axe-core/playwright": "^4.10.2",
    "@playwright/test": "^1.55.0",
    "@types/node": "^22.18.0",
    "@types/react": "^19.1.12",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.2",
    "@yummacss/canon": "latest",
    "@yummacss/vite": "latest",
    "sharp": "0.35.4",
    "typescript": "^5.9.2",
    "vite": "^7.1.5",
    "yummacss": "latest"
  }
}

``````

## package-lock.json

``````
{
  "name": "fieldwork",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "fieldwork",
      "version": "1.0.0",
      "dependencies": {
        "react": "^19.1.1",
        "react-dom": "^19.1.1"
      },
      "devDependencies": {
        "@axe-core/playwright": "^4.10.2",
        "@playwright/test": "^1.55.0",
        "@types/node": "^22.18.0",
        "@types/react": "^19.1.12",
        "@types/react-dom": "^19.1.9",
        "@vitejs/plugin-react": "^5.0.2",
        "@yummacss/canon": "latest",
        "@yummacss/vite": "latest",
        "sharp": "0.35.4",
        "typescript": "^5.9.2",
        "vite": "^7.1.5",
        "yummacss": "latest"
      }
    },
    "node_modules/@axe-core/playwright": {
      "version": "4.13.0",
      "resolved": "https://registry.npmjs.org/@axe-core/playwright/-/playwright-4.13.0.tgz",
      "integrity": "sha512-6YLx+kxXu5GJceG4ozFg+33a2EMTdjYwWGloJ3sb9Kta5pp+ZNS53uxGVog5JetIY8s++P5UrtX+cri+u0VAVg==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "axe-core": "~4.13.0"
      },
      "peerDependencies": {
        "playwright-core": ">= 1.0.0"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.29.7.tgz",
      "integrity": "sha512-Aup7aUOfpbAUg2ROOJN6Iw5f9DMBlzu0mIkm/malLQFN/YQgO48wCj0Kxa3sEHJvPVFg7siR+qRInwXd2qhQKw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.29.7",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.29.7.tgz",
      "integrity": "sha512-locTkQyKvwIEgBzVrn8693ebc97F2U8ZHjbXwDXJ5Fn2TCpNwTlKcaKLkdHop5c/icOFE7qt7Q9JC5hnKNa6Gg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.29.7.tgz",
      "integrity": "sha512-RgHBCvtjbOK2gXSNBNIkNoEc9qoVEtau3hj8gEqKQuL3HZAibKarWFEI3Lfm6EYKkLalOh8eSrj9b+ch9H/VBA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/generator": "^7.29.7",
        "@babel/helper-compilation-targets": "^7.29.7",
        "@babel/helper-module-transforms": "^7.29.7",
        "@babel/helpers": "^7.29.7",
        "@babel/parser": "^7.29.7",
        "@babel/template": "^7.29.7",
        "@babel/traverse": "^7.29.7",
        "@babel/types": "^7.29.7",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.29.8",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.29.8.tgz",
      "integrity": "sha512-gZbepsdh3WDtgZKWL+vTPh71LSBrm/Y4/QDZBVCcYfmeTEEuoOYwlSy+G1StfJg+/Zy550u/3TATbm7qDbbMtg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.29.8",
        "@babel/types": "^7.29.8",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.29.7.tgz",
      "integrity": "sha512-wem6WaBj4NaVYVdNhLPPVacES6ZJ+KBBfSkTMD3YZxbP3rm3Di85tJU5ljaUNhaOynt+Aj0xruhYuzQBt8n71g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.29.7",
        "@babel/helper-validator-option": "^7.29.7",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.29.7.tgz",
      "integrity": "sha512-3nQVUAtvkKH9zahfWgw96Jc/uFOmjACE1kQz82E2lqWmHBgjzbNlsC22nuQTfahmWeQtTq5nQ/4Nnd2A1wj4zA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.29.7.tgz",
      "integrity": "sha512-ejHwrQQYcm9xnTivShn2IDOlIzInN34AXskvq9QicvCtEzq1Vzclu/tKF8Jq1Cg8JG2GL6/EmjgsCT7lXepE3g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.29.7.tgz",
      "integrity": "sha512-UPUVSyXbOh627KiCIGQSgwWzGeBKLkaJ9PJEdrngIwMSzxLR4jS4+f1f1jb7VzBbg8nFLaYotvVPFCTqdrmTAg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.29.7",
        "@babel/helper-validator-identifier": "^7.29.7",
        "@babel/traverse": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.29.7.tgz",
      "integrity": "sha512-G7sHYigPY17oO5SYWnfD/0MTBwVR781S/JI643e/JhUYgVgWE/61SoW3NH9KWUKyKq5LVh3npif99Wkt6j86Jw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.29.7.tgz",
      "integrity": "sha512-Pb5ijPrZ89GDH8223L4UP8i6QApWxs04RbPQJTeWDV0/keR2E36MeKnyr6LYmUUvqRRI+Iv87SuF1W6ErINzYw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.29.7.tgz",
      "integrity": "sha512-qehxGkRj55h/ff8EMaJ+cYhyaKlHIxqYDn682wQD7RNp9UujOQsHog2uS0r2vzr4pW+sXf90NeeayjcNaX3fFg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.29.7.tgz",
      "integrity": "sha512-N9ZErrD+yW5geCDtBqnOoxmR8+tNKiGuxKlDpuJxfsqpa2dFcexaziGAE/qoHLiDDreVNMupxGmSoNlyvsA3gw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.29.7.tgz",
      "integrity": "sha512-1k2lAGRMfHTcwuNYcCNUmaUffmQv8KWMfh2iJUUeRlwlwH4FdNG7mfPI10NPfLHJFThE4Tyr4mv7kTNZOiPuBg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.29.8",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.29.8.tgz",
      "integrity": "sha512-E8lTAYNB1KW+FH+VGJuZM1ioAx2E6oVlvQFRrf5P8ZZmsiJXYAD9vTFV7yyEURNzgh1dFqMZuO6tUwcARbqFCA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.29.8"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-self": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.29.7.tgz",
      "integrity": "sha512-TL0hMc9xzy86VD31nUiwzd5otRAcyEPcsegCxolO0PvcXuH1v0kECe/UIznYFihpkvU5wg/jk4v0TTEFfm53fw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-source": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.29.7.tgz",
      "integrity": "sha512-06IyK09H3wi4cGbhDBwp5gUGo0IKtnYa8tyTiephirPCK6fbobVGiXMMI5zLQ4aKEYP3wZ3ArU44o+8KMrSG/Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.29.7.tgz",
      "integrity": "sha512-puq+Gf35oI24FeN11LkoUQFqv9uwNeWpxXZi/Ji3rRIoKAzKnxRaZ+Gkj0vKS9ZCiTESfng1N9LyOyXvo+m+Gg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/parser": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.29.8",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.29.8.tgz",
      "integrity": "sha512-I5z7H3bf/41ktsNVLtpN0wAa336HkqIHQ5BuPLEhTkt1jVSyZpeNKIzTgEWmlxjdg81R0IgUCcaE+Ok3NvrfZg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/generator": "^7.29.8",
        "@babel/helper-globals": "^7.29.7",
        "@babel/parser": "^7.29.8",
        "@babel/template": "^7.29.7",
        "@babel/types": "^7.29.8",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.29.8",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.29.8.tgz",
      "integrity": "sha512-Vj1jF3cPfxg7OAfoI7QnVKLoILlm2JF9pnVHrX8qx7AHMiYWT+NDAA7jChlNgRS4WTLc/fD1lXLmPixluj+3Gg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.29.7",
        "@babel/helper-validator-identifier": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.11.3",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.11.3.tgz",
      "integrity": "sha512-Xz4Tpyki7XyrpbUK1jR1AhdAdaXyhhY4lZ3neLodmhpuWfy2PAQN5B46sAiU4liOXGLkHypn/qU+jvfWSCYYLA==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.28.2.tgz",
      "integrity": "sha512-XExcO+dvLKvVtNTibSTBej1NCAbaGhWn9Ww1ZPx80qsahhPFe/8jgWP0IchNe0F3HwkU7n8ejhH8bjonqht8mQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.28.2.tgz",
      "integrity": "sha512-kXXoiPVVGQcnIYGOeaovwOURpniDBpSq4A03qkQ+BMQqtGG6HYap3xne9C1O1yo4TR3qxlCX5IqqmX6fFo2Lqg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.28.2.tgz",
      "integrity": "sha512-5YfKeeI8qWfBZIX+u2xZC3Zlb3Os/gLS2sbEKM+I4ZOcsWmHS2WLysCcQZDAFRslDUU5Oiq44gf6PYN1vGwG5A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.28.2.tgz",
      "integrity": "sha512-O387ite7SzUyCcy3JQX4P4bLtEA7bLLkx+esve5JHnyYfNTxcVpXZo9jhdB0lTKN44gztELTdU7nS8Nr16Fs1Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.28.2.tgz",
      "integrity": "sha512-n4KqkOQrraxHJcgjM1RvwbigfQKIKJVpM7xp+KsxiyUSrRdIXnt73VhrPAx0fV44hgfmIVKjxMN9J1t5jySVkw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.28.2.tgz",
      "integrity": "sha512-uq6suIWYP37qzGddBKPw5QEQPi6HiLGsO7UmkpfyaYNQ3D+rN6w6WfwH+nuqcGXWvawGwxOEroO4YGnFh95azw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.28.2.tgz",
      "integrity": "sha512-n+I0BTSRIoy+d6RPKnEVwql5UwBJolytvY4mAOIEJorKlqgPII8ix6slVVrfZ5Tnj7glIZvloylbB/EJPMWEXw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.28.2.tgz",
      "integrity": "sha512-78XJTJkvPs0kz2w61301PJjXl4g7q3JqiYMZ/M/yVI73EHBrCRTgkhu9oqG7vPqq+a/yadEW8aD+agKlk5xrmg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.28.2.tgz",
      "integrity": "sha512-XlDnu2q5yoqems+xay6wSAcg9DDD7K9RLKZEBOMZm3ckNpJBvOX20tSfby8KfrrhINDyv9V2YVZKY/SpoGJI8w==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.28.2.tgz",
      "integrity": "sha512-pW4AC0P3it8c7do9MVM4p51FzHzdM/TZrerurgRcHJ2WTa1VQ1CIq18xncfpBJw4ojkiZZrKW2yIBWBP92j6Ug==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.28.2.tgz",
      "integrity": "sha512-CYbnj78HsIeA+DhgUKgFCfvNsTHFhMMrinUrMZpDXJXKN8T3XViTZ/+wtHeVxEWY8ewSzTFN+nRmSwO2tZaLUQ==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.28.2.tgz",
      "integrity": "sha512-buwkd8nsph4R+ajRvw0qM5Hja/TXQow3ptzWO2EbG/cqcIkHloRrdlBtQlshyYGTNFvfkfJ5tpPLVkY4DtsPfQ==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.28.2.tgz",
      "integrity": "sha512-ZVykbDyk7519VwiNb9Lcj9m8XM6v5V9uKPvrEMkkEedVewf+0itkhahp4HDpgERXhwLRpWFypsGbG/J8s0QjJA==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.28.2.tgz",
      "integrity": "sha512-CAXl+Dtd9UUuJd8pKKdwh6MLm3MUMiqMPmhZ3tTSXPqfyQ3vDl6R5hZdZ/kYojK4ofXtdfSv1tFq8XzWx3heNQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.28.2.tgz",
      "integrity": "sha512-GeXCej4IQtU1B+QlDV8W/RRvbzI3O/Stss+/bCXv4lZls5WGRtu2a+3JkA3i4qIUlMXpcHebWpF8AkJhATowuA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.28.2.tgz",
      "integrity": "sha512-3H1weTYZPxt/WOhByszQZybS9w5lKzUn1FDMsgEChbHWQwHYQQRfBxgCcZvPhjHfKyJjIievvMmEUawJrdY9Dg==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.28.2.tgz",
      "integrity": "sha512-4xTZr1FUmSoQW4XIWmit3tzQrUTZM+N3P0XV8xROKYF50XfI7xeO90+1bZvNwxIufQ9hDQVRJH5YhgPVF8A/HQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-arm64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.28.2.tgz",
      "integrity": "sha512-sSATRjPeDBg3pdgHoQfoYBob11Kk1FGa9lui5RIHZCoCkJa9QKlvl3/vKz2usCmYYjs7ymJR/2Nnsqe+Hjt5nw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.28.2.tgz",
      "integrity": "sha512-lqnzCV+mM0gIADaKihiCg6ifgfU2L3h5E33rNQBN1Y4MaVGnzryzmvvf7UHxprpQdE8hpqLolJ9Rl+SkIRDpyw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-arm64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.28.2.tgz",
      "integrity": "sha512-AL2qJILH7lNjrDmCQDvdxMfAUIv8KMNZOvrwAQ8i8//ntL9FflhOyMJ8OZSMBb8/AWXe3/5v5S20y3zCoZWKoQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.28.2.tgz",
      "integrity": "sha512-QtiuPytchRyC4rwUKhexJdQKvDuZ6hWloi3igqPQNUJCS1/v9EiO3UTOXR6A3FoMo4fnAKbWJdqaIwhOzh8qEw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openharmony-arm64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/openharmony-arm64/-/openharmony-arm64-0.28.2.tgz",
      "integrity": "sha512-WkhYDmpTjLvGlScA1rwjRUmhl4k8oXR3cIbtqWmELgU/dFeHHlEllxDvdWcNJV9rbzCexB5vz8gtNewWLgCT7Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.28.2.tgz",
      "integrity": "sha512-GPMSkTOtMnv2U2F8gxe4Io6qmVs+YKyp832Etqqxr0hFngmXQ3rzwytelm3GIn7T4VviRUlf3sOgBOiTdvaf7g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.28.2.tgz",
      "integrity": "sha512-PIhhEkE9uPBleRBrQEJpUn7MBnibZzbGzYWPmY3x+YoVg/95zbjB4CxPPOQ8l5tYYM4mMaCthF8/1DIfBQQyWQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.28.2.tgz",
      "integrity": "sha512-YmJbfTlvU7Sdn9BB+4PRES4oB6pxgS37MAONj+hBr/cpXS1aBPKXxNnDbu+QCWPj0o9dgyxeq79g6c5P8KeuYA==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.28.2.tgz",
      "integrity": "sha512-5ebpxr3nWMzrL/rnUI755Jkuee0bHL/Gq0WTF9lvcpv73wAp5eu8MfBUgWK9bhWvZjj7yX8etf/8tI8Ney695g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@img/colour": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@img/colour/-/colour-1.1.0.tgz",
      "integrity": "sha512-Td76q7j57o/tLVdgS746cYARfSyxk8iEfRxewL9h4OMzYhbW4TAcppl0mT4eyqXddh6L/jwoM75mo7ixa/pCeQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@img/sharp-darwin-arm64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-arm64/-/sharp-darwin-arm64-0.35.4.tgz",
      "integrity": "sha512-Uhfl4V4lhP2nbUVF9+hyH1+luj86f1gUFeo8ALYxFoULoU+G87D43BfeMP8XHsk9boxAnCY/bf2EHwhA7MuGsA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-arm64": "1.3.3"
      }
    },
    "node_modules/@img/sharp-darwin-x64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-x64/-/sharp-darwin-x64-0.35.4.tgz",
      "integrity": "sha512-hWniXY3bG5qKpkKrAwPe4y+VTPmf086YQAnkxWh7uA1YrlRouWGa0M0Mxj3ZjnXFkv7/TD1bTy9lGUK26vRvWw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-x64": "1.3.3"
      }
    },
    "node_modules/@img/sharp-freebsd-wasm32": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-freebsd-wasm32/-/sharp-freebsd-wasm32-0.35.4.tgz",
      "integrity": "sha512-lIsKw/BU+kjB4eZjxrYrZmwOJYi3Ajrv66iAlBmUPyKc3HpnloevB1g3wxGD9P/5BbQ1brBGl65VRRrCvQDEqA==",
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "dependencies": {
        "@img/sharp-wasm32": "0.35.4"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-arm64": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-arm64/-/sharp-libvips-darwin-arm64-1.3.3.tgz",
      "integrity": "sha512-suTBPTDGrI9WodccaDdwZItTSaBYASlBk1NSfElSHrUfzu3szG6lvIF58+WiFvnfzuK8ZBFS5zE00PxqxnRiPg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-x64": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-x64/-/sharp-libvips-darwin-x64-1.3.3.tgz",
      "integrity": "sha512-FVJZ5mITMobmXIz/hPDTw0EintTW5H3WfrxwLqEqjiIihlu+hVRyGrFQ60xl0Lxn7Bt3zdpevPaQi0HEzqz9fw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm/-/sharp-libvips-linux-arm-1.3.3.tgz",
      "integrity": "sha512-3rbU4vqXXc3hY/OiXdl52xZvT0F1yEngWfvqudtPJg/KkyiaQw2DRsFrNzpmLvfavbwOq3qXn36GP8obHRULQA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm64": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm64/-/sharp-libvips-linux-arm64-1.3.3.tgz",
      "integrity": "sha512-0DaL0A6Xu6sQSQFwe4iVCrKWU2cCTItnRsYsCdxAMm9NF6twAA9BKnoqy4hqz4+azQ0JHuA26qiUKsf1XJ/v5A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-ppc64": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-ppc64/-/sharp-libvips-linux-ppc64-1.3.3.tgz",
      "integrity": "sha512-cdn1OvUBwsXhbC0zSzJnNzf5MZ/mTrobawDvNXBTxe8VtqKAm0sRuEY2Evzovb/w9JMk4TvRxqt1mekSuJz64w==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-riscv64": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-riscv64/-/sharp-libvips-linux-riscv64-1.3.3.tgz",
      "integrity": "sha512-HjPVx7yKz+0lqdhDlTw1tt90wamBoxhiXpvl1XZpJLiHH4RCJ5yDTqH+VlYPv2fwFs89JFw4c1IexYOcQUi4IQ==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-s390x": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-s390x/-/sharp-libvips-linux-s390x-1.3.3.tgz",
      "integrity": "sha512-neWLh+3yCNThxnfy3c4BbVBeGgt9aftno+XbT56iK28RgeDs3UOFWviLWlUu0bArYVYJaFDK+RRohbicUNCm8Q==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-x64": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-x64/-/sharp-libvips-linux-x64-1.3.3.tgz",
      "integrity": "sha512-4vKmvAst9nrowcqquKFAyZJUDolUaIp8uRiN0mWFguJ1IplC9/pitXtlnnlU4aa/eJw3J7i67V+pwUL+wZGdsA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-arm64": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-arm64/-/sharp-libvips-linuxmusl-arm64-1.3.3.tgz",
      "integrity": "sha512-Y9kQaLMuNoB0bPYOOdcZMaseNrFpPodIWWMrx+CZyydf2xn68j9WYc6sWWRrDwNkzCQjKYfc68L7jKjGlHMibw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-x64": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-x64/-/sharp-libvips-linuxmusl-x64-1.3.3.tgz",
      "integrity": "sha512-fj8Mv0HHfD1Rr+4I68+3agJynxDWtBFgicTbSOb9Bke6pIwzGcJ+RX/yHjmiEGFMCavY/dxvem7MyNaJF+wDiw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-linux-arm": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm/-/sharp-linux-arm-0.35.4.tgz",
      "integrity": "sha512-7OAS8gI0EReKGVN2HssHlM6umJgxF5VI3xN0p9FA91p/YO+ou5hiNghLdZ5BEHztwaaK5+bLKRf8x/o2L2nk9A==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm": "1.3.3"
      }
    },
    "node_modules/@img/sharp-linux-arm64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm64/-/sharp-linux-arm64-0.35.4.tgz",
      "integrity": "sha512-De4jpEnAU8Hd5oT0j1G3uL4ZvTuipVMn7YC6vPaJhy6/7EwEae0SVAoBrUMYQbkLGDm85taVWwuPc1a44LTzCQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm64": "1.3.3"
      }
    },
    "node_modules/@img/sharp-linux-ppc64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-ppc64/-/sharp-linux-ppc64-0.35.4.tgz",
      "integrity": "sha512-2oYZJeIl4kCcMGk4ouZVjnkCtFrpQFlNEtJ6GbxzhHQchwH0NH/qEb9ykmOl29dqwMq+JhFdZn+1ak2FKhI9fQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-ppc64": "1.3.3"
      }
    },
    "node_modules/@img/sharp-linux-riscv64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-riscv64/-/sharp-linux-riscv64-0.35.4.tgz",
      "integrity": "sha512-cPbNChoRURAWdebDIHSenxRpgEdy7JkPydSnUxRm9VvKD7m0/xVaR/8Fzlu81pk5nHEvHH87UZUA7cTtwnbJSA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-riscv64": "1.3.3"
      }
    },
    "node_modules/@img/sharp-linux-s390x": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-s390x/-/sharp-linux-s390x-0.35.4.tgz",
      "integrity": "sha512-RY0JFY8Fd6RonCBtHz+DvadaPkXDSI1AUn6yWL9TipqkZ1vY8w8evqdgyDFnkm4/K1ve1TvZiaePP5oSd4+WVQ==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-s390x": "1.3.3"
      }
    },
    "node_modules/@img/sharp-linux-x64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-x64/-/sharp-linux-x64-0.35.4.tgz",
      "integrity": "sha512-9qvvEAuk8k89TfWUoX2htWjbAMX8p+NxCppjpcg5k6xMsjhBQPTsoIh36h9Qde4WRuGpJeYnOjdosDn/cnv+OA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-x64": "1.3.3"
      }
    },
    "node_modules/@img/sharp-linuxmusl-arm64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-arm64/-/sharp-linuxmusl-arm64-0.35.4.tgz",
      "integrity": "sha512-KB5jxpfWQTr0nc3xdHtWChdbifHrBGsd2SM62Eyxrl8afikm+f5qGBU75SJIZBT/S1MC8XyacdlXBMSWq6OURA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-arm64": "1.3.3"
      }
    },
    "node_modules/@img/sharp-linuxmusl-x64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-x64/-/sharp-linuxmusl-x64-0.35.4.tgz",
      "integrity": "sha512-f+eZJZIQNEEd26RPSW+76chwOf1XtA2Y/O+5ocVyLliHkeih3e+jhLVBdNTd2rS3IbNXK8+ug93Vf5ZXtF5Lxg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-x64": "1.3.3"
      }
    },
    "node_modules/@img/sharp-wasm32": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-wasm32/-/sharp-wasm32-0.35.4.tgz",
      "integrity": "sha512-zQnl4Kwp7Q6NHsENtU2T/00Zi+w3AQNwz3+UaTyVBy2FpXrzXzGjndpK61onhZjRtRpQXxCTeqw19bVyXOh7jA==",
      "dev": true,
      "license": "Apache-2.0 AND LGPL-3.0-or-later AND MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/runtime": "^1.11.3"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-webcontainers-wasm32": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-webcontainers-wasm32/-/sharp-webcontainers-wasm32-0.35.4.tgz",
      "integrity": "sha512-ESfNkywmCfPNyaZjxooddJQiQ+l/nTpGEOGthxiLnIHXC/CmcBixnfwUleX9mCz9ovrUUvKMap/pm8RYbzfwaA==",
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "Apache-2.0",
      "optional": true,
      "dependencies": {
        "@img/sharp-wasm32": "0.35.4"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-arm64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-arm64/-/sharp-win32-arm64-0.35.4.tgz",
      "integrity": "sha512-iNdlBX9gLVvqe2I3uIJSIKTq6wckP/DYxZtcqxm09x5Gi24DnFBmPAWZmr60ZyYMG0xlzo6goG3670ar+RXvRw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-ia32": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-ia32/-/sharp-win32-ia32-0.35.4.tgz",
      "integrity": "sha512-kqRsbaa5CS6KHlpxnN7WhE6vAAugXyZButpRdvDWetlv6Qv4N9WTcrWzF7tXfB9T7MsoadqdI8hmwLq6UlLvtw==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-x64": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-x64/-/sharp-win32-x64-0.35.4.tgz",
      "integrity": "sha512-XtmnYhBcrORsJ4XJngyzr/EWP0hRZLAZRFaApdKuviyqF78+ylxh2y06ZmtULAMOnObJ3ucpN0AcwSWnMowTRg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.6.0.tgz",
      "integrity": "sha512-T7jf+5zgsZHwNJ4lvQ7/aezbyk0nNX+zJVWpmHA7VYsEx7a7qr5Rg5IbtJFqkgze5Y2sruq1RUY8Q837Od7iFw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@napi-rs/lzma-linux-x64-gnu": {
      "version": "1.5.1",
      "resolved": "https://registry.npmjs.org/@napi-rs/lzma-linux-x64-gnu/-/lzma-linux-x64-gnu-1.5.1.tgz",
      "integrity": "sha512-oTXEIha4SsuXdTA4Iyskj0kpdx2yVXdhd75c2v3xGrHFfVMsbhTPZU/nMPL4sWKo4pBHm3aucLaqGlF696dTyQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^22.20 || ^24.12 || >=25"
      }
    },
    "node_modules/@playwright/test": {
      "version": "1.63.0",
      "resolved": "https://registry.npmjs.org/@playwright/test/-/test-1.63.0.tgz",
      "integrity": "sha512-oxMK4vllB9RK5NQ2l1pq1IfOf2AvnEuj/vYGDj0H2nMtmtZpKtCwt/l00GEO6xjGfpBNAvjovvYdCm50dRQkpQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "playwright": "1.63.0"
      },
      "bin": {
        "playwright": "cli.js"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.0-rc.3",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.0-rc.3.tgz",
      "integrity": "sha512-eybk3TjzzzV97Dlj5c+XrBFW57eTNhzod66y9HrBlzJ6NsCrWCp/2kaPS3K9wJmurBC0Tdw4yPjXKZqlznim3Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@rollup/rollup-android-arm-eabi": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.63.3.tgz",
      "integrity": "sha512-w3Jnvi1ocaVm/c7yVPpfB98XeSRBMyzp6njL5MVVbGyXjpmUkN+s6Hp4t0PqhGCCaI1ZHMKXt/w0lA1RCaLVcw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-android-arm64": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.63.3.tgz",
      "integrity": "sha512-uI/ESiaIbbRYAEhzy8PCUWDp1hB0bjAqM06mW9flOoNO4Q8DQpeoREhBR5Hegfl+wpXiguyJv6XSPzEN7OxyHQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-darwin-arm64": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.63.3.tgz",
      "integrity": "sha512-oxhrd1jmXLwWZ83eQYDXxuqRdkqkzrjR3JobKeuUyfdNZo11FuQIvqEOZhyIT7OBHxXoGslDDjN0cQcM6T0TqQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-darwin-x64": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.63.3.tgz",
      "integrity": "sha512-7/YiIMghVE8DrxKvNdorAaJVdriOFgOIpdStnPx8ppx5zfTwC3jBCSEAIzB7JD5404m65THl6H93UTTVUvypmg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-arm64": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.63.3.tgz",
      "integrity": "sha512-GXFZRRoMAytaI5z6N3Zhfw0WL18Q0M8r95D5hlC4GqE/lGk8pbSJNUBoOWDfbm6dTciqHj2nU87tI5f6XhQiOg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-x64": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.63.3.tgz",
      "integrity": "sha512-77W+8X3ddYgPxUpB8nZFQs2Mq+wc4HVlcSRtApXLjYBcnPMkttrSnU8VwKQjeWYhMsITHFs5cWBQ8vz1Q+5RHQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.63.3.tgz",
      "integrity": "sha512-FVkwK+iUC+mq+GipVK46rRVticfAPtvPUNlqlGXUDxdVk/UGjQiiiUVPUrEXdSpU2ufU0XxLGyTqDtBidDOVmg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-musleabihf": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.63.3.tgz",
      "integrity": "sha512-+aGU1t3398yQOVj1Bz8o3e+KtswxAPvO+mtxtNdfXYMkXIHu7XhhkCD7/DEH9q8tF8uhDnMWvfpUKI8y1sZJsg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-gnu": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.63.3.tgz",
      "integrity": "sha512-cR0kjpRXR2KJ2oQK8E2KTPtphs+b9hZ8IhTZubNryt/RsqgdOZBQ2Zq0q5UedtiIi0rs3jVhJh55RE1ZHUVGUA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-musl": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.63.3.tgz",
      "integrity": "sha512-y1RYi4Q3/9ByVWSSt9kX2ustE0B7kFYbJ6zZdVZVyqopZs3yhCTwRfrjIX4vezUJInma/Gs6BOFDJg7yZmJ0IQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-loong64-gnu": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-gnu/-/rollup-linux-loong64-gnu-4.63.3.tgz",
      "integrity": "sha512-DNhEA5viIj3Z5bZLE4z4oV8N5ozWqDwyt7T6KG7VdLDJ0nW+rNOYlphBl4/3HQkK75qipPLsVOfStHHOwN9WSg==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-loong64-musl": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-musl/-/rollup-linux-loong64-musl-4.63.3.tgz",
      "integrity": "sha512-17gQCqrIpXBX2Cmi9/TygnVOqGbzsba/iaqcYSL8FY7lNugg+7AiYNs5c5nKWD+NRQha36Sa0CqkJqH4XVHwnQ==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-ppc64-gnu": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-gnu/-/rollup-linux-ppc64-gnu-4.63.3.tgz",
      "integrity": "sha512-6LwVnZRIyINpdku/yOcI8Tm9YqLmhHK5emmlOOnW9tO0SYEm1FmKPcsSAGp0NBlqR2P04xaND4jvN6sTHqhq8A==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-ppc64-musl": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-musl/-/rollup-linux-ppc64-musl-4.63.3.tgz",
      "integrity": "sha512-xMUqkTXlEUtI/p5AAukMwBRr1enU3efsTeF+bskeFfk8t1C9rcC8sLREcZXmTfAXEbvRdJVSonVJez3TMlbR3w==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-gnu": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.63.3.tgz",
      "integrity": "sha512-S3E94co9F9WRRqEaUoQZ38K1gCz6KiM+nL7/3ijq7fDGF3OznjS5TasgYITlvl27GQKtu4lOAOsr5MFwkijvOA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-musl": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-musl/-/rollup-linux-riscv64-musl-4.63.3.tgz",
      "integrity": "sha512-1QtRDwG42x5BJI3s9mxu5rEjDnfbSnk20HQ9/ylTAYnSwYwxMVb+Vgu34wzzTQ7ogqBybebgQNUDAvZVQ38DbA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-s390x-gnu": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.63.3.tgz",
      "integrity": "sha512-BQhejF6ZXOpxbngiNTP12GCGQeaDVL2QXGeBVViKIYzFHM5RKxTxwUMB1fr1BeNFphFMpnRqC5QSXFSa4z6UQw==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-gnu": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.63.3.tgz",
      "integrity": "sha512-SXagRwnI2Wlwlitllu59UK/nGVbD1CKPcNqDplHwIC4BqJcpXFjD32d1R/RbuISa95HdQrZM3/7v4bKiowFaLA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-musl": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.63.3.tgz",
      "integrity": "sha512-2IPozoEALRCziGqE8O9KMK60PMu5TS1huv4fwoeCexj+WjmcwFtX9CTOVbfXCUqcELAubEwRFPYlzb/WvwY2HQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-openbsd-x64": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-openbsd-x64/-/rollup-openbsd-x64-4.63.3.tgz",
      "integrity": "sha512-AoxqosUHT9IX54hFn2TiN6A7d6ZKTtE6pd2bqWtqkkNJ6HJGaU6FRouGX8L1O7R/ZwsnCnpQrHzb4pDEx+UHRQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ]
    },
    "node_modules/@rollup/rollup-openharmony-arm64": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-openharmony-arm64/-/rollup-openharmony-arm64-4.63.3.tgz",
      "integrity": "sha512-d+CaftKgmkFBzCwezMqqy1d0QNNYugqLCMcYVQWBy5SS2YfeMP8Q8ripkgx9O8IyBXXLHrJ+aaCV4U96usv6Yg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ]
    },
    "node_modules/@rollup/rollup-win32-arm64-msvc": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.63.3.tgz",
      "integrity": "sha512-xXlDF6nR1eOuXbdDy5Hl5fmtY7teUDevF/k0O7IPoZe4Tpmdv+lgdE5JRsnhQtt37ql9P0VF2kAN9a0OCZdo+Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-ia32-msvc": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.63.3.tgz",
      "integrity": "sha512-YtXAgLN+JP7Ay6qG3eWhc7IHMQPzLc8r3uvhAvlJIoCz/4Q32+Bl9Fmnywidh8v1GOIMmymjovfqY9ETAtysvA==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-gnu": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-gnu/-/rollup-win32-x64-gnu-4.63.3.tgz",
      "integrity": "sha512-WuWtSJRNo549vzcfZyEgfqb6zeSgn1F+UE5kQ+BCjzz0W4MGCjntUHkZVc1VRuAM7+ULaSyhiPxD1spyewFvkQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-msvc": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.63.3.tgz",
      "integrity": "sha512-+lIKX7O0+IGe7WuhATaAMMeT7B76vfhXH/l9wLQL+nvyhbw2ohYCKIdWL56JfDu75CWt5oKRP4QFH/jkMtBquA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@types/babel__core": {
      "version": "7.20.5",
      "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.20.5.tgz",
      "integrity": "sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.20.7",
        "@babel/types": "^7.20.7",
        "@types/babel__generator": "*",
        "@types/babel__template": "*",
        "@types/babel__traverse": "*"
      }
    },
    "node_modules/@types/babel__generator": {
      "version": "7.27.0",
      "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.27.0.tgz",
      "integrity": "sha512-ufFd2Xi92OAVPYsy+P4n7/U7e68fex0+Ee8gSG9KX7eo084CWiQ4sdxktvdl0bOPupXtVJPY19zk6EwWqUQ8lg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__template": {
      "version": "7.4.4",
      "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.4.tgz",
      "integrity": "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__traverse": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.28.0.tgz",
      "integrity": "sha512-8PvcXf70gTDZBgt9ptxJ8elBeBjcLOAcOtoO/mPJjtji1+CdGbHgm77om1GrsPxsiE+uXIpNSK64UYaIwQXd4Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.2"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.9.tgz",
      "integrity": "sha512-GhdPgy1el4/ImP05X05Uw4cw2/M93BCUmnEvWZNStlCzEKME4Fkk+YpoA5OiHNQmoS7Cafb8Xa3Pya8m1Qrzeg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "22.20.2",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-22.20.2.tgz",
      "integrity": "sha512-xlvWf4Vs9n1PEVYwP1n4vvG07M6y8WgvJ2t0vbrWTmijsIHp1cS+uJ2kMIRdY3nHZK0nCYKrPeD171+SzF4/zw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@types/react": {
      "version": "19.3.0",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.3.0.tgz",
      "integrity": "sha512-N0rFCuH9YoxG9/m61l9MfpJKfmLOVU0em7ipIz6TRgSSkvReLB9vL85GB+yr8Bs5leqpvg96JSwF4ZS1s4viQg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.3.0",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.3.0.tgz",
      "integrity": "sha512-ZI7bU42mZXXKHn/qNLEw2IrbiINU7X5+vfgdixBHkCNpYWXjKgfQ/P+uyGb5CjOLB9UcnTeg3rylQtV2hym44Q==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.3.0"
      }
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-5.2.0.tgz",
      "integrity": "sha512-YmKkfhOAi3wsB1PhJq5Scj3GXMn3WvtQ/JC0xoopuHoXSdmtdStOpFrYaT1kie2YgFBcIe64ROzMYRjCrYOdYw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.29.0",
        "@babel/plugin-transform-react-jsx-self": "^7.27.1",
        "@babel/plugin-transform-react-jsx-source": "^7.27.1",
        "@rolldown/pluginutils": "1.0.0-rc.3",
        "@types/babel__core": "^7.20.5",
        "react-refresh": "^0.18.0"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "vite": "^4.2.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/@yummacss/canon": {
      "version": "3.31.1",
      "resolved": "https://registry.npmjs.org/@yummacss/canon/-/canon-3.31.1.tgz",
      "integrity": "sha512-jhCdWRr7ii20sLo2FWgttusNcYdCkLtzhEpwUV4lVMvk6CCr/sMBda/2SQI0SJ7FAeoHcUC2m+3IrE/omY8Lkg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@yummacss/nitro": "3.31.1",
        "tinyglobby": "^0.2.15"
      },
      "bin": {
        "yummacss-canon": "dist/cli.mjs"
      }
    },
    "node_modules/@yummacss/core": {
      "version": "3.31.1",
      "resolved": "https://registry.npmjs.org/@yummacss/core/-/core-3.31.1.tgz",
      "integrity": "sha512-GCgvpP5KI+gsZdLI1XD444yHy4iqLFRY5MZfgg6HEkfd9Km3sey/rWQ8k1OiUkfnziIJe+b4UrWK43f78jGUdA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@yummacss/nitro": {
      "version": "3.31.1",
      "resolved": "https://registry.npmjs.org/@yummacss/nitro/-/nitro-3.31.1.tgz",
      "integrity": "sha512-Ys1MNEea5rfmryi/EiljB1Ckb2NyHY+FIdvJNnINtLbTzbgnvdeP0L0NOEy6OZFczaUSV/ukB1RW5Ppicm6V/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@yummacss/core": "3.31.1",
        "tinyglobby": "^0.2.15",
        "zod": "^4.3.4"
      }
    },
    "node_modules/@yummacss/vite": {
      "version": "3.31.1",
      "resolved": "https://registry.npmjs.org/@yummacss/vite/-/vite-3.31.1.tgz",
      "integrity": "sha512-Ed8EYnvYVIC1onlzrPh1DVFfwgradmw+YkJgfldh+7ZEYntGDuJeM00qF6bxWfMSHRXuOguuV5DT3xGiIMn8aw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@yummacss/nitro": "3.31.1",
        "picomatch": "^4.0.4"
      },
      "peerDependencies": {
        "vite": "^5.0.0 || ^6.0.0 || ^7.0.0"
      }
    },
    "node_modules/axe-core": {
      "version": "4.13.0",
      "resolved": "https://registry.npmjs.org/axe-core/-/axe-core-4.13.0.tgz",
      "integrity": "sha512-UzGt8zg7Ny8djbYMhxl2zuEevVa7r2gJjYY5Lwr1xM7+XU2nd6CkIWFTVcCIbAP63vSz71NaVyyuSk9lHKcy0A==",
      "dev": true,
      "license": "MPL-2.0",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.11.24",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.11.24.tgz",
      "integrity": "sha512-hYrgxie335U08WqICoGqKRzV1HFXv6zdxwJE4ekCb80CM9a0SVVsN4QPwT67RraRo+9h8IATk6uxHJw7QSkdOg==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.cjs"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/browserslist": {
      "version": "4.29.0",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.29.0.tgz",
      "integrity": "sha512-3GSvyjvDI4Dur1Meg2BekJquu5uF+9R9a1+5M1Mde192eZoXbeXjzgOsgqPS2V8D5wrrip0gR5Hf/GhWQ9ZzaA==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.11.23",
        "caniuse-lite": "^1.0.30001810",
        "electron-to-chromium": "^1.5.427",
        "node-releases": "^2.0.55",
        "update-browserslist-db": "^1.3.3"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001810",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001810.tgz",
      "integrity": "sha512-TITQPUkaz+aVk5GL6NhOdwk1aEaNTSDPsGFWrTuhKGtjTF70jL/Oht2W4c6rXUe5fu7Ie19VIahAXHIIiWWNeg==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.429",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.429.tgz",
      "integrity": "sha512-/1ENIE3cx4HTIx4IfPZFaOunJmsrSVTnj6coXoRVbiJUbkeTyFkJvBeWGkdgh08OhFbxYLMT1kbkwFVSarq6Ow==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/esbuild": {
      "version": "0.28.2",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.28.2.tgz",
      "integrity": "sha512-HKVLS8dvII+xoKW9kmqxbRKrnWEXfJJr/FZhhJmiqIB0e053QNYFqOBouTMO/k5sID4MvCiUCvv8b9M4h32wIA==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.28.2",
        "@esbuild/android-arm": "0.28.2",
        "@esbuild/android-arm64": "0.28.2",
        "@esbuild/android-x64": "0.28.2",
        "@esbuild/darwin-arm64": "0.28.2",
        "@esbuild/darwin-x64": "0.28.2",
        "@esbuild/freebsd-arm64": "0.28.2",
        "@esbuild/freebsd-x64": "0.28.2",
        "@esbuild/linux-arm": "0.28.2",
        "@esbuild/linux-arm64": "0.28.2",
        "@esbuild/linux-ia32": "0.28.2",
        "@esbuild/linux-loong64": "0.28.2",
        "@esbuild/linux-mips64el": "0.28.2",
        "@esbuild/linux-ppc64": "0.28.2",
        "@esbuild/linux-riscv64": "0.28.2",
        "@esbuild/linux-s390x": "0.28.2",
        "@esbuild/linux-x64": "0.28.2",
        "@esbuild/netbsd-arm64": "0.28.2",
        "@esbuild/netbsd-x64": "0.28.2",
        "@esbuild/openbsd-arm64": "0.28.2",
        "@esbuild/openbsd-x64": "0.28.2",
        "@esbuild/openharmony-arm64": "0.28.2",
        "@esbuild/sunos-x64": "0.28.2",
        "@esbuild/win32-arm64": "0.28.2",
        "@esbuild/win32-ia32": "0.28.2",
        "@esbuild/win32-x64": "0.28.2"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.19",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.19.tgz",
      "integrity": "sha512-Y2tUNy4ouw6tq5oDSKeQYGOyhkUBhNOcGV/02KC+6kd9eDGqdZd++mjMiIDilrBYvjEnCYvVtsuHCuP+okSfug==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/node-releases": {
      "version": "2.0.55",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.55.tgz",
      "integrity": "sha512-mIrE/Cw9y+9Au6dS5vDKDhQza9YvG6w+ZrS6X+ZzA7yFW/soAeaups4Qzn1bL6g5FVy8WtP79+0j82oPIbqRjQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.7",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.7.tgz",
      "integrity": "sha512-qcJu88Q2IWqJsDD529JKMdwGm/dvInW4HvQnRwiH9JtihJvzGOscDtHE3x1pBKeUOTysQ8kVmLnJ2kJu7yhcGA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/playwright": {
      "version": "1.63.0",
      "resolved": "https://registry.npmjs.org/playwright/-/playwright-1.63.0.tgz",
      "integrity": "sha512-+7ziBLidS4NaNCdt57SUDT+wYmmd5fmiQejUic/kb+YsYSCPyOOE9sebzMjNmQrsnNpDJqd4WHvV/8lfKfUDUg==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "playwright-core": "1.63.0"
      },
      "bin": {
        "playwright": "cli.js"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/playwright-core": {
      "version": "1.63.0",
      "resolved": "https://registry.npmjs.org/playwright-core/-/playwright-core-1.63.0.tgz",
      "integrity": "sha512-rYCsBF/M5HjUch52bbtVONEFjv6Xu8sm8h72dNlR5bzIE1fvC/bxgspzkjSfU+MweEMmPM8KJebG6nnyxo5mCg==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "playwright-core": "cli.js"
      },
      "engines": {
        "node": ">=20"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.28",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.28.tgz",
      "integrity": "sha512-RRuzqDtt5Y9h3quz5hWhK+TPnsmVs6WwSU6LkJMeY4HstUEDuYTG8UJSdawMRzmzAtV+KEoG8N3Qg2qLy5vM/A==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.18",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/react": {
      "version": "19.3.0",
      "resolved": "https://registry.npmjs.org/react/-/react-19.3.0.tgz",
      "integrity": "sha512-E8LUcbtBWt20bbl2YoHfx4ZDBdxVTfOKtCZn9cDSJ4l6/nuoApcpIBcj47t2wZoVX8g2ZHuMHbiShgCR1T5Sog==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.3.0",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.3.0.tgz",
      "integrity": "sha512-JDk8dgif51OjFoDE70+OT9ICyYr+69HlmihNwp1+Nsfbna3t5sIiCa9ZJktDmQ4/1b/rn26hIAR2uYXDMr5r0Q==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.28.0"
      },
      "peerDependencies": {
        "react": "^19.3.0"
      }
    },
    "node_modules/react-refresh": {
      "version": "0.18.0",
      "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.18.0.tgz",
      "integrity": "sha512-QgT5//D3jfjJb6Gsjxv0Slpj23ip+HtOpnNgnb2S5zU3CB26G/IDPGoy4RJB42wzFE46DRsstbW6tKHoKbhAxw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/rollup": {
      "version": "4.63.3",
      "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.63.3.tgz",
      "integrity": "sha512-1i2XreiAoMMXuPGD6Msj2xWrMMkHojNRKivInxGQcg7/1KuPuYlfUutLyh4drnOxUTHX9cHI4wFoat8D/NKaBw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "1.0.9"
      },
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "@napi-rs/lzma-linux-x64-gnu": "1.5.1",
        "@rollup/rollup-android-arm-eabi": "4.63.3",
        "@rollup/rollup-android-arm64": "4.63.3",
        "@rollup/rollup-darwin-arm64": "4.63.3",
        "@rollup/rollup-darwin-x64": "4.63.3",
        "@rollup/rollup-freebsd-arm64": "4.63.3",
        "@rollup/rollup-freebsd-x64": "4.63.3",
        "@rollup/rollup-linux-arm-gnueabihf": "4.63.3",
        "@rollup/rollup-linux-arm-musleabihf": "4.63.3",
        "@rollup/rollup-linux-arm64-gnu": "4.63.3",
        "@rollup/rollup-linux-arm64-musl": "4.63.3",
        "@rollup/rollup-linux-loong64-gnu": "4.63.3",
        "@rollup/rollup-linux-loong64-musl": "4.63.3",
        "@rollup/rollup-linux-ppc64-gnu": "4.63.3",
        "@rollup/rollup-linux-ppc64-musl": "4.63.3",
        "@rollup/rollup-linux-riscv64-gnu": "4.63.3",
        "@rollup/rollup-linux-riscv64-musl": "4.63.3",
        "@rollup/rollup-linux-s390x-gnu": "4.63.3",
        "@rollup/rollup-linux-x64-gnu": "4.63.3",
        "@rollup/rollup-linux-x64-musl": "4.63.3",
        "@rollup/rollup-openbsd-x64": "4.63.3",
        "@rollup/rollup-openharmony-arm64": "4.63.3",
        "@rollup/rollup-win32-arm64-msvc": "4.63.3",
        "@rollup/rollup-win32-ia32-msvc": "4.63.3",
        "@rollup/rollup-win32-x64-gnu": "4.63.3",
        "@rollup/rollup-win32-x64-msvc": "4.63.3",
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/scheduler": {
      "version": "0.28.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.28.0.tgz",
      "integrity": "sha512-juorfCmIkIw8tT+p5BXSm6PJjQF/ycEYmKyzURCIt/RaZIhL+PulbQ9Yu2z1HdOJDdqDTlxA1+xKBmHXJsczAw==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/sharp": {
      "version": "0.35.4",
      "resolved": "https://registry.npmjs.org/sharp/-/sharp-0.35.4.tgz",
      "integrity": "sha512-n++8XWcj+jCOr2IOl7h8LbKnGBDY4aPbmprMONBNFdn0ImXqpGVv5zliDs0V9HbmbCQLpbuo2ej9rAoOQTvMDA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@img/colour": "^1.1.0",
        "detect-libc": "^2.1.2",
        "semver": "^7.8.5"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-darwin-arm64": "0.35.4",
        "@img/sharp-darwin-x64": "0.35.4",
        "@img/sharp-freebsd-wasm32": "0.35.4",
        "@img/sharp-libvips-darwin-arm64": "1.3.3",
        "@img/sharp-libvips-darwin-x64": "1.3.3",
        "@img/sharp-libvips-linux-arm": "1.3.3",
        "@img/sharp-libvips-linux-arm64": "1.3.3",
        "@img/sharp-libvips-linux-ppc64": "1.3.3",
        "@img/sharp-libvips-linux-riscv64": "1.3.3",
        "@img/sharp-libvips-linux-s390x": "1.3.3",
        "@img/sharp-libvips-linux-x64": "1.3.3",
        "@img/sharp-libvips-linuxmusl-arm64": "1.3.3",
        "@img/sharp-libvips-linuxmusl-x64": "1.3.3",
        "@img/sharp-linux-arm": "0.35.4",
        "@img/sharp-linux-arm64": "0.35.4",
        "@img/sharp-linux-ppc64": "0.35.4",
        "@img/sharp-linux-riscv64": "0.35.4",
        "@img/sharp-linux-s390x": "0.35.4",
        "@img/sharp-linux-x64": "0.35.4",
        "@img/sharp-linuxmusl-arm64": "0.35.4",
        "@img/sharp-linuxmusl-x64": "0.35.4",
        "@img/sharp-webcontainers-wasm32": "0.35.4",
        "@img/sharp-win32-arm64": "0.35.4",
        "@img/sharp-win32-ia32": "0.35.4",
        "@img/sharp-win32-x64": "0.35.4"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        }
      }
    },
    "node_modules/sharp/node_modules/semver": {
      "version": "7.8.5",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.5.tgz",
      "integrity": "sha512-Y7/KDsb8LjooZpwaqGyulO6DQlksgCncchHGk+sZIY4SBvUocMBEFH5Ur1fI4dV+Jvl0w6cjvucaIi40puRioA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.17",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.17.tgz",
      "integrity": "sha512-wXR/dYpcqKmfWpEdZjiKJOwCNFndD0DMnrW/cYjVGttEkBfVgcLFHoNrlj47mjOVic9yyNu65alsgF4NQyTa2g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "dev": true,
      "license": "0BSD",
      "optional": true
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/undici-types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/update-browserslist-db": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.3.3.tgz",
      "integrity": "sha512-pJ2sYawQS0R/WI928Gj5GlPhTGzbMelq0+4INtSYNDV9ErKJcX6xjGWkoG/VnB3dpUm00zALaqkrUD77pO5TDQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/vite": {
      "version": "7.3.6",
      "resolved": "https://registry.npmjs.org/vite/-/vite-7.3.6.tgz",
      "integrity": "sha512-4XP60spRGjSZFf1qYH+dJIkK2znL3zQfl9KkOV9MkkRR/3Dls0dxaBsQPTloEc5BLXWPL9vsOxopxyKoMmDueg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "esbuild": "^0.27.0 || ^0.28.0",
        "fdir": "^6.5.0",
        "picomatch": "^4.0.3",
        "postcss": "^8.5.6",
        "rollup": "^4.43.0",
        "tinyglobby": "^0.2.15"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "lightningcss": "^1.21.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yummacss": {
      "version": "3.31.1",
      "resolved": "https://registry.npmjs.org/yummacss/-/yummacss-3.31.1.tgz",
      "integrity": "sha512-QZYfjpMLOW4KxnuQsbmv6OF8boGF9cnWHWSa3ctmLzxqrZcfdkORe7+PeJVtXol3KIzIGYVYYGICUc/MQ+Zegw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@yummacss/core": "3.31.1",
        "@yummacss/nitro": "3.31.1"
      },
      "bin": {
        "yummacss": "dist/cli.mjs"
      }
    },
    "node_modules/zod": {
      "version": "4.6.5",
      "resolved": "https://registry.npmjs.org/zod/-/zod-4.6.5.tgz",
      "integrity": "sha512-v5l/aFXZQeai4awLbOpSoHecE9UiMrnfx75tEXLjNonXVARxQ5mOeipTjROUchszUNCqnE+hqAMujRsRHsut2Q==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    }
  }
}

``````

## index.html

``````
<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!--app-head-->
    <meta name="theme-color" content="#f6f3f1" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />
  </head>
  <body class="bg-parchment c-ink ff-m fs-md lh-4">
    <div id="root"><!--app-html--></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

``````

## tsconfig.json

``````
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "react-jsx",
    "strict": true,
    "noEmit": true,
    "skipLibCheck": true,
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "types": ["vite/client", "node"]
  },
  "include": ["src", "vite.config.ts", "playwright.config.ts", "tests"]
}

``````

## vite.config.ts

``````
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import yummacss from '@yummacss/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const origin = env.SITE_URL || 'https://fieldwork.example';
  const email = env.CONTACT_EMAIL || 'hello@fieldwork.example';
  const url = new URL(origin);
  if (url.protocol !== 'https:' || url.pathname !== '/' || url.search || url.hash) {
    throw new Error('SITE_URL must be an HTTPS origin without a path, query or fragment.');
  }
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    throw new Error('CONTACT_EMAIL must be a valid email address.');
  }
  return {
    plugins: [react(), yummacss()],
    define: {
      __SITE_URL__: JSON.stringify(url.origin),
      __CONTACT_EMAIL__: JSON.stringify(email)
    },
    build: { sourcemap: false, target: 'es2022' },
    server: { port: 5173, strictPort: true }
  };
});

``````

## yumma.config.mjs

``````
import { defineConfig } from 'yummacss';

export default defineConfig({
  source: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      parchment: '#f6f3f1',
      ink: '#242424',
      graphite: '#51504d',
      smoke: '#69645f',
      ash: '#ccc6bf',
      lake: '#2b59d1',
      moss: '#dce0d4',
      clay: '#e9d8cd',
      mist: '#dce2e5'
    },
    screens: { compact: '24rem' }
  }
});

``````

## playwright.config.ts

``````
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 3,
  timeout: 45000,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: { baseURL: 'http://127.0.0.1:4173', trace: 'retain-on-failure' },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    { name: 'mobile-webkit', use: { ...devices['iPhone 13'] } }
  ],
  webServer: { command: 'npm run preview', url: 'http://127.0.0.1:4173', reuseExistingServer: true, timeout: 30000 }
});

``````

## README.md

``````
# Fieldwork

An original, responsive marketing agency website built with Vite, React, TypeScript and Yumma CSS. Fieldwork is fictional. All three case studies and all metrics are expressly labelled as concepts or illustrations.

## Design rationale

The page borrows its rhythm from an independent journal: a large serif headline, monospaced annotations, numbered sections and fine horizontal rules. The asymmetric desktop layout becomes a single readable column on phones. Typography samples demonstrate the fictional projects' messaging without stock images, invented client logos or dashboard mockups. Lake blue appears on the primary action; parchment, graphite, ash and muted project surfaces carry the rest.

System serif and monospace stacks use Yumma's documented `ff-s` and `ff-m` utilities. This avoids third-party font requests, layout shifts from font loading and a separate font stylesheet. Native `details` and `summary` cover the disclosures accessibly. Yumma UI would add no useful capability for this scope, so no components or component dependencies were copied.

## Requirements

- Node.js 22.12 or later. Tested with 22.19.
- npm. Use the included lockfile for reproducible installation.

## Install and run

```sh
npm ci
npm run dev
```

The development server uses port 5173. If that port is occupied:

```sh
npm run dev -- --port 5174
```

Production build and local production server:

```sh
npm run build
npm run preview
```

The production preview runs at http://127.0.0.1:4173. It serves the built files, negotiates Brotli or gzip, applies caching and security headers, redirects `/index.html` to `/`, and responds to unknown routes with a rendered 404 and HTTP status 404. It is deliberately different from Vite's generic 200 fallback.

## Validation

```sh
npm run typecheck
npm run validate
npx yummacss-canon --config yumma.config.mjs
npm run check
npx playwright install chromium firefox webkit
npm test
npm run check:launch
```

`npm run build` includes TypeScript, Canon, asset generation, client bundling, server rendering, prerendering and compression. Canon scans `index.html` and every `.ts` and `.tsx` file under `src`, with no allowlist. `src/styles.css` contains only the required `@yummacss;` marker.

`check:launch` intentionally exits nonzero with the approved demo domain and email. It prevents these from silently passing a launch review.

## Public configuration

Copy `.env.example` to `.env` and set:

```dotenv
SITE_URL=https://fieldwork.example
CONTACT_EMAIL=hello@fieldwork.example
```

These are the user-approved placeholders. Replace them with an owned HTTPS origin and a monitored inbox before a public launch, then rebuild. Only these two public values are embedded in the application. Other environment variables are never copied to the browser. The example email link opens a draft; delivery to that reserved address is not possible. The website states that the inbox is not monitored. There is no pretend form or simulated submission.

## Routes and metadata

- `/`: prerendered home page, canonical URL, description, social metadata and explicitly fictional Organization JSON-LD.
- `/index.html`: permanent redirect to `/` on the supplied server.
- Unknown paths: custom 404 content, an HTTP 404 response and a path-specific title, description and canonical URL on the supplied server.
- `dist/404.html`: static fallback for hosting providers that support a custom error document. In a static deployment the error document's initial metadata is generic; the browser updates it to the requested path. The supplied Node server renders the requested path before responding.

Home content and native disclosures are readable before JavaScript loads. JavaScript hydrates React and handles the mobile navigation. Hash navigation remains ordinary browser navigation. No routing dependency is needed because there is one content route.

## Social images and icons

Every build automatically generates `og.png`, an original 1200 by 630 typographic social image, from SVG presentation attributes through sharp. `og-fallback.png` is a checked-in independent fallback. If primary generation fails, the generator copies that fallback to the primary URL. Both are declared as Open Graph image candidates.

The generator also writes an SVG favicon, a multi-resolution ICO, a 32px PNG, a 180px Apple touch icon and 192px/512px manifest icons. There are no content-image downloads. The on-page concept specimens are accessible HTML text, so responsive raster assets are unnecessary.

## Deployment and privacy

The deliverable is the local project and production build. It has not been published to a real domain.

### Supplied Node server

Run `npm run build` during deployment, retain `dist`, `.build`, `scripts/serve.mjs` and the production React dependencies, and start `npm run preview`. `HOST` and `PORT` control the listener. Put an HTTPS reverse proxy in front, or set `TLS_CERT` and `TLS_KEY` to certificate and private-key file paths. Private key material stays on the server. The server adds HSTS only for its own HTTPS connections; configure HSTS on a terminating reverse proxy separately.

### Static hosting

Publish only `dist`. `_headers` and `_redirects` provide provider-specific conventions for hosts supporting those files. Configure other hosts to serve `/` normally, redirect `/index.html` to `/`, serve existing assets directly and use `404.html` with status 404 for everything else. Do not send every unknown path to the home document with a 200 status. Verify the chosen host's fallback rules before launch.

Content-hashed assets have a one-year immutable cache policy on the supplied server. HTML, icons, robots and sitemap revalidate. Brotli and gzip sibling files are generated for text assets. Other hosts must enable compression and equivalent cache policies themselves. Source maps are disabled for both Vite builds; no public `.map` files are emitted. The server render bundle lives outside `dist`.

No analytics, trackers, cookies, local storage, third-party fonts or external runtime scripts are used. No consent interface is necessary for this build's behaviour. A future analytics, form or embedded service integration requires its own privacy review.

Real-domain TLS, DNS, CDN behaviour, production variables and inbox delivery remain deployment checks. They cannot be verified against the reserved `.example` configuration.

## Project tree

```text
fieldwork/
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── playwright.config.ts
├── tsconfig.json
├── vite.config.ts
├── yumma.config.mjs
├── README.md
├── VALIDATION.md
├── src/
│   ├── App.tsx
│   ├── components.tsx
│   ├── data.ts
│   ├── entry-server.tsx
│   ├── env.d.ts
│   ├── main.tsx
│   ├── seo.ts
│   └── styles.css
├── scripts/
│   ├── check.mjs
│   ├── check-launch.mjs
│   ├── generate-assets.mjs
│   ├── prerender.mjs
│   └── serve.mjs
├── tests/
│   └── site.spec.ts
├── public/
│   ├── _headers
│   ├── _redirects
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── favicon-32.png
│   ├── apple-touch-icon.png
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── og.png
│   ├── og-fallback.png
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── artifacts/                  QA screenshots
├── dist/                       Generated public production files
└── .build/                     Private render bundle and HTML template
```

## Official references consulted

- [Yumma UI CLI](https://www.yummacss.com/ui/components/cli.md)
- [Yumma installation](https://www.yummacss.com/docs/installation.md)
- [Yumma configuration](https://www.yummacss.com/docs/configuration.md)
- [Yumma Canon](https://www.yummacss.com/docs/canon.md)
- [Yumma utility index](https://www.yummacss.com/llms.txt)
- [Media queries](https://www.yummacss.com/docs/media-queries.md)
- [Pseudo classes](https://www.yummacss.com/docs/pseudo-classes.md)
- Property references linked from the utility index for typography, spacing, layout, positioning, wrapping, outlines and borders.

All utility names are validated by Canon 3.31.1 against the installed Yumma compiler. No Tailwind syntax, custom utility classes, arbitrary value syntax, inline styles, CSS Modules or CSS-in-JS are used.

``````

## VALIDATION.md

``````
# Validation report

Validated on 15 September 2026 against the built production files.

## Results

| Check | Result |
| --- | --- |
| Vite development server | Runs on port 5174 because 5173 was already occupied |
| TypeScript strict check | Pass |
| Production client and render builds | Pass |
| Yumma Canon 3.31.1 | 8 files, 199 unique classes, all valid, no allowlist |
| Source and artifact audit | Pass: 18 source files and 33 public artifacts |
| Full browser suite | 20 tests passed, none skipped |
| Final asset and routing regression | 4 tests passed after the server redirect and sharp update |
| Accessibility | No axe WCAG 2 A/AA or WCAG 2.1 AA violations in tested states |
| npm audit | Zero known vulnerabilities after updating sharp to 0.35.4 |
| Launch configuration | Intentionally incomplete: approved example domain and email |

## Browser coverage

- Chromium / Chrome for Testing 153.
- Firefox 155.
- Playwright WebKit 26.6, desktop configuration.
- Playwright WebKit with iPhone 13 emulation.

WebKit is useful Safari engine coverage. These checks are not a claim of testing the shipping Safari application on macOS or a physical iPhone. Real-device Safari validation remains a launch check.

## Responsive and visual checks

- 320, 375, 640, 768, 1024 and 1440 CSS pixel widths.
- 667 by 375 landscape mobile.
- Primary CTA fully visible at 320 by 568.
- No horizontal document overflow at the tested widths.
- Full-page screenshots saved at 320, 375, 768 and 1440.
- Desktop and narrow hero screenshots inspected visually.
- Generated Open Graph image inspected visually.
- No overflow masking, transitions, animations or smooth scrolling.
- Reduced-motion emulation reports zero active animations.

System-font rendering varies slightly by OS. Real browser text-only enlargement and assistive-technology user testing were not performed. Narrow reflow, heading semantics, keyboard focus and automated accessibility checks were performed.

## Interaction and accessibility checks

- Exactly one meaningful h1 on home and 404.
- Semantic header, nav, main, section, article, figure, address and footer elements.
- Skip link receives visible focus and moves focus to main.
- Explicit natural-order link tab stops also work in the tested Windows WebKit build.
- Mobile menu announces expanded state, focuses its first link and closes on Escape with focus restored.
- Menu closes when using its close control, choosing an anchor or moving to desktop width.
- Case study and FAQ disclosures respond to Enter and Space.
- Expanded disclosure contents included in accessibility audits.
- Every internal hash target resolves.
- Logo and return-home links work.
- Contact links are valid mailto links. The recipient remains an approved reserved example address; message delivery has not been tested.
- No form or asynchronous user action is present, so form loading/success/error states do not apply.
- No runtime console errors or failed page network requests in the responsive tests.

## Metadata and production checks

- Prerendered home title, description, canonical, Open Graph, social image candidates and JSON-LD.
- Distinct 404 metadata; supplied server renders path-specific metadata.
- Direct unknown-route load and refresh both return HTTP 404.
- `/index.html` permanently redirects to `/` on the supplied server.
- Home and 404 each have exactly one h1.
- All favicon, social-image, robots, sitemap and manifest URLs return HTTP 200.
- ICO contains 16, 32 and 48 pixel images. PNG and social dimensions validated.
- Primary and fallback social images are 1200 by 630.
- No production noindex directive.
- Brotli response encoding and immutable hashed-asset caching verified on the supplied server.
- Both Vite builds disable source maps. No public map files or sourceMappingURL references.
- No private environment values are compiled into the browser.
- No third-party runtime scripts, cookies, storage, remote fonts or analytics.
- Security and cache headers are implemented in the server and supplied static-host header configuration.

## Final compliance checklist

- [x] Vite, React, TypeScript and documented Yumma utilities.
- [x] Configured palette, serif headings and monospaced supporting typography.
- [x] All requested sections plus a custom 404.
- [x] Editorial rows, square edges, fine rules and responsive layouts.
- [x] Original, explicitly fictional case studies and illustrative metrics.
- [x] No stock photography, invented client logos, testimonials or unverified results.
- [x] No gradients, blurs, shadows, rounded UI, pill shapes, bento layout or hover animations.
- [x] No prohibited punctuation or copywriting patterns in authored site content.
- [x] No custom CSS rules, inline styles, arbitrary values or other CSS framework.
- [x] Reusable components and data arrays.
- [x] Focus, skip navigation, accessible menu and native disclosures.
- [x] Working navigation and email-draft links.
- [x] Complete metadata, generated social image, fallback, favicon set, robots and sitemap.
- [x] Production build, Canon, browser, accessibility and dependency checks.
- [ ] Replace example domain and email before public launch.
- [ ] Verify real-domain HTTPS, DNS, hosting compression/caching and production variables after deployment.
- [ ] Verify inbox delivery and shipping Safari on actual Apple devices.

The three unchecked items depend on production details or devices that were not supplied. No deployment, real inbox or physical Safari test is implied by this report.

``````

## src/App.tsx

``````
import { approach, faqs, metrics, projects, services } from './data';
import { Arrow, Disclosure, Footer, Header, Label, TextLink } from './components';

function Hero() {
  return <section aria-labelledby="hero-heading" className="pt-8 pb-14 @md:pt-14 @md:pb-20">
    <div className="d-f fd-c @sm:fd-r jc-sb g-3 mb-7 @md:mb-12">
      <Label>Independent strategy & creative studio</Label>
      <p className="fs-xs c-smoke">London, UK / Open to the world</p>
    </div>
    <div className="d-g g-6 @md:g-8 @lg:gtc-12 @lg:g-6 ai-fe">
      <h1 id="hero-heading" className="ff-s fw-400 fs-5xl @compact:fs-6xl @md:fs-8xl @xl:fs-9xl ls-2 lh-1 @lg:gc-s-9">Good work.<br />Out in the <span className="fs-i">world.</span></h1>
      <div className="@lg:gc-s-3 @lg:pb-3 max-w-120">
        <p className="c-graphite lh-5">We help thoughtful businesses find their voice, shape their identity and make their next move.</p>
        <p className="d-none @lg:d-b mt-6 fs-sm c-smoke">Strategy, design and a sense<br className="d-none @lg:d-b" /> of what matters.</p>
      </div>
    </div>
    <div className="d-f fd-c @sm:fd-r ai-s @sm:ai-c g-5 @sm:g-8 mt-7 @md:mt-12">
      <a tabIndex={0} href="#contact" className="d-if ai-c jc-sb g-10 px-6 py-4 bg-lake c-white fs-sm br-0 fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">Start a conversation <Arrow /></a>
      <TextLink href="#work">Explore the work</TextLink>
      <p className="fs-xs c-graphite @lg:ml-auto">Enquiries welcome<br /><span className="c-smoke">Project timing agreed together</span></p>
    </div>
  </section>;
}

function ConceptExcerpt({ number }: { number: string }) {
  if (number === '01') return <div className="bg-moss p-6 @md:p-10 d-f fd-c jc-sb min-h-72 @md:min-h-88">
    <p className="fs-xs tt-u ls-4">A neighbourhood grocer / Concept 01</p>
    <p className="ff-s fs-5xl @md:fs-6xl lh-1 ls-2 py-8">Good food.<br />Close to home.</p>
    <p className="fs-xs">Around the corner. Around the table.</p>
  </div>;
  if (number === '02') return <div className="bg-clay p-6 @md:p-10 d-f fd-c jc-sb min-h-72 @md:min-h-88">
    <p className="fs-xs tt-u ls-4">An architecture practice / Concept 02</p>
    <p className="ff-s fs-5xl @md:fs-6xl fs-i lh-1 ls-2 py-8 ta-c">A home is a<br />way of living.</p>
    <p className="fs-xs ta-r">Spaces for the everyday.</p>
  </div>;
  return <div className="bg-ink c-parchment p-6 @md:p-10 d-f fd-c jc-sb min-h-72 @md:min-h-88">
    <p className="fs-xs tt-u ls-4">An arts programme / Concept 03</p>
    <p className="ff-s fs-5xl @md:fs-6xl lh-1 ls-2 py-8">Come<br /><span className="fs-i">as you are.</span></p>
    <p className="fs-xs">A little curiosity is all you need.</p>
  </div>;
}

function Work() {
  return <section id="work" tabIndex={-1} aria-labelledby="work-heading" className="btw-1 bc-ash py-10 @md:py-16">
    <div className="d-f fd-c @md:fd-r jc-sb @md:ai-fe g-5 mb-10">
      <div><Label>01 / Selected work</Label><h2 id="work-heading" className="ff-s fw-400 fs-4xl @md:fs-5xl ls-2 mt-4">Ideas, put into practice.</h2></div>
      <p className="fs-xs c-smoke max-w-76">Three fictional case studies.<br />Original concepts, not client commissions.</p>
    </div>
    {projects.map((project) => <article key={project.number} className="d-g @md:gtc-12 g-6 @md:g-10 py-9 btw-1 bc-ash">
      <div className="@md:gc-s-5 d-f fd-c ai-s">
        <p className="fs-xs tt-u ls-4 c-smoke">{project.number} / {project.category}</p>
        <h3 className="ff-s fw-400 fs-4xl @lg:fs-5xl ls-2 mt-7">{project.name}</h3>
        <p className="fs-md mt-4">{project.title}</p>
        <p className="c-graphite lh-5 mt-3 max-w-116">{project.description}</p>
        <p className="fs-xs c-smoke mt-6 mb-5">{project.scope} / {project.year}</p>
        <div className="mt-auto">
          <details>
            <summary className="fs-sm py-3 c-p tdl-u tuo-4 fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">Read the {project.name} concept</summary>
            <dl className="pt-4 pb-2 fs-sm lh-5">
              <dt className="fw-700">The brief</dt><dd className="c-graphite mt-2 mb-4">{project.brief}</dd>
              <dt className="fw-700">The response</dt><dd className="c-graphite mt-2 mb-4">{project.response}</dd>
              <dt className="fw-700">The takeaway</dt><dd className="c-graphite mt-2">{project.takeaway}</dd>
            </dl>
          </details>
        </div>
      </div>
      <figure className="@md:gc-s-7">
        <ConceptExcerpt number={project.number} />
        <figcaption className="d-f jc-sb g-3 mt-3 fs-xs c-smoke"><span>Messaging study</span><span>Fictional project / {project.number}</span></figcaption>
      </figure>
    </article>)}
  </section>;
}

function PointOfView() {
  return <section aria-labelledby="pov-heading" className="btw-1 bbw-1 bc-ash py-16 @md:py-24 d-g @md:gtc-12 g-8">
    <div className="@md:gc-s-3"><Label>02 / Our point of view</Label><p aria-hidden="true" className="ff-s fs-8xl lh-1 mt-8 d-none @md:d-b">*</p></div>
    <div className="@md:gc-s-9">
      <h2 id="pov-heading" className="ff-s fw-400 fs-4xl @md:fs-6xl @lg:fs-7xl ls-2 lh-2">The world has enough noise.<br /><span className="fs-i">Make something worth<br className="d-none @lg:d-b" /> paying attention to.</span></h2>
      <div className="d-g @lg:gtc-2 g-8 mt-9 c-graphite lh-5">
        <p>Good brands begin with a useful truth. Something specific to the people behind the business and the people it serves.</p>
        <p>Our job is to find that truth and give it a clear expression. In the words, the identity and every place the work meets the world.</p>
      </div>
    </div>
  </section>;
}

function Services() {
  return <section id="services" tabIndex={-1} aria-labelledby="services-heading" className="py-14 @md:py-20 d-g @md:gtc-12 g-8 @md:g-12">
    <div className="@md:gc-s-4"><Label>03 / What we do</Label><h2 id="services-heading" className="ff-s fw-400 fs-4xl @md:fs-5xl lh-2 ls-2 mt-5">From first thought<br />to final detail.</h2><p className="mt-6 c-graphite max-w-96">Four connected disciplines. The right combination for the question at hand.</p></div>
    <ol className="@md:gc-s-8">
      {services.map((service, i) => <li key={service.name} className="btw-1 bc-ash py-7 d-g gtc-12 g-3">
        <span className="fs-sm c-smoke pt-2 gc-s-1">0{i + 1}</span>
        <div className="gc-s-11"><h3 className="ff-s fw-400 fs-3xl @lg:fs-4xl ls-2">{service.name}</h3><p className="mt-4 c-graphite max-w-148">{service.description}</p><p className="mt-5 fs-xs c-smoke">{service.deliverables}</p></div>
      </li>)}
    </ol>
  </section>;
}

function Approach() {
  return <section id="approach" aria-labelledby="approach-heading" className="btw-1 bc-ash py-14 @md:py-20">
    <div className="d-f fd-c @md:fd-r jc-sb g-6 mb-12"><div><Label>04 / How we work</Label><h2 id="approach-heading" className="ff-s fw-400 fs-4xl @md:fs-5xl ls-2 mt-5">A shared process.<br />A clear direction.</h2></div><p className="max-w-100 c-graphite @md:pt-12">Close collaboration, useful conversations and decisions made with purpose.</p></div>
    <ol className="d-g @sm:gtc-2 @lg:gtc-4 g-8">
      {approach.map((step, i) => <li key={step.name} className="btw-1 bc-ash pt-5"><p className="fs-xs c-smoke">0{i + 1}</p><h3 className="ff-s fw-400 fs-3xl ls-2 mt-7 mb-4">{step.name}</h3><p className="c-graphite lh-5">{step.text}</p></li>)}
    </ol>
  </section>;
}

function Results() {
  return <section aria-labelledby="results-heading" className="bg-mist p-6 @md:p-12 my-4">
    <div className="d-f fd-c @md:fd-r jc-sb g-5"><div><Label>05 / What progress could look like</Label><h2 id="results-heading" className="ff-s fw-400 fs-4xl @md:fs-5xl ls-2 mt-5">A way to measure the work.</h2></div><p className="fs-xs max-w-76 c-graphite">Illustrative metrics only.<br />Fictional numbers, not measured outcomes or forecasts.</p></div>
    <dl className="d-g @lg:gtc-3 g-9 mt-10">
      {metrics.map((metric) => <div key={metric.label} className="btw-1 bc-ash pt-6"><dt className="fs-sm">{metric.label}<span className="d-b c-graphite fs-xs mt-1">{metric.context}</span></dt><dd className="ff-s fs-6xl @md:fs-7xl ls-2 lh-1 mt-5 mb-5">{metric.value}</dd><dd className="fs-xs c-graphite">{metric.calculation}<br />{metric.note}</dd></div>)}
    </dl>
    <p className="mt-8 pt-5 btw-1 bc-ash fs-xs c-graphite">A real engagement would agree a baseline, a reporting period and a measurement method before launch. These examples make no claim of causation.</p>
  </section>;
}

function About() {
  return <section id="about" tabIndex={-1} aria-labelledby="about-heading" className="py-16 @md:py-24 d-g @md:gtc-12 g-8 @md:g-12">
    <div className="@md:gc-s-4"><Label>06 / The studio</Label><h2 id="about-heading" className="ff-s fw-400 fs-4xl @md:fs-5xl ls-2 lh-2 mt-5">Curious minds.<br />Feet on the ground.</h2></div>
    <div className="@md:gc-s-8"><p className="ff-s fs-3xl @lg:fs-4xl lh-3 ls-2">Fieldwork is imagined as a small, independent studio for businesses with something useful to bring to the world.</p><p className="c-graphite mt-7 lh-5">The model is simple: strategy and creative direction at one table, with specialist collaborators brought in to suit the work. Direct conversations with the people doing the thinking and making.</p>
      <dl className="d-g @sm:gtc-2 g-7 mt-10">
        <div className="btw-1 bc-ash pt-4"><dt className="fs-xs tt-u ls-4 c-smoke">Based in</dt><dd className="mt-3">London, UK.<br />Built for remote collaboration.</dd></div>
        <div className="btw-1 bc-ash pt-4"><dt className="fs-xs tt-u ls-4 c-smoke">Good company</dt><dd className="mt-3">Independent businesses, cultural organisations and teams ready for change.</dd></div>
        <div className="btw-1 bc-ash pt-4"><dt className="fs-xs tt-u ls-4 c-smoke">At the table</dt><dd className="mt-3">Strategy, writing, identity, art direction and web development.</dd></div>
        <div className="btw-1 bc-ash pt-4"><dt className="fs-xs tt-u ls-4 c-smoke">Availability</dt><dd className="mt-3">Enquiries welcome.<br />Scope and timing agreed together.</dd></div>
      </dl>
    </div>
  </section>;
}

function FAQ() {
  return <section id="faq" tabIndex={-1} aria-labelledby="faq-heading" className="btw-1 bc-ash py-14 @md:py-20 d-g @md:gtc-12 g-8 @md:g-12">
    <div className="@md:gc-s-4"><Label>07 / A few practicalities</Label><h2 id="faq-heading" className="ff-s fw-400 fs-4xl @md:fs-5xl ls-2 mt-5">Before we begin.</h2></div>
    <div className="@md:gc-s-8">{faqs.map((faq) => <Disclosure key={faq.question} question={faq.question}><p>{faq.answer}</p></Disclosure>)}</div>
  </section>;
}

function Contact() {
  const demo = __CONTACT_EMAIL__.endsWith('.example');
  return <section id="contact" tabIndex={-1} aria-labelledby="contact-heading" className="btw-1 bc-ash pt-14 pb-16 @md:py-24">
    <Label>08 / A good place to start</Label>
    <div className="d-g @lg:gtc-12 g-8 ai-fe mt-6">
      <h2 id="contact-heading" className="ff-s fw-400 fs-5xl @md:fs-7xl @xl:fs-8xl ls-2 lh-1 @lg:gc-s-8">What are you<br /><span className="fs-i">working towards?</span></h2>
      <div className="@lg:gc-s-4"><p className="c-graphite mb-6">Tell us where you are, where you want to go and what is getting in the way.</p><a tabIndex={0} href={`mailto:${__CONTACT_EMAIL__}?subject=${encodeURIComponent('A project for Fieldwork')}`} className="d-if ai-c g-4 py-3 tdl-u tuo-4 ow-bw fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">{__CONTACT_EMAIL__} <Arrow /></a><p className="fs-xs c-smoke mt-4">{demo ? 'Demo email address. Opens a draft; this inbox is not monitored.' : 'Opens your email app. Include your timing and a short project outline.'}</p></div>
    </div>
  </section>;
}

function NotFound() {
  return <section className="py-20 @md:py-32"><Label>404 / A small detour</Label><h1 className="ff-s fw-400 fs-5xl @md:fs-7xl ls-2 lh-1 mt-8">This page is<br /><span className="fs-i">off the map.</span></h1><p className="c-graphite max-w-128 mt-8 mb-7">There is no page at this address. Head back to the studio to explore the work or start a conversation.</p><TextLink href="/">Back to Fieldwork</TextLink></section>;
}

export function App({ path }: { path: string }) {
  return <div id="top" className="max-w-360 mx-auto px-5 @sm:px-8 @lg:px-14 @xl:px-18">
    <a tabIndex={0} href="#main" className="p-a t--20 l-5 f:t-4 zi-10 bg-ink c-parchment p-4 fs-sm fv:os-s fv:ow-2 fv:oc-parchment fv:oo-4">Skip to content</a>
    <Header />
    <main id="main" tabIndex={-1}>{path === '/' ? <><Hero /><Work /><PointOfView /><Services /><Approach /><Results /><About /><FAQ /><Contact /></> : <NotFound />}</main>
    <Footer />
  </div>;
}




``````

## src/components.tsx

``````
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { navigation } from './data';

export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return <a tabIndex={0} href={href} className="d-if ai-c g-3 py-2 tdl-u tuo-4 fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">{children}<Arrow /></a>;
}

export function Label({ children }: { children: ReactNode }) {
  return <p className="fs-sm tt-u ls-4 c-graphite">{children}</p>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    menu.current?.querySelector('a')?.focus();
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 48rem)');
    const resize = () => {
      if (desktop.matches) {
        const inside = menu.current?.contains(document.activeElement);
        setOpen(false);
        if (inside) document.querySelector<HTMLAnchorElement>('#wordmark')?.focus();
      }
    };
    window.addEventListener('keydown', close);
    desktop.addEventListener('change', resize);
    return () => {
      window.removeEventListener('keydown', close);
      desktop.removeEventListener('change', resize);
    };
  }, [open]);
  return (
    <header className="bbw-1 bc-ash" onBlur={(event) => {
      if (open && event.relatedTarget && !event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false);
    }}>
      <div className="d-f ai-c jc-sb g-4 py-5 @md:py-7">
        <a tabIndex={0} id="wordmark" href="/" aria-label="Fieldwork home" className="ff-s fw-700 fs-4xl ls-2 lh-1 fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">fieldwork<span className="fs-xxl">.</span></a>
        <nav aria-label="Main navigation" className="d-none @md:d-f ai-c g-9 fs-sm">
          {navigation.map((item) => <a tabIndex={0} key={item.label} href={item.href} className="py-3 fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">{item.label}</a>)}
        </nav>
        <a tabIndex={0} href="/#contact" className="d-none @md:d-if ai-c g-5 fs-sm py-3 fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">Let’s talk <Arrow /></a>
        <button ref={trigger} type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)} className="@md:d-none p-3 bw-1 bc-ash fs-sm c-ink br-0 fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">{open ? 'Close' : 'Menu'}</button>
      </div>
      <nav id="mobile-navigation" ref={menu} aria-label="Mobile navigation" hidden={!open} className="@md:d-none pb-6">
        <div className="d-f fd-c ai-s g-2">
          {[...navigation, { label: 'Let’s talk', href: '/#contact' }].map((item) => <a tabIndex={0} key={item.label} href={item.href} onClick={() => {
            setOpen(false);
            const target = document.querySelector<HTMLElement>(item.href.slice(1));
            target?.focus();
          }} className="py-3 fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">{item.label}</a>)}
        </div>
      </nav>
    </header>
  );
}

export function Disclosure({ question, children }: { question: string; children: ReactNode }) {
  return <details className="btw-1 bc-ash">
    <summary className="py-6 pr-3 fs-md c-ink c-p fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">{question}</summary>
    <div className="pb-7 c-graphite lh-5 max-w-180">{children}</div>
  </details>;
}

export function Footer() {
  return <footer className="btw-1 bc-ash pt-8 pb-6">
    <div className="d-g g-8 @md:gtc-3">
      <div><a tabIndex={0} href="/" className="ff-s fw-700 fs-3xl ls-2 fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">fieldwork</a><p className="mt-3 fs-sm c-graphite">Independent thinking.<br />Considered work.</p></div>
      <nav aria-label="Footer navigation" className="d-f fw-w g-6 ai-s fs-sm">
        {navigation.map((item) => <a tabIndex={0} key={item.label} href={item.href} className="py-2 fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">{item.label}</a>)}
        <a tabIndex={0} href="/#faq" className="py-2 fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">FAQ</a>
      </nav>
      <address className="fs-n fs-sm c-graphite @md:ta-r">
        <a tabIndex={0} href={`mailto:${__CONTACT_EMAIL__}`} className="d-ib py-2 ow-bw fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">{__CONTACT_EMAIL__}</a><br />London, UK / Working everywhere
      </address>
    </div>
    <div className="d-f fd-c @md:fd-r jc-sb g-3 mt-14 pt-5 btw-1 bc-ash fs-xs c-smoke">
      <p>© {new Date().getFullYear()} Fieldwork. A fictional studio.</p>
      <p>Concept projects. Illustrative results. No tracking.</p>
      <a tabIndex={0} href="#top" className="py-1 fv:os-s fv:ow-2 fv:oc-ink fv:oo-4">Back to top ↑</a>
    </div>
  </footer>;
}





``````

## src/data.ts

``````
export const navigation = [
  { label: 'Work', href: '/#work' },
  { label: 'Services', href: '/#services' },
  { label: 'About', href: '/#about' }
];

export const projects = [
  {
    number: '01', name: 'Common Ground', category: 'Food & everyday life',
    title: 'A local staple. A wider conversation.',
    description: 'A neighbourhood grocer with a point of view on how we shop, cook and gather.',
    scope: 'Positioning / Identity / Retail', year: '2026',
    brief: 'Give an imagined independent grocer a recognisable voice without losing the familiarity of the corner shop.',
    response: 'A plainspoken identity built around the shared table. Seasonal shelf notes, reusable shopping lists and a neighbourhood recipe series make the idea useful in daily life.',
    takeaway: 'One organising idea, carried from the shop window to the weekly shopping list.'
  },
  {
    number: '02', name: 'Still House', category: 'Architecture & place',
    title: 'Room for a different pace.',
    description: 'A quieter identity for a fictional architecture practice designing homes around daily rituals.',
    scope: 'Strategy / Identity / Website', year: '2026',
    brief: 'Help an imagined residential practice explain the thinking behind its spaces, beyond a portfolio of finished rooms.',
    response: 'A project index organised by the way people live: arriving, cooking, resting. A restrained type system and short process essays give each decision room to be understood.',
    takeaway: 'A website structure that connects the practice’s philosophy to the work.'
  },
  {
    number: '03', name: 'Open Season', category: 'Culture & community',
    title: 'Culture, with the doors open.',
    description: 'An invitation to a fictional arts programme that puts participation before prestige.',
    scope: 'Campaign / Art direction / Digital', year: '2026',
    brief: 'Make a new local arts programme approachable for people who do not already see themselves as an arts audience.',
    response: 'A campaign organised around simple invitations: come listen, come make, come stay a while. A clear event finder connects each invitation to a place, time and access note.',
    takeaway: 'A consistent invitation across printed programmes and the event discovery journey.'
  }
];

export const services = [
  { name: 'Positioning', description: 'Find the thought your business can stand behind. Give people a clear reason to choose you.', deliverables: 'Research, brand strategy, naming, messaging' },
  { name: 'Brand Systems', description: 'Build a recognisable language that holds together wherever your brand shows up.', deliverables: 'Visual identity, verbal identity, guidelines' },
  { name: 'Campaign Direction', description: 'Turn a considered idea into work people can encounter, understand and act on.', deliverables: 'Creative concepts, art direction, campaign systems' },
  { name: 'Digital Experiences', description: 'Make your website as clear and useful as the business behind it.', deliverables: 'Content strategy, UX, web design, development' }
];

export const approach = [
  { name: 'Get close.', text: 'Listen to your team. Look at the category. Ask the questions the brief has not answered.' },
  { name: 'Find the thread.', text: 'Agree on the central idea, the audience and what the work needs to change.' },
  { name: 'Make it tangible.', text: 'Develop a direction through real applications. Review, question and refine it together.' },
  { name: 'Put it to work.', text: 'Prepare the files, build the experience and give your team the tools to carry it forward.' }
];

export const metrics = [
  { value: '+24%', label: 'Shop visits', context: 'Common Ground', calculation: '1,000 to 1,240 weekly visits', note: 'An imagined comparison of two four-week periods.' },
  { value: '2×', label: 'Project enquiries', context: 'Still House', calculation: '8 to 16 monthly enquiries', note: 'An imagined comparison of two calendar months.' },
  { value: '68%', label: 'Booking completion', context: 'Open Season', calculation: '68 completed bookings / 100 starts', note: 'An imagined sample of 100 booking sessions.' }
];

export const faqs = [
  { question: 'When is the right time to work together?', answer: 'When something is changing: a new offer, a new audience, or a brand that no longer reflects the business. Bring the question you are trying to answer, even if the brief is still taking shape.' },
  { question: 'Can we start with one part of the business?', answer: 'Yes. A positioning project, an identity or a website can be a standalone engagement. We define the boundaries and dependencies together before work begins.' },
  { question: 'How would a project be scoped?', answer: 'Start with your objective, the people involved and the deadline. A written proposal would set out the work, deliverables, review points, fee and payment schedule before any commitment.' },
  { question: 'Do you work with teams outside London?', answer: 'The studio model is London-based and designed for remote collaboration. Workshops, feedback and handover can happen online, with in-person sessions agreed as part of the scope.' },
  { question: 'Is the work on this site real client work?', answer: 'No. Fieldwork is a fictional agency. Every featured project is an original concept study, and every metric is illustrative. No client relationship, endorsement or measured result is implied.' }
];

``````

## src/entry-server.tsx

``````
import { renderToString } from 'react-dom/server';
import { App } from './App';
import { renderHead } from './seo';

export function render(path: string) {
  return { html: renderToString(<App path={path} />), head: renderHead(path) };
}
export const origin = __SITE_URL__;
export const contactEmail = __CONTACT_EMAIL__;

``````

## src/env.d.ts

``````
declare const __SITE_URL__: string;
declare const __CONTACT_EMAIL__: string;

``````

## src/main.tsx

``````
import { createRoot, hydrateRoot } from 'react-dom/client';
import { App } from './App';
import { updateDocumentMeta } from './seo';
import './styles.css';

const path = window.location.pathname;
updateDocumentMeta(path);
const root = document.getElementById('root')!;
if (root.querySelector('main')) hydrateRoot(root, <App path={path} />);
else createRoot(root).render(<App path={path} />);

``````

## src/seo.ts

``````
export const siteTitle = 'Fieldwork | Independent strategy & creative studio';
export const siteDescription = 'A fictional London studio for positioning, brand systems, campaign direction and digital experiences. Explore original concept work and a considered approach.';

export function routeMeta(path: string) {
  const home = path === '/';
  const url = new URL(path, __SITE_URL__).href;
  return {
    title: home ? siteTitle : `Page not found: ${path} | Fieldwork`,
    description: home ? siteDescription : `There is no Fieldwork page at ${path}. Return to the studio to explore concept projects, services and contact details.`,
    url,
    image: `${__SITE_URL__}/og.png`,
    fallbackImage: `${__SITE_URL__}/og-fallback.png`
  };
}

export function agencySchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${__SITE_URL__}/#organization`,
    name: 'Fieldwork',
    url: `${__SITE_URL__}/`,
    description: 'Fictional marketing and creative agency presented as an original design concept. Projects and metrics are illustrative.',
    email: __CONTACT_EMAIL__,
    logo: `${__SITE_URL__}/icon-512.png`,
    address: { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'GB' },
    knowsAbout: ['Brand positioning', 'Brand identity', 'Campaign direction', 'Digital experiences']
  };
}

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]!);

export function renderHead(path: string) {
  const meta = routeMeta(path);
  const tag = (name: string, content: string, property = false) => `<meta ${property ? 'property' : 'name'}="${name}" content="${escapeHtml(content)}" />`;
  return [
    `<title>${escapeHtml(meta.title)}</title>`,
    tag('description', meta.description),
    `<link rel="canonical" href="${escapeHtml(meta.url)}" />`,
    tag('og:title', meta.title, true), tag('og:description', meta.description, true),
    tag('og:url', meta.url, true), tag('og:type', 'website', true),
    tag('og:site_name', 'Fieldwork', true), tag('og:locale', 'en_GB', true),
    tag('og:image', meta.image, true), tag('og:image:width', '1200', true),
    tag('og:image:height', '630', true), tag('og:image:alt', 'Fieldwork. Good work. Out in the world. Independent strategy and creative studio.', true),
    tag('og:image', meta.fallbackImage, true),
    tag('twitter:card', 'summary_large_image'), tag('twitter:title', meta.title),
    tag('twitter:description', meta.description), tag('twitter:image', meta.image),
    ...(path === '/' ? [`<script type="application/ld+json">${JSON.stringify(agencySchema()).replace(/</g, '\\u003c')}</script>`] : [])
  ].join('\n');
}

export function updateDocumentMeta(path: string) {
  const parser = new DOMParser();
  const head = parser.parseFromString(`<head>${renderHead(path)}</head>`, 'text/html').head;
  document.head.querySelectorAll('title, meta[name="description"], meta[property^="og:"], meta[name^="twitter:"], link[rel="canonical"], script[type="application/ld+json"]').forEach(node => node.remove());
  Array.from(head.children).forEach(node => document.head.appendChild(document.importNode(node, true)));
}

``````

## src/styles.css

``````
@yummacss;

``````

## scripts/check-launch.mjs

``````
import { contactEmail, origin } from '../.build/server/entry-server.js';
const issues = [];
if (new URL(origin).hostname.endsWith('.example')) issues.push('Replace the reserved example domain with the actual HTTPS origin.');
if (contactEmail.endsWith('.example')) issues.push('Replace the demo email with a monitored inbox.');
if (issues.length) {
  process.stderr.write(`Launch configuration incomplete:\n${issues.map(issue => `- ${issue}`).join('\n')}\n`);
  process.exitCode = 1;
} else {
  process.stdout.write('Production origin and email are configured. Verify DNS, certificate and inbox delivery separately.\n');
}

``````

## scripts/check.mjs

``````
import { readFile, readdir } from 'node:fs/promises';
import assert from 'node:assert/strict';
import sharp from 'sharp';

async function files(directory) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = `${directory}/${entry.name}`;
    if (entry.isDirectory()) result.push(...await files(path)); else result.push(path);
  }
  return result;
}
const sources = [...await files('src'), ...await files('scripts'), ...await files('tests'), 'index.html', 'vite.config.ts', 'yumma.config.mjs', 'playwright.config.ts'];
for (const path of sources) {
  const text = await readFile(path, 'utf8');
  assert(!text.includes(String.fromCodePoint(0x2014)), `Forbidden punctuation: ${path}`);
  if (path.startsWith('src/') || path === 'index.html') {
    assert(!/\bstyle\s*=|<style\b/i.test(text), `Inline CSS: ${path}`);
    assert(!/\bh:|\b(?:blur|shadow|gradient|scale)-/.test(text), `Forbidden visual treatment: ${path}`);
    assert(!/br-(?!0\b)[\w]+/.test(text), `Rounded UI: ${path}`);
  }
}
assert.equal((await readFile('src/styles.css', 'utf8')).trim(), '@yummacss;');
const built = await files('dist');
assert(!built.some(path => path.endsWith('.map')), 'Source map in public build');
const home = await readFile('dist/index.html', 'utf8');
const missing = await readFile('dist/404.html', 'utf8');
assert(home.includes('Good work.'));
assert(missing.includes('off the map.'));
assert(!home.includes('noindex'));
assert(!/sourceMappingURL/.test((await Promise.all(built.filter(path => /\.(js|css)$/.test(path)).map(path => readFile(path, 'utf8')))).join('')));
assert.notEqual(home.match(/<title>(.*?)<\/title>/s)?.[1], missing.match(/<title>(.*?)<\/title>/s)?.[1]);
for (const path of ['og.png', 'og-fallback.png']) {
  const metadata = await sharp(`dist/${path}`).metadata();
  assert.equal(metadata.width, 1200); assert.equal(metadata.height, 630);
}
for (const [path, size] of [['favicon-32.png',32], ['apple-touch-icon.png',180], ['icon-192.png',192], ['icon-512.png',512]]) {
  const metadata = await sharp(`dist/${path}`).metadata();
  assert.equal(metadata.width, size); assert.equal(metadata.height, size);
}
const ico = await readFile('dist/favicon.ico');
assert.equal(ico.readUInt16LE(2), 1); assert.equal(ico.readUInt16LE(4), 3);
process.stdout.write(`Static validation passed: ${sources.length} source files; ${built.length} public artifacts; complete icons and social images; no public source maps or custom CSS.\n`);

``````

## scripts/generate-assets.mjs

``````
import sharp from 'sharp';
import { mkdir, writeFile, access, copyFile } from 'node:fs/promises';

await mkdir('public', { recursive: true });
const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" fill="#242424"/><path d="M172 405V188h-43v-35h43v-31c0-61 32-94 88-94 24 0 43 5 61 12v41c-16-11-31-15-47-15-31 0-47 19-47 58v29h77v35h-77v217z" fill="#f6f3f1"/></svg>`;
await writeFile('public/favicon.svg', icon);
for (const [size, name] of [[32,'favicon-32.png'],[180,'apple-touch-icon.png'],[192,'icon-192.png'],[512,'icon-512.png']]) {
  await sharp(Buffer.from(icon)).resize(size, size).png({ compressionLevel: 9 }).toFile(`public/${name}`);
}
const icoSizes = [16, 32, 48];
const pngs = await Promise.all(icoSizes.map(size => sharp(Buffer.from(icon)).resize(size, size).png().toBuffer()));
const header = Buffer.alloc(6 + 16 * pngs.length);
header.writeUInt16LE(1, 2); header.writeUInt16LE(pngs.length, 4);
let offset = header.length;
for (let i = 0; i < pngs.length; i++) {
  const index = 6 + i * 16;
  header[index] = icoSizes[i]; header[index + 1] = icoSizes[i];
  header.writeUInt16LE(1, index + 4); header.writeUInt16LE(32, index + 6);
  header.writeUInt32LE(pngs[i].length, index + 8); header.writeUInt32LE(offset, index + 12);
  offset += pngs[i].length;
}
await writeFile('public/favicon.ico', Buffer.concat([header, ...pngs]));
const social = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#f6f3f1"/><text x="68" y="86" font-family="Georgia,serif" font-size="44" font-weight="bold" fill="#242424">fieldwork.</text><path d="M68 116h1064M68 552h1064" stroke="#ccc6bf"/><text x="68" y="187" font-family="Courier New,monospace" font-size="16" fill="#51504d">INDEPENDENT STRATEGY &amp; CREATIVE STUDIO</text><g fill="#242424" font-family="Georgia,serif" font-size="102"><text x="64" y="322">Good work.</text><text x="64" y="438">Out in the <tspan font-style="italic">world.</tspan></text></g><text x="68" y="589" font-family="Courier New,monospace" font-size="16" fill="#51504d">LONDON, UK / A FICTIONAL STUDIO</text><path d="M1072 197h60v60h-60z" fill="#2b59d1"/></svg>`;
const fallback = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#242424"/><text x="70" y="295" font-family="Georgia,serif" font-size="125" fill="#f6f3f1">fieldwork.</text><text x="76" y="370" font-family="Courier New,monospace" font-size="24" fill="#f6f3f1">Good work. Out in the world.</text></svg>`;
try { await access('public/og-fallback.png'); }
catch { await sharp(Buffer.from(fallback)).png({ compressionLevel: 9 }).toFile('public/og-fallback.png'); }
try { await sharp(Buffer.from(social)).png({ compressionLevel: 9 }).toFile('public/og.png'); }
catch (error) { await copyFile('public/og-fallback.png', 'public/og.png'); process.stderr.write(`Social image fallback used: ${error.message}\n`); }
await writeFile('public/site.webmanifest', JSON.stringify({ name: 'Fieldwork', short_name: 'Fieldwork', description: 'Independent strategy and creative studio. A fictional agency concept.', start_url: '/', display: 'browser', background_color: '#f6f3f1', theme_color: '#f6f3f1', icons: [{ src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' }, { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' }] }, null, 2));
process.stdout.write('Generated social images and complete favicon set.\n');


``````

## scripts/prerender.mjs

``````
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { brotliCompressSync, gzipSync } from 'node:zlib';
import { render, origin } from '../.build/server/entry-server.js';

const template = await readFile('dist/index.html', 'utf8');
await writeFile('.build/template.html', template);
for (const [path, file] of [['/', 'index.html'], ['/404', '404.html']]) {
  const { html, head } = render(path);
  await writeFile(`dist/${file}`, template.replace('<!--app-head-->', head).replace('<!--app-html-->', html));
}
await writeFile('public/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
await writeFile('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${origin}/</loc></url></urlset>\n`);
for (const name of ['robots.txt', 'sitemap.xml']) await writeFile(`dist/${name}`, await readFile(`public/${name}`));
async function compress(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = `${directory}/${entry.name}`;
    if (entry.isDirectory()) await compress(path);
    else if (/\.(html|js|css|svg|xml|txt|webmanifest)$/.test(path)) {
      const content = await readFile(path);
      await writeFile(`${path}.br`, brotliCompressSync(content));
      await writeFile(`${path}.gz`, gzipSync(content, { level: 9 }));
    }
  }
}
await compress('dist');
process.stdout.write('Prerendered home and 404; generated sitemap, robots, Brotli and gzip assets.\n');


``````

## scripts/serve.mjs

``````
import { createServer as createHttpServer } from 'node:http';
import { createServer as createHttpsServer } from 'node:https';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { render } from '../.build/server/entry-server.js';

const root = resolve('dist');
const template = await readFile('.build/template.html', 'utf8');
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.webmanifest': 'application/manifest+json' };
const handler = async (request, response) => {
  response.setHeader('X-Content-Type-Options', 'nosniff');
  response.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  response.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'none'");
  if (request.socket.encrypted) response.setHeader('Strict-Transport-Security', 'max-age=31536000');
  if (!['GET', 'HEAD'].includes(request.method)) { response.writeHead(405, { Allow: 'GET, HEAD' }); response.end(); return; }
  try {
    const pathname = new URL(request.url, 'http://localhost').pathname;
    let decoded;
    try { decoded = decodeURIComponent(pathname); }
    catch { response.writeHead(400); response.end('Invalid URL'); return; }
    if (decoded === '/index.html') { response.writeHead(308, { Location: '/' }); response.end(); return; }
    const file = resolve(root, decoded === '/' ? 'index.html' : `.${decoded}`);
    const withinRoot = file === root || file.startsWith(`${root}${sep}`);
    const isFile = withinRoot && !decoded.endsWith('.map') && await stat(file).then(info => info.isFile()).catch(() => false);
    if (!isFile || decoded === '/404.html') {
      response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
      const { html, head } = render(pathname);
      response.end(request.method === 'HEAD' ? undefined : template.replace('<!--app-head-->', head).replace('<!--app-html-->', html));
      return;
    }
    response.setHeader('Content-Type', types[extname(file)] || 'application/octet-stream');
    response.setHeader('Cache-Control', decoded.startsWith('/assets/') ? 'public, max-age=31536000, immutable' : 'public, max-age=0, must-revalidate');
    response.setHeader('Vary', 'Accept-Encoding');
    let selected = file;
    const accepted = request.headers['accept-encoding'] || '';
    for (const [encoding, suffix] of [['br', '.br'], ['gzip', '.gz']]) {
      if (accepted.split(',').some(item => item.trim().split(';')[0] === encoding && !/;\s*q=0(?:\.0*)?$/.test(item)) && await stat(`${file}${suffix}`).then(() => true).catch(() => false)) {
        selected = `${file}${suffix}`; response.setHeader('Content-Encoding', encoding); break;
      }
    }
    response.writeHead(200);
    response.end(request.method === 'HEAD' ? undefined : await readFile(selected));
  } catch {
    response.writeHead(500, { 'Content-Type': 'text/plain' });
    response.end('Unable to load this page. Please try again.');
  }
};
const tls = process.env.TLS_CERT && process.env.TLS_KEY;
const server = tls ? createHttpsServer({ cert: await readFile(process.env.TLS_CERT), key: await readFile(process.env.TLS_KEY) }, handler) : createHttpServer(handler);
server.listen(Number(process.env.PORT || 4173), process.env.HOST || '127.0.0.1', () => {
  process.stdout.write(`Fieldwork production server: ${tls ? 'https' : 'http'}://${process.env.HOST || '127.0.0.1'}:${process.env.PORT || 4173}\n`);
});


``````

## tests/site.spec.ts

``````
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const widths = [320, 375, 640, 768, 1024, 1440];

test('responsive layout, no overflow, semantic headings and clean runtime', async ({ page }, testInfo) => {
  const errors: string[] = [];
  const failures: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('requestfailed', request => failures.push(request.url()));
  await page.goto('/');
  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Good work.Out in the world.');
    const overflow = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, width: window.innerWidth }));
    expect(overflow.scroll, `Overflow at ${width}px`).toBeLessThanOrEqual(overflow.width);
    const cta = page.getByRole('link', { name: 'Start a conversation' });
    await expect(cta).toBeVisible();
    expect((await cta.boundingBox())!.y).toBeLessThan(900);
    if (testInfo.project.name === 'chromium' && [320, 375, 768, 1440].includes(width)) {
      await page.screenshot({ path: `artifacts/fieldwork-${width}.png`, fullPage: true });
    }
  }
  await page.setViewportSize({ width: 320, height: 568 });
  await page.goto('/');
  const shortScreenCta = await page.getByRole('link', { name: 'Start a conversation' }).boundingBox();
  expect(shortScreenCta!.y + shortScreenCta!.height).toBeLessThanOrEqual(568);
  await page.setViewportSize({ width: 667, height: 375 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(667);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  expect(await page.evaluate(() => document.getAnimations().length)).toBe(0);
  expect(errors).toEqual([]);
  expect(failures).toEqual([]);
});

test('keyboard menu, Escape, focus restoration, skip and disclosures', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await page.keyboard.press('Tab');
  const skip = page.getByRole('link', { name: 'Skip to content' });
  await expect(skip).toBeFocused();
  const focus = await skip.evaluate(element => ({ color: getComputedStyle(element).outlineColor, width: getComputedStyle(element).outlineWidth, top: element.getBoundingClientRect().top }));
  expect(focus.width).toBe('2px');
  expect(focus.color).not.toBe('rgba(0, 0, 0, 0)');
  expect(focus.top).toBeGreaterThanOrEqual(0);
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  const menu = page.getByRole('button', { name: 'Menu', exact: true });
  await menu.focus(); await page.keyboard.press('Enter');
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Work', exact: true })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(menu).toBeFocused();
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await menu.click();
  await page.getByRole('navigation', { name: 'Mobile navigation' }).getByRole('link', { name: 'Services', exact: true }).click();
  await expect(page.locator('#services')).toBeFocused();
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  const summary = page.locator('#faq summary').first();
  await summary.focus(); await page.keyboard.press('Enter');
  await expect(page.locator('#faq details').first()).toHaveAttribute('open', '');
  await page.keyboard.press('Space');
  await expect(page.locator('#faq details').first()).not.toHaveAttribute('open', '');
  const concept = page.locator('#work summary').first();
  await concept.focus(); await page.keyboard.press('Enter');
  await expect(page.getByText('The brief', { exact: true }).first()).toBeVisible();
});

test('mobile menu touch, resizing and all internal links', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await page.getByRole('button', { name: 'Menu', exact: true }).click();
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeHidden();
  await page.getByRole('button', { name: 'Menu', exact: true }).click();
  await page.setViewportSize({ width: 1024, height: 768 });
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeHidden();
  await page.setViewportSize({ width: 375, height: 812 });
  await expect(page.getByRole('button', { name: 'Menu', exact: true })).toHaveAttribute('aria-expanded', 'false');
  const badLinks = await page.locator('a').evaluateAll(links => links.flatMap(link => {
    const href = link.getAttribute('href') || '';
    if (href.startsWith('mailto:')) return /^mailto:[^@]+@[^?]+/.test(href) ? [] : [href];
    const url = new URL(href, location.origin);
    if (url.pathname !== '/') return [href];
    if (url.hash && !document.getElementById(url.hash.slice(1))) return [href];
    return [];
  }));
  expect(badLinks).toEqual([]);
  await page.getByRole('link', { name: 'Start a conversation' }).click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(page.locator('#contact a')).toHaveAttribute('href', /^mailto:hello@fieldwork\.example\?subject=/);
});

test('accessibility at narrow and desktop sizes, including expanded contents', async ({ page }) => {
  await page.goto('/');
  for (const width of [320, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    expect(result.violations).toEqual([]);
  }
  await page.locator('details').evaluateAll(elements => elements.forEach(element => element.setAttribute('open', '')));
  const expanded = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(expanded.violations).toEqual([]);
});

test('metadata, assets, caching, compression and real 404 responses', async ({ page, request }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Fieldwork | Independent strategy & creative studio');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://fieldwork.example/');
  await expect(page.locator('meta[property="og:image"]')).toHaveCount(2);
  expect(await page.locator('script[type="application/ld+json"]').textContent()).toContain('Fictional');
  for (const path of ['/og.png', '/og-fallback.png', '/favicon.ico', '/favicon.svg', '/favicon-32.png', '/apple-touch-icon.png', '/icon-192.png', '/icon-512.png', '/robots.txt', '/sitemap.xml', '/site.webmanifest']) {
    expect((await request.get(path)).status(), path).toBe(200);
  }
  const html = await request.get('/', { headers: { 'Accept-Encoding': 'br' } });
  expect(html.headers()['content-encoding']).toBe('br');
  expect(html.headers()['cache-control']).toBe('public, max-age=0, must-revalidate');
  const asset = await page.locator('script[type="module"]').getAttribute('src');
  expect((await request.get(asset!)).headers()['cache-control']).toContain('immutable');
  const alias = await request.get('/index.html', { maxRedirects: 0 });
  expect(alias.status()).toBe(308);
  expect(alias.headers()['location']).toBe('/');
  const missing = await page.goto('/some/unpublished-page');
  expect(missing!.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('off the map');
  await expect(page).toHaveTitle('Page not found: /some/unpublished-page | Fieldwork');
  expect((await page.reload())!.status()).toBe(404);
  await expect(page.locator('h1')).toHaveCount(1);
  await page.getByRole('link', { name: 'Back to Fieldwork' }).click();
  await expect(page).toHaveURL('/');
  expect((await request.get('/assets/missing.js.map')).status()).toBe(404);
});



``````

## public/favicon.svg

``````
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" fill="#242424"/><path d="M172 405V188h-43v-35h43v-31c0-61 32-94 88-94 24 0 43 5 61 12v41c-16-11-31-15-47-15-31 0-47 19-47 58v29h77v35h-77v217z" fill="#f6f3f1"/></svg>
``````

## public/robots.txt

``````
User-agent: *
Allow: /
Sitemap: https://fieldwork.example/sitemap.xml

``````

## public/site.webmanifest

``````
{
  "name": "Fieldwork",
  "short_name": "Fieldwork",
  "description": "Independent strategy and creative studio. A fictional agency concept.",
  "start_url": "/",
  "display": "browser",
  "background_color": "#f6f3f1",
  "theme_color": "#f6f3f1",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    }
  ]
}
``````

## public/sitemap.xml

``````
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://fieldwork.example/</loc></url></urlset>

``````

## public/_headers

``````
/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'; form-action 'none'
  Cache-Control: public, max-age=0, must-revalidate
/assets/*
  Cache-Control: public, max-age=31536000, immutable

``````

## public/_redirects

``````
/* /404.html 404

``````

