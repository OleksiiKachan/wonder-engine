import React, {
  FunctionComponent,
  RefAttributes,
  LabelHTMLAttributes,
  InputHTMLAttributes,
} from 'react';

export type ToggleProps = Omit<
  LabelHTMLAttributes<HTMLLabelElement>,
  'onChange'
> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    onChange(checked: boolean): void;
  };

export type ToggleRefAttributes = RefAttributes<HTMLLabelElement>;

export interface IToggle
  extends FunctionComponent<ToggleProps & ToggleRefAttributes> {}
