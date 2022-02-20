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
type Component = string | FunctionComponent | ComponentClass;
type Href = string | { [key: string]: any };
type Object = { [key: string]: any };

export type LinkContainerProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    component: Component;
    href?: Href;
    dataAttrs?: Object;
    ariaAttrs?: Object;
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

const generateProps = ({
  href,
  dataAttrs,
  ariaAttrs,
  ...otherProps
}: Partial<LinkContainerProps>) => {
  let props = {
    ...generateDashAttrs(`data`, dataAttrs),
    ...generateDashAttrs(`aria`, ariaAttrs),
  };

  if (href) {
    props = { ...props, href, ...otherProps };
  }

  return props;
};

const getComponent = ({
  linkComponent,
  component,
  href,
}: {
  linkComponent?: Component;
  component: Component;
  href?: Href;
}): Component => {
  if (href) {
    const isExternalLink =
      typeof href === `string` &&
      [`http`, `mailto:`, `tel:`].some((sub) => href.includes(sub));

    return isExternalLink ? `a` : linkComponent || 'a';
  }

  return component;
};

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

    const Component = getComponent({ linkComponent: Link, component, href });

    const commonProps: object = {
      ref,
    };

    const props = useMemo(
      () => generateProps({ dataAttrs, ariaAttrs, href, target, rel }),
      [dataAttrs, ariaAttrs, href, target, rel]
    );

    return createElement(
      Component,
      { ...commonProps, ...props, ...otherProps },
      children
    );
  }
);

export default LinkContainer;
