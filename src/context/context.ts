import { createContext } from 'react';

/**
 * Types imports
 */
import type { FunctionComponent, ComponentClass } from 'react';

/**
 * Types
 */
export interface WonderEngineContext {
  Link?: string | FunctionComponent | ComponentClass;
  LoadingIndicator?: FunctionComponent | ComponentClass;
  analyticsHandler?: (params: { [key: string]: any }) => void;
}

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
