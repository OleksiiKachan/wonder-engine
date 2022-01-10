import { useMemo } from 'react';
import { createPortal } from 'react-dom';

/**
 * Types imports
 */ import type { FunctionComponent } from 'react';

/**
 * Typess
 */
export interface PortalProps {
  rootId?: string;
}

export interface Portal extends FunctionComponent<PortalProps> {}

const Portal: Portal = ({ rootId = 'root', children }) => {
  const root = useMemo(() => {
    if (rootId) {
      return document.getElementById(rootId);
    }

    return null;
  }, [rootId]);

  return <>{root ? createPortal(children, root) : children}</>;
};

export default Portal;
