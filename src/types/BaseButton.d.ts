import React, {
  ComponentClass,
  FunctionComponent,
  MouseEvent,
  forwardRef,
} from 'react';

export type BaseButtonProps = {
  component?: string | FunctionComponent | ComponentClass;
  loading?: boolean;
  loadingCaption?: string;
} & (ButtonHTMLAttributes | AnchorHTMLAttributes);

export interface IBaseButton
  extends FunctionComponent<BaseButtonProps & { forwardedRef: any }> {}
