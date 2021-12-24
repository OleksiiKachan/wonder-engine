import { forwardRef } from 'react';

import { useWonderEngineContext } from '../../context';

import { Container } from './styled';

import type { MouseEvent } from 'react';
import type { IBaseButton, BaseButtonProps } from './types';

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
      analytics = {},
      children,
      ...otherProps
    },
    ref
  ) => {
    const { LoadingIndicator, analyticsHandler } = useWonderEngineContext();

    const commonProps: Partial<BaseButtonProps> & { $loading: boolean } = {
      disabled,
      $loading: loading,
      onClick: (event: MouseEvent<HTMLButtonElement & HTMLAnchorElement>) => {
        if (!loading) {
          typeof analyticsHandler === 'function' && analyticsHandler(analytics);
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
