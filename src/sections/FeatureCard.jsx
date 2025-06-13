import { Suspense, useState } from "react";
import { abilities } from "../constants";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from '../components/Loading.jsx';
import { OrbitControls } from "@react-three/drei";
import Developer from "../components/HeroModels/Developer.jsx";
import { useMediaQuery } from "react-responsive";

const FeatureCards = () => {
  const [animationName, setAnimationName] = useState('idle');
  const isTablet = useMediaQuery({ maxWidth: 1024 });

  return (
  <section className="flex md:flex-row items-center justify-center  flex-col ">
    <div className="md:w-[40%] w-full h-[500px] md:h-[750px]  padding-x-lg md:px-5 ">
  <Canvas className="h-full ">
              <ambientLight intensity={3} />
              <spotLight position={[5,5 ,5 ]} angle={0.15} penumbra={1} />
              <directionalLight position={[2,2,2]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} enableRotate={!isTablet} />

              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
            </Canvas>
    </div>
  <div className=" padding-x-lg md:mt-10">
    <div className=" flex flex-col gap-6 ">
      {abilities.map(({ imgPath, title, desc, animation }) => (
        <div
          key={title}
          className="card-border rounded-xl p-8 flex flex-col gap-4"
         onClick={()=> setAnimationName(animation)}
         onPointerOver={() => setAnimationName(animation)}
         onPointerOut={() => setAnimationName('idle')}
        >
          <div className="size-14 flex items-center justify-center rounded-full">
            <img src={imgPath} width="100%" height="100%" alt={title} />
          </div>
          <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
          <p className="text-white-50 text-lg">{desc}</p>
        </div>
      ))}
    </div>
  </div>
  </section>
  )
};

export default FeatureCards;