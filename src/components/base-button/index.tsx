import React, { MouseEvent, forwardRef } from 'react';

import { useWonderEngineContext } from '../../context';

import { IBaseButton, BaseButtonProps } from '../../types/BaseButton';
import { Container } from './styled';

const BaseButton: IBaseButton = forwardRef(
  (
    {
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
      ...otherProps
    },
    ref
  ) => {
    const { LoadingIndicator } = useWonderEngineContext();

    const commonProps: Partial<BaseButtonProps> = {
      disabled,
      loading,
      onClick: (event: MouseEvent<HTMLButtonElement & HTMLAnchorElement>) => {
        if (!loading) {
          onClick(event);
        }
      },
      tabIndex: !loading && !disabled ? tabIndex : -1,
    };

    let props: Partial<BaseButtonProps> = {};

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
      <Container {...buttonProps} ref={ref}>
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
  }
);

BaseButton.displayName = 'BaseButton';

export default BaseButton;
