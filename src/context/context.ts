import { createContext } from 'react';

/**
 * Types imports
 */
import type { FunctionComponent, PropsWithChildren } from 'react';

/**
 * Types
 */
export interface WonderEngineContext {
  Link: string | FunctionComponent<PropsWithChildren<any>>;
  LoadingIndicator?: FunctionComponent<PropsWithChildren<any>>;
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
