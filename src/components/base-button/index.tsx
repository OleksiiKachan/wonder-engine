import React, { MouseEvent, forwardRef } from 'react';
import { useWonderEngineContext } from '../..';
import { IBaseButton, BaseButtonProps } from '../../types/BaseButton';

import { Container } from './styled';

const BaseButton: IBaseButton = ({
  component,
  href,
  target,
  rel,
  tabIndex = 0,
  disabled = false,
  loading = false,
  loadingCaption,
  onClick = () => {},
  children,
  forwardedRef,
  ...otherProps
}) => {
  const { LoadingIndicator } = useWonderEngineContext();

  const commonProps: BaseButtonProps = {
    disabled,
    loading,
    onClick: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if (!loading) {
        onClick(event);
      }
    },
    tabIndex: !loading && !disabled ? tabIndex : -1,
    ref: forwardedRef,
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

  return (
    <Container {...buttonProps}>
      {loading ? (
        LoadingIndicator ? (
          <LoadingIndicator>{loadingCaption || children}</LoadingIndicator>
        ) : (
          loadingCaption || children
        )
      ) : (
        children
      )}
    </Container>
  );
};

const Forwarded = forwardRef<BaseButtonProps>((props: BaseButtonProps, ref) => (
  <BaseButton forwardedRef={ref} {...props} />
));
Forwarded.displayName = 'BaseButton';

export default Forwarded;
