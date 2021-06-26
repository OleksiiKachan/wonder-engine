import React, { FunctionComponent } from 'react';
import Context, { WonderEngineContext } from './context';

const Provider: FunctionComponent<{ config: WonderEngineContext }> = ({
  children,
  config,
}) => {
  return <Context.Provider value={{ ...config }}>{children}</Context.Provider>;
};

export default Provider;
