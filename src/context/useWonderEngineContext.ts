import { useContext } from 'react';
import Context from './context';

/**
 * Types importss
 */
import type { WonderEngineContext } from './context';

/**
 * Types
 */
export interface useWonderEngineContext {
  (): WonderEngineContext;
}

const useWonderEngineContext: useWonderEngineContext = () => {
  const context = useContext<WonderEngineContext>(Context);

  return context;
};

export default useWonderEngineContext;
