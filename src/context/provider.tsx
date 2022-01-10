import Context from './context';

/**
 * Types imports
 */
import type { FunctionComponent } from 'react';
import type { WonderEngineContext } from './context';

/**
 * Types
 */
export interface WonderEngineContextProvider
  extends FunctionComponent<{ config: WonderEngineContext }> {}

const WonderEngineContextProvider: WonderEngineContextProvider = ({
  children,
  config,
}) => {
  return <Context.Provider value={{ ...config }}>{children}</Context.Provider>;
};

export default WonderEngineContextProvider;
