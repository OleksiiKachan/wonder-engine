import {
  ComponentClass,
  createElement,
  FunctionComponent,
  forwardRef,
} from 'react';

import { useWonderEngineContext } from '../../context';
import { ILinkContainer } from '../../types/LinkContainer';

const LinkContainer: ILinkContainer = forwardRef(
  ({ component = 'div', href, target, rel, children, ...otherProps }, ref) => {
    const { Link } = useWonderEngineContext();

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

      Component = isExternalLink ? `a` : Link || 'a';
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
