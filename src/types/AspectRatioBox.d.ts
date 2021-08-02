import { FunctionComponent, HTMLAttributes } from 'react';

export type AspectRatioBoxProps = {
  type?: string;
} & HTMLAttributes<HTMLDivElement>;

export interface IAspectRatioBox
  extends FunctionComponent<AspectRatioBoxProps & { forwardedRef: any }> {}
