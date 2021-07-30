import { useContext } from 'react';
import Context from './context';

const useWonderEngineContext = () => {
  const context = useContext(Context);

  return context;
};

export default useWonderEngineContext;
