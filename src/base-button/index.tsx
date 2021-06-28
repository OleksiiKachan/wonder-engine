import {
  ComponentClass,
  createElement,
  FunctionComponent,
  MouseEvent,
  forwardRef,
} from 'react';

import { useWonderEngineContext } from '../context';

interface BaseButton
  extends FunctionComponent<{
    component?: string | FunctionComponent | ComponentClass;
    href?: string | object;
    target?: string;
    rel?: string;
    tabIndex?: number;
    disabled?: boolean;
    loading?: boolean;
    onClick: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  }> {}

const BaseButton: BaseButton = forwardRef(
  (
    {
      component,
      href,
      target,
      rel,
      tabIndex = 0,
      disabled = false,
      loading = false,
      onClick = () => {},
      children,
      ...otherProps
    },
    ref
  ) => {
    const { Link } = useWonderEngineContext();

    let Component: string | FunctionComponent | ComponentClass = 'button';

    const commonProps: object = {
      onClick: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        if (!loading) {
          onClick(event);
        }
      },
      tabIndex: !loading && !disabled ? tabIndex : -1,
      ref,
    };

    let props: object = { disabled };

    let linkProps = { href, target, rel };

    if (component) {
      Component = component;
      props = {
        ...props,
        ...linkProps,
      };
    } else if (href) {
      const isExternalLink =
        typeof href === `string` &&
        [`http`, `mailto:`, `tel:`].some((sub) => href.includes(sub));

      Component = isExternalLink ? `a` : Link;
      props = { ...linkProps };
    }

    return createElement(
      Component,
      { ...commonProps, ...props, ...otherProps },
      children
    );
  }
);

export default BaseButton;
