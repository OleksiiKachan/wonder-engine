import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface SizeFunction {
  (value: string): FlattenSimpleInterpolation | null;
}

const m: SizeFunction = (value) =>
  value
    ? css`
        margin: ${value};
      `
    : null;

const mt: SizeFunction = (value) =>
  value
    ? css`
        margin-top: ${value};
      `
    : null;

const mb: SizeFunction = (value) =>
  value
    ? css`
        margin-bottom: ${value};
      `
    : null;

const ml: SizeFunction = (value) =>
  value
    ? css`
        margin-left: ${value};
      `
    : null;
const mr: SizeFunction = (value) =>
  value
    ? css`
        margin-right: ${value};
      `
    : null;

const mv: SizeFunction = (value) =>
  value
    ? css`
        margin-top: ${value};
        margin-bottom: ${value};
      `
    : null;

const mh: SizeFunction = (value) =>
  value
    ? css`
        margin-left: ${value};
        margin-right: ${value};
      `
    : null;

export default styled.div<{
  m?: string;
  mt?: string;
  mb?: string;
  ml?: string;
  mr?: string;
  mv?: string;
  mh?: string;
}>`
  ${(props) => props.m && m(props.m)};
  ${(props) => props.mt && mt(props.mt)};
  ${(props) => props.mb && mb(props.mb)};
  ${(props) => props.ml && ml(props.ml)};
  ${(props) => props.mr && mr(props.mr)};
  ${(props) => props.mv && mv(props.mv)};
  ${(props) => props.mh && mh(props.mh)};
`;
