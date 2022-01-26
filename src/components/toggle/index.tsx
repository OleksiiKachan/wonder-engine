import { forwardRef } from 'react';

import { useWonderEngineContext } from '../../context';

import { Container, Control, Knob } from './styled';

/**
 * Types imports
 */ import type {
  FunctionComponent,
  RefAttributes,
  LabelHTMLAttributes,
  InputHTMLAttributes,
} from 'react';

/**
 * Types
 */
export type ToggleProps = Omit<
  LabelHTMLAttributes<HTMLLabelElement>,
  'onChange'
> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    onChange(checked: boolean): void;
    analytics: { [key: string]: any };
  };

export interface Toggle
  extends FunctionComponent<ToggleProps & RefAttributes<HTMLLabelElement>> {}

const Toggle: Toggle = forwardRef(
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
