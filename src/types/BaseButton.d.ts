import React, {
  ComponentClass,
  FunctionComponent,
  MouseEvent,
  forwardRef,
} from 'react';

export type BaseButtonProps = {
  component?: string | FunctionComponent | ComponentClass;
  loading?: boolean;
} & (ButtonHTMLAttributes | AnchorHTMLAttributes);

export interface IBaseButton
  extends FunctionComponent<BaseButtonProps & { forwardRef: any }> {}
