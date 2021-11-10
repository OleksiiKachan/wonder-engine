import React, {
  FunctionComponent,
  RefAttributes,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
} from 'react';

import {
  LinkContainerProps,
  LinkContainerRefAttributes,
} from './LinkContainer';

export interface BaseButtonProps extends LinkContainerProps {
  loading?: boolean;
  loadingCaption?: string;
  analytics?: object;
}

export interface IBaseButton
  extends FunctionComponent<BaseButtonProps & LinkContainerRefAttributes> {}
