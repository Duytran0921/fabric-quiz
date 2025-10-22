# Fabric.js + React + TypeScript

A modern React application built with TypeScript and Fabric.js for interactive canvas manipulation.

## Features

- 🎨 **Interactive Canvas**: Create and manipulate shapes, text, and objects
- 🖱️ **Drag & Drop**: Move objects around the canvas
- 🎯 **Multi-selection**: Select multiple objects with Shift+click
- 🔄 **Zoom & Pan**: Mouse wheel zoom and canvas navigation
- 📤 **Export**: Export canvas as PNG image
- 🎨 **Dynamic Colors**: Random colors for new objects
- 📱 **Responsive**: Works on desktop and mobile devices

## Tech Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Fabric.js 6.7** - Powerful canvas library
- **Vite** - Fast build tool and dev server
- **pnpm** - Efficient package manager

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd farbris
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm build-windows` - Build for Windows (as per user preference)
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## Usage

### Canvas Controls

- **Add Rectangle**: Creates a new rectangle with random color
- **Add Circle**: Creates a new circle with random color  
- **Add Text**: Adds editable text to the canvas
- **Clear Canvas**: Removes all objects from the canvas
- **Export PNG**: Downloads the canvas as a PNG image

### Canvas Interactions

- **Move Objects**: Click and drag any object to move it
- **Select Multiple**: Hold Shift and click to select multiple objects
- **Zoom**: Use mouse wheel to zoom in/out
- **Pan**: Click and drag empty canvas area to pan

## Project Structure

```
src/
├── components/
│   ├── FabricCanvas.tsx    # Main canvas component
│   └── FabricCanvas.css    # Canvas styling
├── App.tsx                 # Main app component
├── App.css                 # App styling
└── main.tsx               # App entry point
```

## Customization

### Canvas Size
Modify the canvas dimensions in `App.tsx`:
```tsx
<FabricCanvas 
  width={800} 
  height={600} 
  className="main-canvas"
/>
```

### Adding New Shapes
Extend the `FabricCanvas` component to add new shape types:
```tsx
const addTriangle = () => {
  const triangle = new fabric.Triangle({
    left: Math.random() * 400,
    top: Math.random() * 300,
    width: 80,
    height: 80,
    fill: `hsl(${Math.random() * 360}, 70%, 60%)`,
  });
  fabricCanvasRef.current?.add(triangle);
};
```

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details