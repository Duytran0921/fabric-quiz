import FabricCanvas from './components/FabricCanvas'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
       
      </header>
      
      <main className="app-main">
        <FabricCanvas 
          width={800} 
          height={600} 
          className="main-canvas"
        />
      </main>
      
      <footer className="app-footer">
        <p>Built with React, TypeScript, and Fabric.js</p>
      </footer>
    </div>
  )
}

export default App
