import React, { FunctionComponent, HTMLAttributes } from 'react';
import styled from 'styled-components';

const AspectRatio = styled.div<{ width: Number; height: Number }>`
  height: 0;
  overflow: hidden;
  position: relative;
  padding-top: ${({ width, height }) => `calc(${height} / ${width} * 100%)`};
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const AspectRatioBox: FunctionComponent<
  {
    type?: string;
  } & HTMLAttributes<HTMLDivElement>
> = ({ type = '1:1', children, ...props }) => {
  const [width, height] = type.split(':').map(Number);

  return (
    <div {...props}>
      <AspectRatio width={width} height={height}>
        <Content>{children}</Content>
      </AspectRatio>
    </div>
  );
};

export default AspectRatioBox;
