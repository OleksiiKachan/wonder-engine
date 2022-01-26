import { createElement, forwardRef } from 'react';

import { useWonderEngineContext } from '../../context';

/**
 * Types imports
 */ import type {
  ComponentClass,
  FunctionComponent,
  RefAttributes,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from 'react';

/**
 * Types
 */
export type LinkContainerProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    component: string | FunctionComponent | ComponentClass;
  };

export type LinkContainerRefAttributes = RefAttributes<
  HTMLButtonElement & HTMLAnchorElement
>;

export interface LinkContainer
  extends FunctionComponent<LinkContainerProps & LinkContainerRefAttributes> {}

const LinkContainer: LinkContainer = forwardRef(
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
