# StickerSmash 🎨

A cross-platform mobile application built with Expo that allows users to select images, add emoji stickers, and save their creations. Perfect for creating fun and personalized images on iOS, Android, and the web.

## Features

- 📸 **Image Selection**: Pick images from your device's photo library
- 🎭 **Emoji Sticker Placement**: Add and position emoji stickers on your images
- 💾 **Save Creations**: Save your sticker-decorated images to your device
- 📱 **Cross-Platform**: Works seamlessly on iOS, Android, and web platforms
- 🎯 **Interactive UI**: Intuitive bottom tab navigation and touch gestures
- ✨ **Rich Emoji Library**: Access a wide selection of emoji stickers

## Project Structure

```
StickerSmash/
├── app/                          # App navigation and main routes
│   ├── _layout.tsx              # Root layout configuration
│   ├── +not-found.tsx           # 404 page
│   └── (tabs)/                  # Tabbed navigation
│       ├── _layout.tsx          # Tabs layout
│       ├── index.tsx            # Main sticker editor screen
│       └── about.tsx            # About screen
├── components/                   # Reusable React components
│   ├── Button.tsx               # Primary button component
│   ├── CircleButton.tsx         # Circular button component
│   ├── EmojiList.tsx            # List of available emoji stickers
│   ├── EmojiPicker.tsx          # Emoji selection interface
│   ├── EmojiSticker.tsx         # Individual emoji sticker component
│   ├── IconButton.tsx           # Icon button component
│   └── ImageViewer.tsx          # Image display component
├── assets/                       # Static assets
│   └── images/                  # Image resources
├── package.json                 # Project dependencies
├── tsconfig.json                # TypeScript configuration
├── app.json                      # Expo app configuration
└── README.md                    # This file
```

## Tech Stack

- **Framework**: [Expo](https://expo.dev) with React Native
- **Navigation**: Expo Router (file-based routing)
- **Language**: TypeScript
- **UI Components**: React Native with custom components
- **Image Handling**: expo-image-picker, expo-media-library
- **Icons**: @expo/vector-icons
- **Image Processing**: dom-to-image, react-native-view-shot

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (optional, will use npx)

### Installation

1. Clone or navigate to the project directory:

   ```bash
   cd StickerSmash
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

1. Start the development server:

   ```bash
   npm start
   ```

   Or use platform-specific commands:

   ```bash
   npm run android    # Launch Android emulator
   npm run ios        # Launch iOS simulator
   npm run web        # Run on web
   ```

2. In the terminal output, choose your target platform:
   - Press `a` for Android emulator
   - Press `i` for iOS simulator
   - Press `w` for web
   - Scan QR code with Expo Go app for physical device testing

## Available Scripts

- `npm start` - Start the development server
- `npm run android` - Run on Android emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run on web browser
- `npm run lint` - Run ESLint to check code quality
- `npm run reset-project` - Reset to a blank project structure

## Usage

1. **Open an Image**: Tap the image area to select a photo from your device
2. **Add Stickers**: Use the emoji picker to select and place emoji stickers on your image
3. **Position Stickers**: Drag stickers around to position them where you want
4. **Save**: Use the save button to export your sticker-decorated image to your photo library

## Development

This project uses file-based routing with [Expo Router](https://docs.expo.dev/router/introduction/). The main app structure is defined in the `app/` directory.

### Code Quality

Run the linter to check code quality:

```bash
npm run lint
```

### TypeScript

The project is fully typed with TypeScript. Check `tsconfig.json` for compiler options.

## Deployment

To build a production-ready app:

```bash
# For Android
eas build --platform android

# For iOS
eas build --platform ios

# For web
eas build --platform web
```

See `eas.json` for EAS Build configuration.

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router Guide](https://docs.expo.dev/router/introduction/)
- [TypeScript in React Native](https://reactnative.dev/docs/typescript)

## Contributing

Feel free to submit issues and pull requests to improve the project.

## Support

For issues, questions, or suggestions, please open an issue in the repository or contact the development team.

---

**Happy sticker smashing!** 🎉
