import styled from 'styled-components';

import LinkContainer from '../link-container';

import { ILinkContainer } from '../../types/LinkContainer';
import { BaseButtonProps } from '../../types/BaseButton';

export const Container: ILinkContainer = styled(LinkContainer)`
  cursor: ${({ loading }: BaseButtonProps) => (loading ? 'wait' : 'pointner')};

  &:disabled {
    cursor: not-allowed;
  }
`;
