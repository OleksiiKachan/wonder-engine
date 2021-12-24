import { useMemo } from 'react';
import { createPortal } from 'react-dom';

import type { IPortal } from './types';

const Portal: IPortal = ({ rootId = 'root', children }) => {
  const root = useMemo(() => {
    if (rootId) {
      return document.getElementById(rootId);
    }

    return null;
  }, [rootId]);

  return <>{root ? createPortal(children, root) : children}</>;
};

export default Portal;
export * from './types';
