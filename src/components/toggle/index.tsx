import React, { forwardRef } from 'react';

import { useWonderEngineContext } from '../../context';

import { IToggle } from '../../types/Toggle';
import { Container, Control, Knob } from './styled';

const Toggle: IToggle = forwardRef(
  (
    {
      name,
      checked = false,
      disabled = false,
      onChange = () => {},
      analytics,
      ...otherProps
    },
    ref
  ) => {
    const { analyticsHandler } = useWonderEngineContext();

    return (
      <Container {...otherProps} htmlFor={name} ref={ref} isDisabled={disabled}>
        <input
          type="checkbox"
          id={name}
          checked={checked}
          disabled={disabled}
          onChange={() => {
            typeof analyticsHandler === 'function' &&
              analyticsHandler(analytics);
            onChange(!checked);
          }}
        />
        <Control>
          <div data-checked={checked}>
            <div>
              <Knob />
            </div>
          </div>
        </Control>
      </Container>
    );
  }
);

Toggle.displayName = 'Toggle';

export default Toggle;
