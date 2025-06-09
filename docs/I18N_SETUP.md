# Internationalization (i18n) Setup for Down2Detail

This document explains how the internationalization system is set up and how to use it throughout the application.

## Overview

The i18n system supports English (en) and French (fr) languages, with English as the default. It uses `react-i18next` for client-side translation management, compatible with Next.js 15 static export.

## File Structure

```
public/locales/
├── en/
│   ├── common.json      # General UI text, navigation, common elements
│   ├── services.json    # Service-related translations
│   ├── packages.json    # Package-related translations
│   ├── about.json       # About page translations
│   └── contact.json     # Contact page translations
└── fr/
    ├── common.json      # French translations for general UI
    ├── services.json    # French translations for services
    ├── packages.json    # French translations for packages
    ├── about.json       # French translations for about page
    └── contact.json     # French translations for contact page

lib/
├── i18n.ts             # i18n configuration
└── translations.ts     # Translation helper functions

components/
├── I18nProvider.tsx    # i18n context provider
├── LanguageSwitcher.tsx # Language switcher component
└── TranslatedHero.tsx  # Example translated component

hooks/
└── useI18n.ts         # Custom hook for i18n
```

## Usage

### Basic Translation in Components

```tsx
"use client";

import { useI18n } from "@/hooks/useI18n";

export default function MyComponent() {
  const { t } = useI18n();

  return (
    <div>
      <h1>{t("hero.title")}</h1>
      <p>{t("hero.subtitle")}</p>
      <button>{t("common.contactUs")}</button>
    </div>
  );
}
```

### Using Different Namespaces

```tsx
"use client";

import { useI18n } from "@/hooks/useI18n";

export default function ServicesComponent() {
  const { t } = useI18n("services"); // Use services namespace

  return (
    <div>
      <h1>{t("services.title")}</h1>
      <p>{t("serviceLabels.paintCorrection")}</p>
    </div>
  );
}
```

### Translating Dynamic Content

For dynamic content like services and navigation, use the helper functions:

```tsx
"use client";

import { useI18n } from "@/hooks/useI18n";
import { getTranslatedServiceLabel } from "@/lib/translations";

export default function ServicesList() {
  const { t } = useI18n();

  return (
    <div>
      {services.map((service) => (
        <div key={service.id}>
          <h3>{getTranslatedServiceLabel(t, service.label)}</h3>
        </div>
      ))}
    </div>
  );
}
```

## Language Detection

The system automatically detects the user's language preference in this order:

1. Previously saved language in localStorage
2. Browser language preference
3. HTML lang attribute
4. Falls back to English

## Language Switching

Users can switch languages using the `LanguageSwitcher` component, which is already integrated into the navigation. The selected language is saved in localStorage.

## Adding New Translations

### 1. Add to Translation Files

Add new keys to the appropriate JSON files in both `en/` and `fr/` directories:

```json
// public/locales/en/common.json
{
  "newSection": {
    "title": "New Section Title",
    "description": "New section description"
  }
}
```

```json
// public/locales/fr/common.json
{
  "newSection": {
    "title": "Titre de Nouvelle Section",
    "description": "Description de nouvelle section"
  }
}
```

### 2. Use in Components

```tsx
const { t } = useI18n();
return <h1>{t("newSection.title")}</h1>;
```

## Adding New Languages

To add a new language (e.g., Spanish):

1. Create new directory: `public/locales/es/`
2. Copy all JSON files from `en/` and translate them
3. Update `lib/i18n.ts`:
   ```ts
   const resources = {
     en: {
       /* ... */
     },
     fr: {
       /* ... */
     },
     es: {
       /* Spanish translations */
     },
   };
   ```
4. Update `components/LanguageSwitcher.tsx` to include the new language

## Best Practices

1. **Namespace Organization**: Use appropriate namespaces (common, services, packages, etc.)
2. **Key Naming**: Use descriptive, hierarchical keys (e.g., `hero.title`, `contact.form.name`)
3. **Fallbacks**: Always provide English fallbacks for missing translations
4. **Context**: Consider context when translating (formal vs informal, technical terms)
5. **Testing**: Test all language switches to ensure proper rendering

## Technical Notes

- Compatible with Next.js 15 static export
- Uses client-side rendering for translations
- Language preference persisted in localStorage
- Automatic language detection on first visit
- No server-side rendering for translations (due to static export)

## Troubleshooting

### Translation Not Showing

1. Check if the key exists in the JSON file
2. Verify the namespace is correct
3. Ensure the component is wrapped in `I18nProvider`
4. Check browser console for i18n errors

### Language Not Switching

1. Verify `LanguageSwitcher` is properly imported
2. Check localStorage for saved language preference
3. Ensure i18n is properly initialized

### Build Issues

1. Ensure all JSON files are valid
2. Check that all translation keys are properly formatted
3. Verify imports are correct in `lib/i18n.ts`
