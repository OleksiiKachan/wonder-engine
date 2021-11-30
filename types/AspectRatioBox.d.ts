import { FunctionComponent, HTMLAttributes, RefAttributes } from 'react';

export type AspectRatioBoxProps = {
  type?: string;
} & HTMLAttributes<HTMLDivElement>;

export type AspectRatioBoxRefAttributes = RefAttributes<HTMLDivElement>;

export interface IAspectRatioBox
  extends FunctionComponent<
    AspectRatioBoxProps & AspectRatioBoxRefAttributes
  > {}
