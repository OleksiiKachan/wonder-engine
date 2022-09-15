import { useMemo } from 'react';
import { createPortal } from 'react-dom';

/**
 * Types imports
 */ import type { FunctionComponent, ReactNode } from 'react';

/**
 * Types
 */
export interface PortalProps {
  rootId?: string;
  children: ReactNode;
}

const Portal: FunctionComponent<PortalProps> = ({
  rootId = 'root',
  children,
}) => {
  const root = useMemo(() => {
    if (rootId) {
      return document.getElementById(rootId);
    }

    return null;
  }, [rootId]);

  return <>{root ? createPortal(children, root) : children}</>;
};

export default Portal;
