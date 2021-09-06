import { createContext, FunctionComponent, ComponentClass } from 'react';

export interface WonderEngineContext {
  Link?: string | FunctionComponent | ComponentClass;
  LoadingIndicator?: FunctionComponent | ComponentClass;
}

const defaultContext: WonderEngineContext = {
  Link: () => {
    throw new Error(
      `You must specify Link component in WonderEngineProvider config`
    );
  },
  LoadingIndicator: ({ children }) => children,
};

const Context = createContext<WonderEngineContext>(defaultContext);

export default Context;
