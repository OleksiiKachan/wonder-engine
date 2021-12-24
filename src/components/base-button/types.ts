import type { FunctionComponent } from 'react';

import type {
  LinkContainerProps,
  LinkContainerRefAttributes,
} from '../link-container';

export interface BaseButtonProps extends LinkContainerProps {
  loading?: boolean;
  loadingCaption?: string;
  analytics?: object;
}

export interface IBaseButton
  extends FunctionComponent<BaseButtonProps & LinkContainerRefAttributes> {}
