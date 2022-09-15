import { List } from './styled';

/**
 * Types imports
 */
import { FunctionComponent, useCallback } from 'react';
import LinkContainer from '../link-container';

/**
 * Types
 */
export interface HrefFormatter {
  (page: number): string | { [key: string]: any } | undefined;
}

export interface PaginationProps {
  current: number;
  total: number;
  pageSize?: number;
  hrefFormatter?: HrefFormatter;
  onPageChange?: (page: number) => void;
}

export interface Pagination extends FunctionComponent<PaginationProps> {}

const Pagination: Pagination = ({
  current,
  total,
  pageSize = 10,
  hrefFormatter,
  onPageChange,
}) => {
  const pagesCount = Math.floor((total - 1) / pageSize) + 1;

  const prevPage = current - 1 > 0 ? current - 1 : 0;
  const nextPage = current + 1 < pagesCount ? current + 1 : pagesCount;

  const hasPrev = current > 0;
  const hasNext = current < pagesCount;

  const prevDisabled = !hasPrev || !pagesCount;
  const nextDisabled = !hasNext || !pagesCount;

  const generateLink = useCallback(
    (page: number) => {
      if (typeof hrefFormatter === `function`) {
        return hrefFormatter(page);
      }

      return undefined;
    },
    [hrefFormatter]
  );

  const onChange = useCallback(
    (page: number) => () => {
      if (typeof onPageChange === `function`) {
        onPageChange(page);
      }
    },
    [onPageChange]
  );

  return (
    <div>
      <p>{`current: ${current}`}</p>
      <p>{`pagesCount: ${pagesCount}`}</p>
      <p>{`prevPage: ${prevPage}`}</p>
      <p>{`nextPage: ${nextPage}`}</p>
      <List unselectable="off">
        <li>
          <LinkContainer
            href={generateLink(current - 1)}
            onClick={onChange(current - 1)}
            component="button"
            disabled={prevDisabled}
            dataAttrs={{ type: `previous` }}
            ariaAttrs={{ label: `previous` }}
          />
        </li>
        {`pagerList`}
        <li>
          <LinkContainer
            disabled={nextDisabled}
            href={generateLink(current + 1)}
            onClick={onChange(current + 1)}
            component="button"
            dataAttrs={{ type: `next` }}
            ariaAttrs={{ label: `next` }}
          />
        </li>
      </List>
    </div>
  );
};

export default Pagination;
