import { createElement, forwardRef, useMemo } from 'react';

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

const generateDashAttrs = (
  prefix: string,
  attrs?: { [key: string]: any }
): { [key: string]: any } =>
  prefix && attrs
    ? Object.keys(attrs).reduce(
        (acc, key) => ({ ...acc, [`${prefix}-${key}`]: attrs[key] }),
        {}
      )
    : {};

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

    let linkProps = {};

    if (href) {
      const isExternalLink =
        typeof href === `string` &&
        [`http`, `mailto:`, `tel:`].some((sub) => href.includes(sub));

      Component = isExternalLink ? `a` : Link || 'a';
      linkProps = { href, target, rel };
    }

    const dashedProps = useMemo(() => {
      return {
        ...generateDashAttrs(`data`, dataAttrs),
        ...generateDashAttrs(`aria`, ariaAttrs),
      };
    }, [dataAttrs, ariaAttrs]);

    return createElement(
      Component,
      { ...commonProps, ...dashedProps, ...linkProps, ...otherProps },
      children
    );
  }
);

export default LinkContainer;
