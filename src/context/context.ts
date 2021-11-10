import { createContext } from 'react';

import { WonderEngineContext } from '../../types/context';

const defaultContext: Partial<WonderEngineContext> = {
  Link: () => {
    throw new Error(
      `You must specify Link component in WonderEngineProvider config`
    );
  },
  analyticsHandler: () => {},
};

const Context = createContext<WonderEngineContext>(
  defaultContext as WonderEngineContext
);

export default Context;
