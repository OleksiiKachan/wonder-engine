import styled from 'styled-components';

import LinkContainer from '../link-container';

import { BaseButtonProps } from '../../types/BaseButton';

export const Container = styled(LinkContainer)`
  cursor: ${({ loading }: BaseButtonProps) => (loading ? 'wait' : 'pointner')};

  &:disabled {
    cursor: not-allowed;
  }
`;
