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

export const generateProps = ({
  props: { href, dataAttrs, ariaAttrs, ...linkProps },
  platform,
}: {
  props: Partial<LinkContainerProps>;
  platform: string;
}) => {
  let props = {
    ...generateDashAttrs(`data`, dataAttrs),
    ...generateDashAttrs(`aria`, ariaAttrs),
  };

  if (href) {
    props = { ...props, ...linkProps };

    const { hrefLink, isExternalLink } = checkIsExternalLink(href);

    if (isExternalLink) {
      props.href = hrefLink;
    } else {
      props.href = href;

      if (platform === `nextjs`) {
        props.legacyBehavior = false;
      }
    }
  }

  return props;
};

const checkIsExternalLink = (
  href: Href
): { hrefLink: string; isExternalLink: boolean } => {
  const hrefLink =
    (typeof href === `object`
      ? href.pathname
      : typeof href === `string` && href) || ``;

  const isExternalLink = [`http`, `mailto:`, `tel:`].some((sub) =>
    hrefLink.includes(sub)
  );

  return { hrefLink, isExternalLink };
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
    const { isExternalLink } = checkIsExternalLink(href);

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
    const { Link, platform } = useWonderEngineContext();

    const Component = getComponent({ linkComponent: Link, component, href });

    const commonProps: object = {
      ref,
    };

    const props = useMemo(
      () =>
        generateProps({
          props: { dataAttrs, ariaAttrs, href, target, rel },
          platform,
        }),
      [dataAttrs, ariaAttrs, href, target, rel, platform]
    );

    return createElement(
      Component,
      { ...commonProps, ...props, ...otherProps },
      children
    );
  }
);

export default LinkContainer;
