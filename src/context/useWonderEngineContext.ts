import { useContext } from 'react';
import Context from './context';

const useWonderEngineContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error(
      `WonderEngineContext must be used within a WonderEngineProvider`
    );
  }

  return context;
};

export default useWonderEngineContext;
