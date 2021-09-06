import React, {
  FunctionComponent,
  RefAttributes,
  LabelHTMLAttributes,
  InputHTMLAttributes,
} from 'react';

export type ToggleProps = LabelHTMLAttributes<HTMLLabelElement> &
  InputHTMLAttributes<HTMLInputElement> & {
    onChange(checked: boolean): void;
  };

export type ToggleRefAttributes = RefAttributes<HTMLLabelElement>;

export interface IToggle
  extends FunctionComponent<ToggleProps & ToggleRefAttributes> {}
