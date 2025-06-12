import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense } from "react";
import { calculateSizes } from "../../constants";
import { HackerRoom } from "./HackerRoom";
import CanvasLoader from "../Loading";

const HeroExperience = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <Canvas camera={{ position: [5,2,8], fov: 45 }}>
      {/* deep blue ambient */}
      <ambientLight intensity={0.2} color="#1a1a40" />
      {/* Configure OrbitControls to disable panning and control zoom based on device type */}
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={!(isTablet || isMobile)} // Disables zoom on tablets
        maxDistance={15} // Maximum distance for zooming out
        minDistance={4} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
      />

      <Suspense fallback={<CanvasLoader/>}>
        <HeroLights />
        <Particles count={100} />
          <group
          scale={0.8} // Increased scale to make it larger
          position={isTablet ? [0,0.5,-1]:[0,2,-1.2]} // Increased Y position to move it up
          rotation={[0, Math.PI, 0]} // 180° flip if needed
        >
          <HackerRoom 
            scale={sizes.deskScale} // Scale up the desk
            position={[sizes.deskPosition[0], sizes.deskPosition[1]-4, sizes.deskPosition[2]]} // Move desk up
          />
        </group>
      </Suspense>
    </Canvas>

  );
};

export default HeroExperience;

