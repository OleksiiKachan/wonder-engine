import styled from 'styled-components';

import LinkContainer from '../link-container';

export const Container = styled(LinkContainer)<{ $loading: boolean }>`
  cursor: ${({ $loading }) => ($loading ? 'wait' : 'pointner')};

  &:disabled {
    cursor: not-allowed;
  }
`;
