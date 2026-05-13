# Font Setup Instructions

This project uses two brand fonts as specified in the brand guidelines:

1. **Somar Arabic** - For Arabic text (RTL)
2. **Madani** - For English text (LTR)

## Font Files Required

You need to add the font files to the `/public/fonts/` directory. The following font files are expected:

### Somar Arabic Font Files:
- `SomarArabic-Regular.woff2` (or `.woff`, `.ttf`)
- `SomarArabic-Medium.woff2` (or `.woff`, `.ttf`)
- `SomarArabic-SemiBold.woff2` (or `.woff`, `.ttf`)
- `SomarArabic-Bold.woff2` (or `.woff`, `.ttf`)

### Madani Font Files:
- `Madani-Regular.woff2` (or `.woff`, `.ttf`)
- `Madani-Medium.woff2` (or `.woff`, `.ttf`)
- `Madani-SemiBold.woff2` (or `.woff`, `.ttf`)
- `Madani-Bold.woff2` (or `.woff`, `.ttf`)

## Setup Steps

1. **Create the fonts directory:**
   ```bash
   mkdir -p public/fonts
   ```

2. **Add font files:**
   - Place all font files in the `public/fonts/` directory
   - Ensure file names match exactly as listed above (case-sensitive)

3. **Font Format Priority:**
   - The CSS will try to load fonts in this order: `.woff2` → `.woff` → `.ttf`
   - `.woff2` is preferred for best compression and performance
   - If you only have `.ttf` files, they will work fine

4. **Verify Installation:**
   - After adding the fonts, restart your development server
   - Check the browser console for any font loading errors
   - Inspect elements to verify the fonts are being applied

## Font Sources

### Somar Arabic
- **Designer:** Baianat Type Design
- **Type:** Modern grotesque sans-serif
- **Supports:** Arabic and Latin scripts
- **Availability:** Available from various font repositories (OnlineWebFonts, Fontesk, etc.)
- **License:** Check license terms before use

### Madani
- **Designer:** NamelaType (Nur Syamsi and Panca Ahmadi Hasan)
- **Type:** Professional sans-serif
- **Supports:** English and multiple languages
- **Availability:** Available from MyFonts, CDNFonts, etc.
- **License:** Check license terms before use (may require purchase)

## Current Font Configuration

The fonts are configured in:
- `src/app/globals.css` - @font-face declarations and font-family rules
- `src/app/layout.js` - Body font-family fallback

## Font Usage

- **English (LTR) text:** Uses "Madani" font family
- **Arabic (RTL) text:** Uses "Somar Arabic" font family
- The fonts automatically switch based on the `dir` attribute (`ltr` vs `rtl`)

## Troubleshooting

If fonts don't load:
1. Check that files are in `public/fonts/` directory
2. Verify file names match exactly (case-sensitive)
3. Check browser console for 404 errors
4. Ensure font files are not corrupted
5. Try clearing browser cache

## Fallback Fonts

If the brand fonts fail to load, the system will fall back to:
- System fonts: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`

This ensures the website remains readable even if custom fonts don't load.
