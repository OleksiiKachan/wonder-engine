import { useContext } from 'react';
import Context from './context';

import { WonderEngineContext } from '../../types/context';

const useWonderEngineContext = (): WonderEngineContext => {
  const context = useContext<WonderEngineContext>(Context);

  return context;
};

export default useWonderEngineContext;
