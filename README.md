# Connect 4 Game — React + TypeScript + Vite + XState

> A modern Connect 4 game built with React, TypeScript, Vite, and XState for state management.

## Overview
This project demonstrates how to use **XState** to manage complex UI logic in a React application.  
It recreates the classic Connect 4 (Connect 4) game with a clean and modular architecture.

## Resources
This application was built following:
- [Grafikart's Puissance 4 WebSocket Tutorial](https://grafikart.fr/formations/puissance-4-websocket)
- [XState Tic Tac Toe Example](https://github.com/statelyai/xstate/tree/main/examples/tic-tac-toe-react)

## Getting Started

### Installation
Clone the repository and install the dependencies:

```bash
git clone https://github.com/dens26/connect4
cd connect4
npm install
```

### Start the developement server
```bash
npm run dev
```
The application will be available at http://localhost:5173.

### Tech Stack

- React
- Vite
- TypeScript
- XState
- Vitest

## Development Notes

This project uses an enhanced ESLint configuration to ensure strict and type-safe code quality.
Type-Aware ESLint Configuration

You can expand the ESLint settings by enabling strict type-checked rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## License

This project is licensed under the MIT License.