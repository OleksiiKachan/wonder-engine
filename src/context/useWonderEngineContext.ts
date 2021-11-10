import { useContext } from 'react';
import Context, { WonderEngineContext } from './context';

const useWonderEngineContext = (): WonderEngineContext => {
  const context = useContext(Context);

  return context;
};

export default useWonderEngineContext;
