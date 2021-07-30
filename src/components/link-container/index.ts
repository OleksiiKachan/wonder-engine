import {
  ComponentClass,
  createElement,
  FunctionComponent,
  forwardRef,
} from 'react';

import { useWonderEngineContext } from '../../context';

interface LinkContainer
  extends FunctionComponent<{
    component?: string | FunctionComponent | ComponentClass;
    href?: string | object;
    target?: string;
    rel?: string;
  }> {}

const LinkContainer: LinkContainer = forwardRef(
  ({ component = 'div', href, target, rel, children, ...otherProps }, ref) => {
    const context = useWonderEngineContext();

    let Component: string | FunctionComponent | ComponentClass = component;

    const commonProps: object = {
      ref,
    };

    let props: object = {};

    let linkProps = { href, target, rel };

    if (href) {
      const isExternalLink =
        typeof href === `string` &&
        [`http`, `mailto:`, `tel:`].some((sub) => href.includes(sub));

      Component = isExternalLink ? `a` : context?.Link || 'a';
      props = { ...linkProps };
    }

    return createElement(
      Component,
      { ...commonProps, ...props, ...otherProps },
      children
    );
  }
);

export default LinkContainer;
