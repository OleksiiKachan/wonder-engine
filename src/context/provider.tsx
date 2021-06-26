import React, { FunctionComponent } from 'react';
import Context from './context';

const Provider: FunctionComponent = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export default Provider;
