import * as THREE from "three";
import AnimatedSphere from "./components/Sphere";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Iphone from "./components/Iphone";
import Box from "./Box";
import Rectangle from "./components/Rectangle";

function App() {
  return (
    <div className="h-screen">
      <Canvas className="canvas">
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas>


      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>


        {/* <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Iphone />
        </Suspense>
      </Canvas>  */}
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
        <Rectangle/>
        </Suspense>
      </Canvas>

      
    </div>
  );
}

export default App;
