import {
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
    analytics: { [key: string]: any };
  };

export type ToggleRefAttributes = RefAttributes<HTMLLabelElement>;

export interface IToggle
  extends FunctionComponent<ToggleProps & ToggleRefAttributes> {}
