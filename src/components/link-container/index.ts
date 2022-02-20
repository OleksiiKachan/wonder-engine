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
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    component: string | FunctionComponent | ComponentClass;
    href?: string | { [key: string]: any } | undefined;
    dataAttrs?: { [key: string]: any };
    ariaAttrs?: { [key: string]: any };
  };

export type LinkContainerRefAttributes = RefAttributes<
  HTMLButtonElement & Omit<HTMLAnchorElement, 'href'>
>;

export interface LinkContainer
  extends FunctionComponent<LinkContainerProps & LinkContainerRefAttributes> {}

const LinkContainer: LinkContainer = forwardRef(
  (
    {
      component = 'div',
      href,
      target,
      rel,
      children,
      dataAttrs,
      ariaAttrs,
      ...otherProps
    },
    ref
  ) => {
    const { Link } = useWonderEngineContext();

    let Component: string | FunctionComponent | ComponentClass = component;

    const commonProps: object = {
      ref,
    };

    let props: object = {};

    let linkProps = { href, target, rel };

    if (dataAttrs) {
      const parsedDataAttrs = Object.keys(dataAttrs).reduce(
        (acc, key) => ({ ...acc, [`data-${key}`]: dataAttrs[key] }),
        {}
      );

      props = { ...props, ...parsedDataAttrs };
    }

    if (ariaAttrs) {
      const parsedAriaAttrs = Object.keys(ariaAttrs).reduce(
        (acc, key) => ({ ...acc, [`aria-${key}`]: ariaAttrs[key] }),
        {}
      );

      props = { ...props, ...parsedAriaAttrs };
    }

    if (href) {
      const isExternalLink =
        typeof href === `string` &&
        [`http`, `mailto:`, `tel:`].some((sub) => href.includes(sub));

      Component = isExternalLink ? `a` : Link || 'a';
      props = { ...props, ...linkProps };
    }

    return createElement(
      Component,
      { ...commonProps, ...props, ...otherProps },
      children
    );
  }
);

export default LinkContainer;
