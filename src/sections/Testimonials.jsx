import React, { Suspense } from 'react'
import { UI } from '../components/UI'
import { Loader } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Reviews } from '../components/Reviews'
import { useMediaQuery } from 'react-responsive'
import ScrollVelocity from '../components/ScrollVelocity'

const Testimonials = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const bookScale = isMobile ? 1.2 : 1.5;



  return (
    <section className="relative h-[670px] md:h-[800px] overflow-hidden " id="testimonials">
            
      {/* ScrollVelocity - behind the book */}
      <div className="absolute inset-0 flex sm:items-center items-top justify-center z-0 pointer-events-none sm:mt-0 mt-28">
        <ScrollVelocity  
          texts={['User Reviews! ', 'User Experiences ']} 
          velocity={100} 
          className="strokeme text-4xl md:text-6xl font-bold "
        />
      </div>
      <div className='flex items-center justify-center w-full h-full '>
        
      {/* Canvas with book - above the text */}
      <div className='w-full lg:w-[55%] h-full'>
        <div className="hero-badge absolute z-30 md:top-44 lg:top-44 top-52
          left-1/2 transform -translate-x-1/2">
        <p>⭐ What our users say?</p>
      </div>
      <Canvas
        className="relative w-full h-full z-10 pointer-events-auto"
        camera={{
          position: [0, 1, 6],
          fov: 45,
          near: 0.1,
          far: 100
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <group 
          position={[0, -0.5, 0]} 
          scale={[bookScale, bookScale, bookScale]}
        >
          
          <Suspense fallback={null}>
            <Reviews />
          </Suspense>
        </group>
      </Canvas>
      </div>
      </div>
      
        <UI />
      
      <Loader />
    </section>
  )
}

export default Testimonials;