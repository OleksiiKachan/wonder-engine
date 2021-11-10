import { FunctionComponent, ComponentClass } from 'react';

export interface WonderEngineContext {
  Link?: string | FunctionComponent | ComponentClass;
  LoadingIndicator?: FunctionComponent | ComponentClass;
  analyticsHandler?: (params: { [key: string]: any }) => void;
}
