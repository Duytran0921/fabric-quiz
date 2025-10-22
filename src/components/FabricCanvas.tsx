import React, { useEffect, useRef, useState } from 'react';
import { Canvas, Rect, Circle, Text } from 'fabric';
import './FabricCanvas.css';

interface FabricCanvasProps {
  width?: number;
  height?: number;
  className?: string;
}

const FabricCanvas: React.FC<FabricCanvasProps> = ({ 
  width = 800, 
  height = 600, 
  className = '' 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvasRef = useRef<Canvas | null>(null);
  const [isCanvasReady, setIsCanvasReady] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize Fabric.js canvas
    const canvas = new Canvas(canvasRef.current, {
      width,
      height,
      backgroundColor: '#f8f9fa',
      selection: true,
    });

    fabricCanvasRef.current = canvas;
    setIsCanvasReady(true);

    // Add some example objects
    const rect = new Rect({
      left: 100,
      top: 100,
      width: 100,
      height: 100,
      fill: '#ff6b6b',
      stroke: '#333',
      strokeWidth: 2,
    });

    const circle = new Circle({
      left: 250,
      top: 150,
      radius: 50,
      fill: '#4ecdc4',
      stroke: '#333',
      strokeWidth: 2,
    });

    const text = new Text('Hello Fabric.js!', {
      left: 100,
      top: 250,
      fontSize: 24,
      fill: '#333',
      fontFamily: 'Arial',
    });

    // Add objects to canvas
    canvas.add(rect, circle, text);

    // Center all objects
    canvas.centerObject(rect);
    canvas.centerObject(circle);
    canvas.centerObject(text);

    // Render the canvas
    canvas.renderAll();

    // Cleanup function
    return () => {
      canvas.dispose();
    };
  }, [width, height]);

  const addRectangle = () => {
    if (!fabricCanvasRef.current) return;

    const rect = new Rect({
      left: Math.random() * 400,
      top: Math.random() * 300,
      width: 80,
      height: 80,
      fill: `hsl(${Math.random() * 360}, 70%, 60%)`,
      stroke: '#333',
      strokeWidth: 2,
    });

    fabricCanvasRef.current.add(rect);
    fabricCanvasRef.current.renderAll();
  };

  const addCircle = () => {
    if (!fabricCanvasRef.current) return;

    const circle = new Circle({
      left: Math.random() * 400,
      top: Math.random() * 300,
      radius: 40,
      fill: `hsl(${Math.random() * 360}, 70%, 60%)`,
      stroke: '#333',
      strokeWidth: 2,
    });

    fabricCanvasRef.current.add(circle);
    fabricCanvasRef.current.renderAll();
  };

  const addText = () => {
    if (!fabricCanvasRef.current) return;

    const text = new Text('New Text', {
      left: Math.random() * 400,
      top: Math.random() * 300,
      fontSize: 20,
      fill: '#333',
      fontFamily: 'Arial',
    });

    fabricCanvasRef.current.add(text);
    fabricCanvasRef.current.renderAll();
  };

  const clearCanvas = () => {
    if (!fabricCanvasRef.current) return;
    fabricCanvasRef.current.clear();
    fabricCanvasRef.current.backgroundColor = '#f8f9fa';
    fabricCanvasRef.current.renderAll();
  };

  const exportCanvas = () => {
    if (!fabricCanvasRef.current) return;
    
    const dataURL = fabricCanvasRef.current.toDataURL({
      format: 'png',
      quality: 1,
      multiplier: 1,
    });
    
    const link = document.createElement('a');
    link.download = 'fabric-canvas.png';
    link.href = dataURL;
    link.click();
  };

  return (
    <div className={`fabric-canvas-container ${className}`}>
      <div className="canvas-controls">
        <button onClick={addRectangle} disabled={!isCanvasReady}>
          Add Rectangle
        </button>
        <button onClick={addCircle} disabled={!isCanvasReady}>
          Add Circle
        </button>
        <button onClick={addText} disabled={!isCanvasReady}>
          Add Text
        </button>
        <button onClick={clearCanvas} disabled={!isCanvasReady}>
          Clear Canvas
        </button>
        <button onClick={exportCanvas} disabled={!isCanvasReady}>
          Export PNG
        </button>
      </div>
      
      <div className="canvas-wrapper">
        <canvas ref={canvasRef} />
      </div>
      
      <div className="canvas-info">
        <p>Canvas is ready: {isCanvasReady ? 'Yes' : 'No'}</p>
        <p>Instructions: Click and drag objects to move them. Use mouse wheel to zoom. Hold Shift and drag to select multiple objects.</p>
      </div>
    </div>
  );
};

export default FabricCanvas;
