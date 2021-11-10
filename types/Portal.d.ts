import { FunctionComponent } from 'react';

export type PortalProps = {
  rootId?: string;
};

export interface IPortal extends FunctionComponent<PortalProps> {}
