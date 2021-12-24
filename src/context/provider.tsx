import Context from './context';

import type { FunctionComponent } from 'react';
import type { WonderEngineContext } from './types';

const Provider: FunctionComponent<{ config: WonderEngineContext }> = ({
  children,
  config,
}) => {
  return <Context.Provider value={{ ...config }}>{children}</Context.Provider>;
};

export default Provider;
