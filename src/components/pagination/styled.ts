import styled from 'styled-components';

export const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: inline-block;

    button,
    a {
      cursor: pointer;
      padding: var(--pagination-item-padding);
      width: var(--pagination-item-width);
      height: var(--pagination-item-height);
      border: none;

      &[data-type='previous'],
      &[data-type='next'] {
        background-color: transparent;
        background-image: var(--pagination-item-arrow-image);
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }

      &[data-type='next'] {
        transform: rotate(180deg);
      }
    }
  }
`;
