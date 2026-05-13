# Language Switcher Implementation

This document describes the comprehensive language switching system implemented for the Integrated Energy Solutions website, supporting both English and Arabic with full RTL (Right-to-Left) layout support.

## Features Implemented

### 1. Language Context System

- **File**: `src/contexts/LanguageContext.js`
- **Purpose**: Manages global language state and RTL/LTR direction
- **Features**:
  - Language persistence in localStorage
  - Automatic document direction switching
  - Language toggle functionality
  - RTL/LTR state management

### 2. Translation System

- **File**: `src/utils/translations.js`
- **Purpose**: Centralized translation management
- **Features**:
  - Complete English and Arabic translations
  - Parameter interpolation support
  - Fallback to English for missing translations
  - Organized by component/section

### 3. Translation Hook

- **File**: `src/hooks/useTranslation.js`
- **Purpose**: Easy access to translations in components
- **Usage**: `const { t, language } = useTranslation();`

### 4. Language Switcher Component

- **File**: `src/components/LanguageSwitcher.jsx`
- **Purpose**: UI component for language switching
- **Features**:
  - Globe icon with language indicator
  - RTL-aware styling
  - Accessible button with proper ARIA labels

### 5. RTL/LTR CSS Support

- **File**: `src/app/globals.css`
- **Purpose**: Comprehensive RTL layout support
- **Features**:
  - Direction-aware spacing and margins
  - RTL-specific animations
  - Icon and arrow direction handling
  - Flex and grid RTL support
  - Arabic font integration

## Components Updated

### Header Component

- Added language switcher to navigation
- Translated all navigation items
- RTL-aware dropdown positioning
- Dynamic icon directions

### Hero Section

- Translated all slide content
- RTL-aware text alignment
- Dynamic button positioning

### Footer Component

- Translated all footer sections
- RTL-aware icon positioning
- Dynamic spacing and alignment

## Usage

### Basic Translation

```jsx
import { useTranslation } from "@/hooks/useTranslation";

const MyComponent = () => {
  const { t } = useTranslation();

  return <h1>{t("nav.home")}</h1>;
};
```

### Language Context Access

```jsx
import { useLanguage } from "@/contexts/LanguageContext";

const MyComponent = () => {
  const { language, isRTL, toggleLanguage } = useLanguage();

  return (
    <div className={isRTL ? "text-right" : "text-left"}>
      <p>Current language: {language}</p>
      <button onClick={toggleLanguage}>Switch Language</button>
    </div>
  );
};
```

### RTL-Aware Styling

```jsx
const MyComponent = () => {
  const { isRTL } = useLanguage();

  return (
    <div className={`flex ${isRTL ? "flex-row-reverse" : "flex-row"}`}>
      <span>Content</span>
    </div>
  );
};
```

## CSS Classes for RTL Support

The following CSS classes automatically adjust for RTL:

- `[dir="rtl"] .flex` - Reverses flex direction
- `[dir="rtl"] .text-left` - Changes to text-right
- `[dir="rtl"] .ml-auto` - Changes to mr-auto
- `[dir="rtl"] .space-x-4` - Reverses horizontal spacing
- `[dir="rtl"] .border-r-2` - Changes to border-l-2

## Font Support

- **English**: Poppins (existing)
- **Arabic**: Noto Sans Arabic (newly added)
- Automatic font switching based on language

## Testing

A test component (`TestLanguageSwitch.jsx`) has been added to verify:

- Language switching functionality
- RTL/LTR direction changes
- Translation accuracy
- Document attribute updates

## Browser Compatibility

- Modern browsers with CSS Grid and Flexbox support
- localStorage for language persistence
- CSS custom properties for theming

## Future Enhancements

1. **Additional Languages**: Easy to add more languages by extending the translations object
2. **Dynamic Loading**: Implement lazy loading for translation files
3. **SEO Optimization**: Add hreflang tags for better search engine support
4. **URL Localization**: Implement language-specific URLs (e.g., /ar/, /en/)

## File Structure

```
src/
├── contexts/
│   └── LanguageContext.js          # Language state management
├── hooks/
│   └── useTranslation.js           # Translation hook
├── utils/
│   └── translations.js             # Translation data
├── components/
│   ├── LanguageSwitcher.jsx        # Language switcher UI
│   ├── TestLanguageSwitch.jsx      # Testing component
│   ├── Header.jsx                  # Updated with translations
│   ├── HeroSection.jsx             # Updated with translations
│   └── Footer.jsx                  # Updated with translations
└── app/
    ├── layout.js                   # Updated with LanguageProvider
    └── globals.css                 # Updated with RTL support
```

## Implementation Notes

1. **Performance**: Translations are loaded once and cached in context
2. **Accessibility**: Proper ARIA labels and semantic HTML
3. **SEO**: Document language and direction attributes are updated
4. **User Experience**: Language preference is remembered across sessions
5. **Maintainability**: Centralized translation management makes updates easy

The implementation provides a solid foundation for multilingual support with proper RTL layout handling, making the website accessible to both English and Arabic-speaking users.
