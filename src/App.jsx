import { Canvas } from '@react-three/fiber';
import './App.css';
import { Experience } from './components/Experience';

function App() {
  return (
    <div id="root">
      
      <div className="background"></div>

      
      <div className="canvas-container">
        <Canvas>
          <Experience />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
