import { useContext } from 'react';
import Context from './context';

import type { WonderEngineContext } from './types';

const useWonderEngineContext = (): WonderEngineContext => {
  const context = useContext<WonderEngineContext>(Context);

  return context;
};

export default useWonderEngineContext;
