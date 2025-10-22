import React, { useEffect, useRef, useState } from 'react';
import { Canvas, Rect, Circle, Text, Image } from 'fabric';
import './FabricCanvas.css';

interface FabricCanvasProps {
  width?: number;
  height?: number;
  className?: string;
}

const FabricCanvas: React.FC<FabricCanvasProps> = ({ 
  className = '' 
}) => {
  // Canvas 1 refs (main canvas)
  const canvas1Ref = useRef<HTMLCanvasElement>(null);
  const fabricCanvas1Ref = useRef<Canvas | null>(null);
  const [isCanvas1Ready, setIsCanvas1Ready] = useState(false);
  
  // Canvas 2-5 refs (4 small canvases in 2x2 grid)
  const canvas2Ref = useRef<HTMLCanvasElement>(null);
  const fabricCanvas2Ref = useRef<Canvas | null>(null);
  const [isCanvas2Ready, setIsCanvas2Ready] = useState(false);
  
  const canvas3Ref = useRef<HTMLCanvasElement>(null);
  const fabricCanvas3Ref = useRef<Canvas | null>(null);
  const [isCanvas3Ready, setIsCanvas3Ready] = useState(false);
  
  const canvas4Ref = useRef<HTMLCanvasElement>(null);
  const fabricCanvas4Ref = useRef<Canvas | null>(null);
  const [isCanvas4Ready, setIsCanvas4Ready] = useState(false);
  
  const canvas5Ref = useRef<HTMLCanvasElement>(null);
  const fabricCanvas5Ref = useRef<Canvas | null>(null);
  const [isCanvas5Ready, setIsCanvas5Ready] = useState(false);

  // Layout mode state
  const [layoutMode, setLayoutMode] = useState<'2x2' | '1x2' | '1x3'>('2x2');

  // Selected object state
  const [selectedObject, setSelectedObject] = useState<any>(null);
  const [selectedCanvas, setSelectedCanvas] = useState<Canvas | null>(null);
  const [textContent, setTextContent] = useState('');

  // Helper function to add selection event listeners
  const addSelectionListeners = (canvas: Canvas) => {
    canvas.on('selection:created', (e) => {
      const obj = e.selected?.[0] || null;
      setSelectedObject(obj);
      setSelectedCanvas(canvas);
      if (obj && obj.type === 'text') {
        setTextContent((obj as any).text || '');
      }
    });
    canvas.on('selection:updated', (e) => {
      const obj = e.selected?.[0] || null;
      setSelectedObject(obj);
      setSelectedCanvas(canvas);
      if (obj && obj.type === 'text') {
        setTextContent((obj as any).text || '');
      }
    });
    canvas.on('selection:cleared', () => {
      setSelectedObject(null);
      setSelectedCanvas(null);
      setTextContent('');
    });
  };

  // Canvas sizes for different layouts
  const getCanvasSizes = () => {
    switch (layoutMode) {
      case '2x2':
        return {
          main: { width: 506, height: 620 },
          small: { width: 508, height: 174 }
        };
      case '1x2':
        return {
          main: { width: 506, height: 620 },
          small: { width: 508, height: 380 }
        };
      case '1x3':
        return {
          main: { width: 506, height: 620 },
          small: { width: 328, height: 380 }
        };
      default:
        return {
          main: { width: 506, height: 620 },
          small: { width: 200, height: 200 }
        };
    }
  };

  // Initialize Canvas 1
  useEffect(() => {
    if (!canvas1Ref.current) return;

    const sizes = getCanvasSizes();
    const canvas1 = new Canvas(canvas1Ref.current, {
      width: sizes.main.width,
      height: sizes.main.height,
      backgroundColor: '#f8f9fa',
      selection: true,
    });

    fabricCanvas1Ref.current = canvas1;
    setIsCanvas1Ready(true);

    // Add example objects to canvas 1
    const rect1 = new Rect({
      left: 50,
      top: 50,
      width: 80,
      height: 80,
      fill: '#ff6b6b',
      stroke: '#333',
      strokeWidth: 2,
    });

    const text1 = new Text('Canvas 1', {
      left: 50,
      top: 150,
      fontSize: 18,
      fill: '#333',
      fontFamily: 'Arial',
    });

    canvas1.add(rect1, text1);
    canvas1.renderAll();

    // Add selection event listeners
    addSelectionListeners(canvas1);

    return () => {
      canvas1.dispose();
    };
  }, [layoutMode]);

  // Initialize Canvas 2
  useEffect(() => {
    if (!canvas2Ref.current) return;

    const sizes = getCanvasSizes();
    const canvas2 = new Canvas(canvas2Ref.current, {
      width: sizes.small.width,
      height: sizes.small.height,
      backgroundColor: '#f8f9fa',
      selection: true,
    });

    fabricCanvas2Ref.current = canvas2;
    setIsCanvas2Ready(true);

    const circle2 = new Circle({
      left: 25,
      top: 25,
      radius: 20,
      fill: '#4ecdc4',
      stroke: '#333',
      strokeWidth: 2,
    });

    canvas2.add(circle2);
    canvas2.renderAll();

    // Add selection event listeners
    addSelectionListeners(canvas2);

    return () => {
      canvas2.dispose();
    };
  }, [layoutMode]);

  // Initialize Canvas 3
  useEffect(() => {
    if (!canvas3Ref.current) return;

    const sizes = getCanvasSizes();
    const canvas3 = new Canvas(canvas3Ref.current, {
      width: sizes.small.width,
      height: sizes.small.height,
      backgroundColor: '#f8f9fa',
      selection: true,
    });

    fabricCanvas3Ref.current = canvas3;
    setIsCanvas3Ready(true);

    const rect3 = new Rect({
      left: 25,
      top: 25,
      width: 40,
      height: 40,
      fill: '#ff6b6b',
      stroke: '#333',
      strokeWidth: 2,
    });

    canvas3.add(rect3);
    canvas3.renderAll();

    // Add selection event listeners
    addSelectionListeners(canvas3);

    return () => {
      canvas3.dispose();
    };
  }, [layoutMode]);

  // Initialize Canvas 4
  useEffect(() => {
    if (!canvas4Ref.current) return;

    const sizes = getCanvasSizes();
    const canvas4 = new Canvas(canvas4Ref.current, {
      width: sizes.small.width,
      height: sizes.small.height,
      backgroundColor: '#f8f9fa',
      selection: true,
    });

    fabricCanvas4Ref.current = canvas4;
    setIsCanvas4Ready(true);

    const text4 = new Text('4', {
      left: 25,
      top: 25,
      fontSize: 24,
      fill: '#333',
      fontFamily: 'Arial',
    });

    canvas4.add(text4);
    canvas4.renderAll();

    // Add selection event listeners
    addSelectionListeners(canvas4);

    return () => {
      canvas4.dispose();
    };
  }, [layoutMode]);

  // Initialize Canvas 5
  useEffect(() => {
    if (!canvas5Ref.current) return;

    const sizes = getCanvasSizes();
    const canvas5 = new Canvas(canvas5Ref.current, {
      width: sizes.small.width,
      height: sizes.small.height,
      backgroundColor: '#f8f9fa',
      selection: true,
    });

    fabricCanvas5Ref.current = canvas5;
    setIsCanvas5Ready(true);

    const text5 = new Text('5', {
      left: 25,
      top: 25,
      fontSize: 24,
      fill: '#333',
      fontFamily: 'Arial',
    });

    canvas5.add(text5);
    canvas5.renderAll();

    // Add selection event listeners
    addSelectionListeners(canvas5);

    return () => {
      canvas5.dispose();
    };
  }, [layoutMode]);


  const exportCanvas1 = () => {
    if (!fabricCanvas1Ref.current) return;
    
    const dataURL = fabricCanvas1Ref.current.toDataURL({
      format: 'png',
      quality: 1,
      multiplier: 1,
    });
    
    const link = document.createElement('a');
    link.download = 'canvas-1.png';
    link.href = dataURL;
    link.click();
  };

  const exportCanvas2 = () => {
    if (!fabricCanvas2Ref.current) return;
    
    const dataURL = fabricCanvas2Ref.current.toDataURL({
      format: 'png',
      quality: 1,
      multiplier: 1,
    });
    
    const link = document.createElement('a');
    link.download = 'canvas-2.png';
    link.href = dataURL;
    link.click();
  };

  const exportCanvas3 = () => {
    if (!fabricCanvas3Ref.current) return;
    
    const dataURL = fabricCanvas3Ref.current.toDataURL({
      format: 'png',
      quality: 1,
      multiplier: 1,
    });
    
    const link = document.createElement('a');
    link.download = 'canvas-3.png';
    link.href = dataURL;
    link.click();
  };

  const exportCanvas4 = () => {
    if (!fabricCanvas4Ref.current) return;
    
    const dataURL = fabricCanvas4Ref.current.toDataURL({
      format: 'png',
      quality: 1,
      multiplier: 1,
    });
    
    const link = document.createElement('a');
    link.download = 'canvas-4.png';
    link.href = dataURL;
    link.click();
  };

  const exportCanvas5 = () => {
    if (!fabricCanvas5Ref.current) return;
    
    const dataURL = fabricCanvas5Ref.current.toDataURL({
      format: 'png',
      quality: 1,
      multiplier: 1,
    });
    
    const link = document.createElement('a');
    link.download = 'canvas-5.png';
    link.href = dataURL;
    link.click();
  };

  // Drag and Drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
  };

  const handleDrop = (e: React.DragEvent, canvasRef: React.RefObject<Canvas | null>) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const files = Array.from(e.dataTransfer.files);
    
    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const imgElement = new window.Image();
          imgElement.onload = () => {
            // Calculate scale to fit image within 80% of canvas
            const canvasWidth = canvas.width!;
            const canvasHeight = canvas.height!;
            const imgWidth = imgElement.width;
            const imgHeight = imgElement.height;
            
            // Use 80% of canvas size for better control
            const targetWidth = canvasWidth * 0.8;
            const targetHeight = canvasHeight * 0.8;
            
            // Calculate scale to fit image within 80% canvas bounds
            const scaleX = targetWidth / imgWidth;
            const scaleY = targetHeight / imgHeight;
            const scale = Math.min(scaleX, scaleY, 1); // Don't scale up, only down
            
            // Calculate position to center the image
            const scaledWidth = imgWidth * scale;
            const scaledHeight = imgHeight * scale;
            const left = (canvasWidth - scaledWidth) / 2;
            const top = (canvasHeight - scaledHeight) / 2;
            
            const fabricImage = new Image(imgElement, {
              left: left,
              top: top,
              scaleX: scale,
              scaleY: scale,
            });
            canvas.add(fabricImage);
            canvas.renderAll();
          };
          imgElement.src = event.target?.result as string;
        };
        reader.readAsDataURL(file);
      } else if (file.type === 'text/plain') {
        const reader = new FileReader();
        reader.onload = (event) => {
          const text = new Text(event.target?.result as string, {
            left: Math.random() * (canvas.width! - 200),
            top: Math.random() * (canvas.height! - 50),
            fontSize: 16,
            fill: '#333',
            fontFamily: 'Arial',
          });
          canvas.add(text);
          canvas.renderAll();
        };
        reader.readAsText(file);
      }
    });
  };

  // Object property adjustment functions
  const updateObjectProperty = (property: string, value: any) => {
    if (selectedObject && selectedCanvas) {
      selectedObject.set(property, value);
      selectedCanvas.renderAll();
    }
  };

  const deleteSelectedObject = () => {
    if (selectedObject && selectedCanvas) {
      selectedCanvas.remove(selectedObject);
      selectedCanvas.renderAll();
      setSelectedObject(null);
      setSelectedCanvas(null);
    }
  };

  const bringToFront = () => {
    if (selectedObject && selectedCanvas) {
      selectedCanvas.bringObjectToFront(selectedObject);
      selectedCanvas.renderAll();
    }
  };

  const sendToBack = () => {
    if (selectedObject && selectedCanvas) {
      selectedCanvas.sendObjectToBack(selectedObject);
      selectedCanvas.renderAll();
    }
  };

  // Text editing functions with autosave
  const handleTextChange = (newText: string) => {
    setTextContent(newText);
    
    // Autosave to canvas
    if (selectedObject && selectedCanvas && selectedObject.type === 'text') {
      selectedObject.set('text', newText);
      selectedCanvas.renderAll();
    }
  };

  // Render small canvases based on layout mode
  const renderSmallCanvases = () => {
    const canvases = [
      { ref: canvas2Ref, fabricRef: fabricCanvas2Ref, ready: isCanvas2Ready, export: exportCanvas2, title: "Export Canvas 2", id: 2 },
      { ref: canvas3Ref, fabricRef: fabricCanvas3Ref, ready: isCanvas3Ready, export: exportCanvas3, title: "Export Canvas 3", id: 3 },
      { ref: canvas4Ref, fabricRef: fabricCanvas4Ref, ready: isCanvas4Ready, export: exportCanvas4, title: "Export Canvas 4", id: 4 },
      { ref: canvas5Ref, fabricRef: fabricCanvas5Ref, ready: isCanvas5Ready, export: exportCanvas5, title: "Export Canvas 5", id: 5 }
    ];

    const getVisibleCanvases = () => {
      switch (layoutMode) {
        case '1x2': return canvases.slice(0, 2);
        case '1x3': return canvases.slice(0, 3);
        case '2x2': 
        default: return canvases;
      }
    };

    const getGridClass = () => {
      switch (layoutMode) {
        case '1x2': return 'small-canvases-grid-1x2';
        case '1x3': return 'small-canvases-grid-1x3';
        case '2x2': 
        default: return 'small-canvases-grid-2x2';
      }
    };

    const visibleCanvases = getVisibleCanvases();

    return (
      <div className={getGridClass()}>
        {canvases.map((canvas) => {
          const isVisible = visibleCanvases.some(vc => vc.id === canvas.id);
          return (
            <div 
              key={canvas.id}
              className={`canvas-wrapper small-canvas ${!isVisible ? 'hidden' : ''}`}
              onDragOver={handleDragOver}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, canvas.fabricRef)}
            >
              <canvas ref={canvas.ref} />
              <button 
                className="export-btn-internal" 
                onClick={canvas.export} 
                disabled={!canvas.ready}
                title={canvas.title}
              >
                📥
              </button>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={`fabric-canvas-container ${className}`}>
      <div className="canvas-main-area">
        {/* Main Canvas */}
        <div 
          className="canvas-wrapper main-canvas"
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, fabricCanvas1Ref)}
        >
          <canvas ref={canvas1Ref} />
          <button 
            className="export-btn-internal" 
            onClick={exportCanvas1} 
            disabled={!isCanvas1Ready}
            title="Export Canvas 1"
          >
            📥
          </button>
        </div>
        
        {/* Small Canvases */}
        {renderSmallCanvases()}
      </div>

      {/* Tool Panel */}
      <div className="tool-panel">
        <h3>Layout Options</h3>
        <div className="radio-group">
          <label className="radio-option">
            <input 
              type="radio" 
              name="layout" 
              value="2x2" 
              checked={layoutMode === '2x2'}
              onChange={(e) => setLayoutMode(e.target.value as '2x2')}
            />
            <span>2x2 Grid (4 canvases)</span>
          </label>
          
          <label className="radio-option">
            <input 
              type="radio" 
              name="layout" 
              value="1x2" 
              checked={layoutMode === '1x2'}
              onChange={(e) => setLayoutMode(e.target.value as '1x2')}
            />
            <span>1x2 Grid (2 canvases)</span>
          </label>
          
          <label className="radio-option">
            <input 
              type="radio" 
              name="layout" 
              value="1x3" 
              checked={layoutMode === '1x3'}
              onChange={(e) => setLayoutMode(e.target.value as '1x3')}
            />
            <span>1x3 Grid (3 canvases)</span>
          </label>
        </div>

        {/* Object Properties Panel */}
        {selectedObject && (
          <div className="object-properties">
            <div className="properties-header">
              <h4>Object Properties</h4>
              <button 
                onClick={deleteSelectedObject} 
                className="delete-icon-btn"
                title="Delete selected object"
              >
                🗑️
              </button>
            </div>
            
            <div className="properties-content">
              {/* Text Content Editor with Autosave - MOVED TO TOP */}
              {selectedObject && selectedObject.type === 'text' && (
                <div className="property-group">
                  <label>Text Content:</label>
                  <div className="text-editor-autosave">
                    <textarea
                      value={textContent}
                      onChange={(e) => handleTextChange(e.target.value)}
                      placeholder="Enter text content..."
                      className="text-input-autosave"
                      rows={4}
                      title="Edit text content - changes are saved automatically"
                    />
                  </div>
                </div>
              )}
              
              {/* Opacity */}
            <div className="property-group">
              <label>Opacity:</label>
              <input 
                type="range" 
                min="0" 
                max="1" 
                step="0.1" 
                value={selectedObject.opacity || 1}
                onChange={(e) => updateObjectProperty('opacity', parseFloat(e.target.value))}
                title="Adjust object opacity"
              />
              <span>{Math.round((selectedObject.opacity || 1) * 100)}%</span>
            </div>

            {/* Rotation */}
            <div className="property-group">
              <label>Rotation:</label>
              <input 
                type="range" 
                min="0" 
                max="360" 
                step="1" 
                value={selectedObject.angle || 0}
                onChange={(e) => updateObjectProperty('angle', parseInt(e.target.value))}
                title="Rotate object"
              />
              <span>{selectedObject.angle || 0}°</span>
            </div>

            {/* Scale */}
            <div className="property-group">
              <label>Scale:</label>
              <input 
                type="range" 
                min="0.1" 
                max="3" 
                step="0.1" 
                value={selectedObject.scaleX || 1}
                onChange={(e) => {
                  const scale = parseFloat(e.target.value);
                  updateObjectProperty('scaleX', scale);
                  updateObjectProperty('scaleY', scale);
                }}
                title="Scale object size"
              />
              <span>{Math.round((selectedObject.scaleX || 1) * 100)}%</span>
            </div>

            {/* Fill Color (for shapes) */}
            {selectedObject.fill && (
              <div className="property-group">
                <label>Fill Color:</label>
                <input 
                  type="color" 
                  value={selectedObject.fill}
                  onChange={(e) => updateObjectProperty('fill', e.target.value)}
                  title="Change fill color"
                />
              </div>
            )}

            {/* Stroke Color */}
            {selectedObject.stroke && (
              <div className="property-group">
                <label>Stroke Color:</label>
                <input 
                  type="color" 
                  value={selectedObject.stroke}
                  onChange={(e) => updateObjectProperty('stroke', e.target.value)}
                  title="Change stroke color"
                />
              </div>
            )}

            {/* Stroke Width */}
            {selectedObject.strokeWidth !== undefined && (
              <div className="property-group">
                <label>Stroke Width:</label>
                <input 
                  type="range" 
                  min="0" 
                  max="20" 
                  step="1" 
                  value={selectedObject.strokeWidth || 0}
                  onChange={(e) => updateObjectProperty('strokeWidth', parseInt(e.target.value))}
                  title="Adjust stroke width"
                />
                <span>{selectedObject.strokeWidth || 0}px</span>
              </div>
            )}

            {/* Font Size (for text) */}
            {selectedObject.fontSize && (
              <div className="property-group">
                <label>Font Size:</label>
                <input 
                  type="range" 
                  min="8" 
                  max="72" 
                  step="1" 
                  value={selectedObject.fontSize}
                  onChange={(e) => updateObjectProperty('fontSize', parseInt(e.target.value))}
                  title="Adjust font size"
                />
                <span>{selectedObject.fontSize}px</span>
              </div>
            )}

              {/* Action Buttons */}
              <div className="action-buttons">
                <button onClick={bringToFront} className="action-btn">
                  Bring to Front
                </button>
                <button onClick={sendToBack} className="action-btn">
                  Send to Back
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FabricCanvas;
