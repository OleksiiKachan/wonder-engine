import React, { MouseEvent, forwardRef } from 'react';
import { IBaseButton, BaseButtonProps } from '../../types/BaseButton';

import LinkContainer from '../link-container';

const BaseButton: IBaseButton = ({
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
  const commonProps: BaseButtonProps = {
    disabled,
    onClick: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if (!loading) {
        onClick(event);
      }
    },
    tabIndex: !loading && !disabled ? tabIndex : -1,
    ref: forwardRef,
  };

  let props: BaseButtonProps = {};

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

const Forwarded = forwardRef<BaseButtonProps>((props: BaseButtonProps, ref) => (
  <BaseButton forwardedRef={ref} {...props} />
));
Forwarded.displayName = 'BaseButton';

export default Forwarded;
