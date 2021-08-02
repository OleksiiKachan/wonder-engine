import React, {
  ComponentClass,
  FunctionComponent,
  MouseEvent,
  forwardRef,
} from 'react';

import LinkContainer from '../link-container';

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
    forwardRef: any;
  }> {}

const BaseButton: BaseButton = ({
  component,
  href,
  target,
  rel,
  tabIndex = 0,
  disabled = false,
  loading = false,
  onClick = () => {},
  children,
  forwardRef,
  ...otherProps
}) => {
  const commonProps: object = {
    disabled,
    onClick: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if (!loading) {
        onClick(event);
      }
    },
    tabIndex: !loading && !disabled ? tabIndex : -1,
    ref: forwardRef,
  };

  let props: object = {};

  let linkProps = { href, target, rel };

  if (component) {
    props = {
      ...props,
      ...linkProps,
    };
  } else if (href) {
    props = { ...linkProps };
  }

  const buttonProps = {
    ...commonProps,
    ...props,
    ...otherProps,
    component: component || 'button',
  };

  return <LinkContainer {...buttonProps}>{children}</LinkContainer>;
};

const Forwarded = forwardRef<any>((props: any, ref) => (
  <BaseButton forwardedRef={ref} {...props} />
));
Forwarded.displayName = 'BaseButton';

export default Forwarded;
