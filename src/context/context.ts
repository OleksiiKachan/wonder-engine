import { createContext, FunctionComponent, ComponentClass } from 'react';

export interface WonderEngineContext {
  Link: string | FunctionComponent | ComponentClass;
}

const defaultContext: WonderEngineContext = {
  Link: () => {
    throw new Error(
      `You must specify Link component inn WonderEngineProvider config`
    );
  },
};

const Context = createContext<WonderEngineContext>(defaultContext);

export default Context;
