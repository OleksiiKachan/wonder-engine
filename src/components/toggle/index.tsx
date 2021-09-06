import React, { forwardRef } from 'react';

import { IToggle } from '../../types/Toggle';
import { Container, Control, Knob } from './styled';

const Toggle: IToggle = forwardRef(
  (
    {
      name,
      checked = false,
      disabled = false,
      onChange = () => {},
      ...otherProps
    },
    ref
  ) => {
    return (
      <Container {...otherProps} htmlFor={name} ref={ref}>
        <input
          type="checkbox"
          id={name}
          checked={checked}
          disabled={disabled}
          onChange={() => {
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
