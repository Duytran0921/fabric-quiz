import React, { useEffect, useRef, useState } from 'react';
import { Canvas, Rect, Circle, Text, Image, Line, Triangle, Ellipse, Polygon } from 'fabric';

interface FabricCanvasProps {
  width?: number;
  height?: number;
  className?: string;
}

const FabricCanvas: React.FC<FabricCanvasProps> = () => {
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
  
  // Drag and drop state
  const [dragOverCanvas, setDragOverCanvas] = useState<string | null>(null);

  // Tab state
  const [activeTab, setActiveTab] = useState<'properties' | 'elements'>('properties');
  
  // Success feedback state
  const [showSuccessFeedback, setShowSuccessFeedback] = useState<string | null>(null);
  

  // Helper function to add selection event listeners
  const addSelectionListeners = (canvas: Canvas) => {
    canvas.on('selection:created', (e) => {
      const obj = e.selected?.[0] || null;
      setSelectedObject(obj);
      setSelectedCanvas(canvas);
      
      // Auto-switch to properties tab when object is selected
      if (obj) {
        setActiveTab('properties');
        console.log('Auto-switched to properties tab due to object selection');
      }
      
      if (obj && obj.type === 'text') {
        setTextContent((obj as any).text || '');
      }
    });
    canvas.on('selection:updated', (e) => {
      const obj = e.selected?.[0] || null;
      setSelectedObject(obj);
      setSelectedCanvas(canvas);
      
      // Auto-switch to properties tab when object is selected
      if (obj) {
        setActiveTab('properties');
        console.log('Auto-switched to properties tab due to object selection');
      }
      
      if (obj && obj.type === 'text') {
        setTextContent((obj as any).text || '');
      }
    });
    canvas.on('selection:cleared', () => {
      setSelectedObject(null);
      setSelectedCanvas(null);
      setTextContent('');
      // Don't auto-switch tab when selection is cleared
    });
  };

  // Canvas sizes for different layouts
  const getCanvasSizes = () => {
    switch (layoutMode) {
      case '2x2':
        return {
          main: { width: 506, height: 620 },
          small: { width: 254, height: 87 }
        };
      case '1x2':
        return {
          main: { width: 506, height: 620 },
          small: { width: 254, height: 190 }
        };
      case '1x3':
        return {
          main: { width: 506, height: 620 },
          small: { width: 164, height: 190 }
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

    // Canvas 1 starts empty
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

    // Canvas 2 starts empty
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

    // Canvas 3 starts empty
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

    // Canvas 4 starts empty
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

    // Canvas 5 starts empty
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
    console.log('Drag over canvas');
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    const canvasId = e.currentTarget.getAttribute('data-canvas-id');
    setDragOverCanvas(canvasId);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOverCanvas(null);
  };

  const handleDrop = (e: React.DragEvent, canvasRef: React.RefObject<Canvas | null>) => {
    e.preventDefault();
    setDragOverCanvas(null);
    
    const canvas = canvasRef.current;
    if (!canvas) {
      console.log('Canvas not found');
      return;
    }

    // Check if it's an element drop (from elements tab)
    const elementType = e.dataTransfer.getData('text/plain');
    console.log('Drop event - elementType:', elementType);
    if (elementType && ['rectangle', 'circle', 'ellipse', 'triangle', 'line', 'polygon', 'text'].includes(elementType)) {
      console.log('Adding element to canvas:', elementType);
      
      // Get drop position relative to canvas
      const canvasRect = canvas.getElement().getBoundingClientRect();
      const dropX = e.clientX - canvasRect.left;
      const dropY = e.clientY - canvasRect.top;
      
      addElementToCanvas(canvas, elementType, dropX, dropY);
      return;
    }

    // Handle file drops
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

  // Element drag and drop handlers
  const handleElementDragStart = (e: React.DragEvent, elementType: string) => {
    console.log('Drag start:', elementType);
    e.dataTransfer.setData('text/plain', elementType);
    e.dataTransfer.effectAllowed = 'copy';
    
    // Create custom drag image (just the shape)
    const dragImage = e.currentTarget.querySelector('.shape-preview') as HTMLElement;
    if (dragImage) {
      // Clone the shape element for drag image
      const clonedShape = dragImage.cloneNode(true) as HTMLElement;
      clonedShape.style.transform = 'scale(1.2)';
      clonedShape.style.opacity = '0.8';
      
      // Create a temporary container for the drag image
      const dragContainer = document.createElement('div');
      dragContainer.style.position = 'absolute';
      dragContainer.style.top = '-1000px';
      dragContainer.style.left = '-1000px';
      dragContainer.appendChild(clonedShape);
      document.body.appendChild(dragContainer);
      
      // Set the custom drag image
      e.dataTransfer.setDragImage(dragContainer, 20, 20);
      
      // Clean up after a short delay
      setTimeout(() => {
        document.body.removeChild(dragContainer);
      }, 0);
    }
  };

  const addElementToCanvas = (canvas: Canvas, elementType: string, dropX?: number, dropY?: number) => {
    // Use drop position if available, otherwise center the element
    const centerX = dropX !== undefined ? dropX : canvas.width! / 2;
    const centerY = dropY !== undefined ? dropY : canvas.height! / 2;
    
    let element;
    
    switch (elementType) {
      case 'rectangle':
        element = new Rect({
          left: centerX - 40,
          top: centerY - 20,
          width: 80,
          height: 40,
          fill: '#ff6b6b',
          stroke: '#333',
          strokeWidth: 2,
        });
        break;
      case 'circle':
        element = new Circle({
          left: centerX,
          top: centerY,
          radius: 25,
          fill: '#4ecdc4',
          stroke: '#333',
          strokeWidth: 2,
        });
        break;
      case 'ellipse':
        element = new Ellipse({
          left: centerX,
          top: centerY,
          rx: 30,
          ry: 20,
          fill: '#9b59b6',
          stroke: '#333',
          strokeWidth: 2,
        });
        break;
      case 'triangle':
        element = new Triangle({
          left: centerX - 25,
          top: centerY - 25,
          width: 50,
          height: 50,
          fill: '#e74c3c',
          stroke: '#333',
          strokeWidth: 2,
        });
        break;
      case 'line':
        element = new Line([centerX - 30, centerY, centerX + 30, centerY], {
          stroke: '#f39c12',
          strokeWidth: 3,
        });
        break;
      case 'polygon':
        element = new Polygon([
          { x: centerX, y: centerY - 20 },
          { x: centerX + 20, y: centerY + 10 },
          { x: centerX - 20, y: centerY + 10 }
        ], {
          fill: '#2ecc71',
          stroke: '#333',
          strokeWidth: 2,
        });
        break;
      case 'text':
        element = new Text('New Text', {
          left: centerX - 30,
          top: centerY - 10,
          fontSize: 16,
          fill: '#333',
          fontFamily: 'Arial',
        });
        break;
      default:
        return;
    }
    
    canvas.add(element);
    
    // Auto-select the newly added element
    canvas.setActiveObject(element);
    canvas.renderAll();
    
    // Update selection state for the properties panel
    setSelectedObject(element);
    setSelectedCanvas(canvas);
    
    // Auto-switch to properties tab when element is added
    setActiveTab('properties');
    
    // If it's a text element, set the text content
    if (elementType === 'text') {
      setTextContent('New Text');
    }
    
    console.log('Element added and selected:', elementType);
    
    // Show success feedback
    setShowSuccessFeedback(`${elementType} added successfully!`);
    setTimeout(() => setShowSuccessFeedback(null), 2000);
    
    // Brief highlight effect
    setTimeout(() => {
      element.set('opacity', 0.7);
      canvas.renderAll();
      setTimeout(() => {
        element.set('opacity', 1);
        canvas.renderAll();
      }, 200);
    }, 100);
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
        case '1x2': return 'grid grid-cols-2 grid-rows-1 gap-2 w-fit justify-self-center';
        case '1x3': return 'grid grid-cols-3 grid-rows-1 gap-2 w-fit justify-self-center';
        case '2x2': 
        default: return 'grid grid-cols-2 grid-rows-2 gap-2 w-fit justify-self-center';
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
              data-canvas-id={`canvas-${canvas.id}`}
              className={`relative border-2 rounded-lg shadow-md bg-white overflow-hidden transition-all duration-200 small-canvas canvas-drop-zone ${
                dragOverCanvas === `canvas-${canvas.id}` 
                  ? 'drag-over' 
                  : 'border-gray-300'
              } ${!isVisible ? 'hidden' : ''}`}
              onDragOver={handleDragOver}
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, canvas.fabricRef)}
            >
              <canvas ref={canvas.ref} />
              <button 
                className="absolute top-2 right-2 bg-white/90 border border-gray-300 rounded-md text-lg cursor-pointer p-2 transition-all duration-200 shadow-sm z-10 hover:bg-white hover:scale-105 hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed disabled:transform-none" 
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
    <div className='w-full h-full flex flex-row gap-8 '>
      {/* Success Feedback Toast */}
      {showSuccessFeedback && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300">
          {showSuccessFeedback}
        </div>
      )}
      
      
      {/* Fabric Canvas Area - Separated from tools */}
      <div className=" w-[70%] bg-gray-300 p-4 rounded-lg ">
        <div className="flex-1 flex flex-col gap-4 items-center justify-center min-w-[600px] bg-blue-500 p-6 overflow-hidden">
          {/* Main Canvas */}
          <div 
            data-canvas-id="canvas-1"
            className={`relative border-2 rounded-lg shadow-md bg-white overflow-hidden justify-self-center transition-all duration-200 main-canvas canvas-drop-zone ${
              dragOverCanvas === 'canvas-1' 
                ? 'drag-over' 
                : 'border-gray-300'
            }`}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, fabricCanvas1Ref)}
          >
            <canvas ref={canvas1Ref} />
            <button 
              className="absolute top-2 right-2 bg-white/90 border border-gray-300 rounded-md text-lg cursor-pointer p-2 transition-all duration-200 shadow-sm z-10 hover:bg-white hover:scale-105 hover:shadow-md disabled:opacity-30 disabled:cursor-not-allowed disabled:transform-none" 
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
      </div>

      {/* Tool Panel - Separated from canvas area */}
      <div className="w-[30%] bg-white p-6 rounded-lg">
        <h3 className="text-lg font-bold text-center text-gray-800">Layout Options</h3>
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2 cursor-pointer p-2 rounded-md transition-colors duration-200 hover:bg-gray-100">
            <input 
              type="radio" 
              name="layout" 
              value="2x2" 
              checked={layoutMode === '2x2'}
              onChange={(e) => setLayoutMode(e.target.value as '2x2')}
              className="m-0 cursor-pointer"
            />
            <span className="text-sm text-gray-700 font-medium">2x2 Grid (4 canvases)</span>
          </label>
          
          <label className="flex items-center gap-2 cursor-pointer p-2 rounded-md transition-colors duration-200 hover:bg-gray-100">
            <input 
              type="radio" 
              name="layout" 
              value="1x2" 
              checked={layoutMode === '1x2'}
              onChange={(e) => setLayoutMode(e.target.value as '1x2')}
              className="m-0 cursor-pointer"
            />
            <span className="text-sm text-gray-700 font-medium">1x2 Grid (2 canvases)</span>
          </label>
          
          <label className="flex items-center gap-2 cursor-pointer p-2 rounded-md transition-colors duration-200 hover:bg-gray-100">
            <input 
              type="radio" 
              name="layout" 
              value="1x3" 
              checked={layoutMode === '1x3'}
              onChange={(e) => setLayoutMode(e.target.value as '1x3')}
              className="m-0 cursor-pointer"
            />
            <span className="text-sm text-gray-700 font-medium">1x3 Grid (3 canvases)</span>
          </label>
        </div>

        {/* Tab Navigation */}
        <div className="mt-6 border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('properties')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                activeTab === 'properties'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Object Properties
            </button>
            <button
              onClick={() => setActiveTab('elements')}
              className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                activeTab === 'elements'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Elements
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {/* Tab 1: Object Properties */}
          {activeTab === 'properties' && (
            <>
              {selectedObject ? (
                <div className="h-[500px] flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="m-0 text-base font-semibold text-gray-700 flex-1">Object Properties</h4>
                    <button 
                      onClick={deleteSelectedObject} 
                      className="bg-none border-none text-lg cursor-pointer p-1 rounded transition-all duration-200 flex items-center justify-center min-w-8 h-8 hover:bg-red-100 hover:scale-110 active:scale-95"
                      title="Delete selected object"
                    >
                      🗑️
                    </button>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto pr-2 -mr-2">
                    {/* Text Content Editor with Autosave - MOVED TO TOP */}
                    {selectedObject && selectedObject.type === 'text' && (
                      <div className="flex flex-col gap-1 mb-4">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Text Content:</label>
                        <div className="flex flex-col gap-1 w-full">
                          <textarea
                            value={textContent}
                            onChange={(e) => handleTextChange(e.target.value)}
                            placeholder="Enter text content..."
                            className="w-full p-3 border-2 border-gray-300 rounded-md text-sm font-inherit resize-y min-h-20 outline-none transition-all duration-200 bg-white text-gray-700 hover:border-gray-400 focus:border-blue-500 focus:shadow-sm placeholder:text-gray-500"
                            rows={4}
                            title="Edit text content - changes are saved automatically"
                          />
                        </div>
                      </div>
                    )}
                    
                    {/* Opacity */}
                    <div className="flex flex-col gap-1 mb-4">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Opacity:</label>
                      <input 
                        type="range" 
                        min="0" 
                        max="1" 
                        step="0.1" 
                        value={selectedObject.opacity || 1}
                        onChange={(e) => updateObjectProperty('opacity', parseFloat(e.target.value))}
                        title="Adjust object opacity"
                        className="w-full h-1 rounded-sm bg-gray-300 outline-none appearance-none slider"
                      />
                      <span className="text-xs text-gray-500 text-center font-medium">{Math.round((selectedObject.opacity || 1) * 100)}%</span>
                    </div>

                    {/* Rotation */}
                    <div className="flex flex-col gap-1 mb-4">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Rotation:</label>
                      <input 
                        type="range" 
                        min="0" 
                        max="360" 
                        step="1" 
                        value={selectedObject.angle || 0}
                        onChange={(e) => updateObjectProperty('angle', parseInt(e.target.value))}
                        title="Rotate object"
                        className="w-full h-1 rounded-sm bg-gray-300 outline-none appearance-none slider"
                      />
                      <span className="text-xs text-gray-500 text-center font-medium">{selectedObject.angle || 0}°</span>
                    </div>

                    {/* Scale */}
                    <div className="flex flex-col gap-1 mb-4">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Scale:</label>
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
                        className="w-full h-1 rounded-sm bg-gray-300 outline-none appearance-none slider"
                      />
                      <span className="text-xs text-gray-500 text-center font-medium">{Math.round((selectedObject.scaleX || 1) * 100)}%</span>
                    </div>

                    {/* Fill Color (for shapes) */}
                    {selectedObject.fill && (
                      <div className="flex flex-col gap-1 mb-4">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Fill Color:</label>
                        <input 
                          type="color" 
                          value={selectedObject.fill}
                          onChange={(e) => updateObjectProperty('fill', e.target.value)}
                          title="Change fill color"
                          className="w-full h-10 border-2 border-gray-300 rounded-md cursor-pointer bg-none"
                        />
                      </div>
                    )}

                    {/* Stroke Color */}
                    {selectedObject.stroke && (
                      <div className="flex flex-col gap-1 mb-4">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Stroke Color:</label>
                        <input 
                          type="color" 
                          value={selectedObject.stroke}
                          onChange={(e) => updateObjectProperty('stroke', e.target.value)}
                          title="Change stroke color"
                          className="w-full h-10 border-2 border-gray-300 rounded-md cursor-pointer bg-none"
                        />
                      </div>
                    )}

                    {/* Stroke Width */}
                    {selectedObject.strokeWidth !== undefined && (
                      <div className="flex flex-col gap-1 mb-4">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Stroke Width:</label>
                        <input 
                          type="range" 
                          min="0" 
                          max="20" 
                          step="1" 
                          value={selectedObject.strokeWidth || 0}
                          onChange={(e) => updateObjectProperty('strokeWidth', parseInt(e.target.value))}
                          title="Adjust stroke width"
                          className="w-full h-1 rounded-sm bg-gray-300 outline-none appearance-none slider"
                        />
                        <span className="text-xs text-gray-500 text-center font-medium">{selectedObject.strokeWidth || 0}px</span>
                      </div>
                    )}

                    {/* Font Size (for text) */}
                    {selectedObject.fontSize && (
                      <div className="flex flex-col gap-1 mb-4">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Font Size:</label>
                        <input 
                          type="range" 
                          min="8" 
                          max="72" 
                          step="1" 
                          value={selectedObject.fontSize}
                          onChange={(e) => updateObjectProperty('fontSize', parseInt(e.target.value))}
                          title="Adjust font size"
                          className="w-full h-1 rounded-sm bg-gray-300 outline-none appearance-none slider"
                        />
                        <span className="text-xs text-gray-500 text-center font-medium">{selectedObject.fontSize}px</span>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2 mt-5">
                      <button onClick={bringToFront} className="px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 text-xs font-medium cursor-pointer transition-all duration-200 hover:bg-gray-50 hover:border-blue-500 hover:text-blue-500">
                        Bring to Front
                      </button>
                      <button onClick={sendToBack} className="px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 text-xs font-medium cursor-pointer transition-all duration-200 hover:bg-gray-50 hover:border-blue-500 hover:text-blue-500">
                        Send to Back
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-[500px] flex items-center justify-center text-gray-500">
                  <p className="text-center">Select an object to edit its properties</p>
                </div>
              )}
            </>
          )}

          {/* Tab 2: Elements */}
          {activeTab === 'elements' && (
            <div className="h-[500px] flex flex-col">
              <h4 className="text-base font-semibold text-gray-700 mb-4">Drag Elements to Canvas</h4>
              <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col gap-3">
                  {/* Rectangle Element */}
                  <div
                    draggable={true}
                    onDragStart={(e) => {
                      console.log('Rectangle drag start');
                      handleElementDragStart(e, 'rectangle');
                    }}
                    className="flex flex-row items-center gap-3 p-3 border-2 border-gray-300 rounded-lg cursor-grab hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 active:cursor-grabbing select-none element-draggable"
                    title="Drag to add rectangle"
                  >
                    <div className="shape-preview w-12 h-8 bg-red-400 border-2 border-gray-600 rounded-sm"></div>
                    <span className="text-xs font-medium text-gray-700">Rectangle</span>
                  </div>

                  {/* Circle Element */}
                  <div
                    draggable={true}
                    onDragStart={(e) => {
                      console.log('Circle drag start');
                      handleElementDragStart(e, 'circle');
                    }}
                    className="flex flex-row items-center gap-3 p-3 border-2 border-gray-300 rounded-lg cursor-grab hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 active:cursor-grabbing select-none element-draggable"
                    title="Drag to add circle"
                  >
                    <div className="shape-preview w-8 h-8 bg-teal-400 border-2 border-gray-600 rounded-full "></div>
                    <span className="text-xs font-medium text-gray-700">Circle</span>
                  </div>

                  {/* Ellipse Element */}
                  <div
                    draggable={true}
                    onDragStart={(e) => {
                      console.log('Ellipse drag start');
                      handleElementDragStart(e, 'ellipse');
                    }}
                    className="flex flex-row items-center gap-3 p-3 border-2 border-gray-300 rounded-lg cursor-grab hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 active:cursor-grabbing select-none element-draggable"
                    title="Drag to add ellipse"
                  >
                    <div className="shape-preview w-12 h-8 bg-purple-400 border-2 border-gray-600 rounded-full "></div>
                    <span className="text-xs font-medium text-gray-700">Ellipse</span>
                  </div>

                  {/* Triangle Element */}
                  <div
                    draggable={true}
                    onDragStart={(e) => {
                      console.log('Triangle drag start');
                      handleElementDragStart(e, 'triangle');
                    }}
                    className="flex flex-row items-center gap-3 p-3 border-2 border-gray-300 rounded-lg cursor-grab hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 active:cursor-grabbing select-none element-draggable"
                    title="Drag to add triangle"
                  >
                    <div className="shape-preview w-0 h-0 border-l-6 border-r-6 border-b-8 border-l-transparent border-r-transparent border-b-red-400 "></div>
                    <span className="text-xs font-medium text-gray-700">Triangle</span>
                  </div>

                  {/* Line Element */}
                  <div
                    draggable={true}
                    onDragStart={(e) => {
                      console.log('Line drag start');
                      handleElementDragStart(e, 'line');
                    }}
                    className="flex flex-row items-center gap-3 p-3 border-2 border-gray-300 rounded-lg cursor-grab hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 active:cursor-grabbing select-none element-draggable"
                    title="Drag to add line"
                  >
                    <div className="shape-preview w-12 h-1 bg-orange-400 "></div>
                    <span className="text-xs font-medium text-gray-700">Line</span>
                  </div>

                  {/* Polygon Element */}
                  <div
                    draggable={true}
                    onDragStart={(e) => {
                      console.log('Polygon drag start');
                      handleElementDragStart(e, 'polygon');
                    }}
                    className="flex flex-row items-center gap-3 p-3 border-2 border-gray-300 rounded-lg cursor-grab hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 active:cursor-grabbing select-none element-draggable"
                    title="Drag to add polygon"
                  >
                    <div className="shape-preview w-8 h-8 bg-green-400 border-2 border-gray-600 transform rotate-45 "></div>
                    <span className="text-xs font-medium text-gray-700">Polygon</span>
                  </div>

                  {/* Text Element */}
                  <div
                    draggable={true}
                    onDragStart={(e) => {
                      console.log('Text drag start');
                      handleElementDragStart(e, 'text');
                    }}
                    className="flex flex-row items-center gap-3 p-3 border-2 border-gray-300 rounded-lg cursor-grab hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 active:cursor-grabbing select-none"
                    title="Drag to add text"
                  >
                    <div className="shape-preview text-lg font-bold text-gray-600 ">T</div>
                    <span className="text-xs font-medium text-gray-700">Text</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FabricCanvas;
