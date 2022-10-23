import { createElement, forwardRef, useMemo } from 'react';

import { useWonderEngineContext } from '../../context';
import { generateProps } from '../link-container';

/**
 * Types imports
 */ import type { FunctionComponent } from 'react';
import {
  LinkContainerProps,
  LinkContainerRefAttributes,
} from '../link-container';

/**
 * Types
 */
export interface Link
  extends FunctionComponent<
    Omit<LinkContainerProps, 'component'> & LinkContainerRefAttributes
  > {}

const Link: Link = forwardRef(({ children, ...otherProps }, ref) => {
  const { Link: LinkComponent, platform } = useWonderEngineContext();

  const commonProps: object = {
    ref,
  };

  const props = useMemo(
    () => generateProps({ props: otherProps, platform }),
    [otherProps, platform]
  );

  return createElement(
    LinkComponent,
    { ...commonProps, ...props, ...otherProps },
    children
  );
});

export default Link;
