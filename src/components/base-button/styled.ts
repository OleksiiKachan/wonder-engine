import styled from 'styled-components';

import LinkContainer from '../link-container';

import { ILinkContainer } from '../../types/LinkContainer';

export const Container: ILinkContainer = styled(LinkContainer)`
  cursor: ${({ $loading }: { $loading: boolean }) =>
    $loading ? 'wait' : 'pointner'};

  &:disabled {
    cursor: not-allowed;
  }
`;
