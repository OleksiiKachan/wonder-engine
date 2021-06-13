import React, { useMemo, FunctionComponent } from 'react';
import { createPortal } from 'react-dom';

interface PropsType {
  rootId?: string;
}

const Portal: FunctionComponent<PropsType> = ({
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
