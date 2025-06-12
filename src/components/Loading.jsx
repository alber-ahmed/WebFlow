import { Html, useProgress } from '@react-three/drei';
import HelperLoader from './HelperLoader';

const CanvasLoader = () => {
  const { progress } = useProgress();
  
  const getProgressText = () => {
    if (progress === 0) return 'Initializing...';
    if (progress < 30) return 'Loading assets...';
    if (progress < 60) return 'Finalizing...';
    if (progress < 100) return 'Ready!'
    return 'Initializing...'
  };

  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
      className='lg:mt-0 mt-11'>
      <HelperLoader/>
      <p
        style={{
          fontSize: 12,
          color: '#F1F1F1',
          fontWeight: 700,
          marginTop: 30,
        }}>
        {getProgressText()}
      </p>
    </Html>
  );
};

export default CanvasLoader;