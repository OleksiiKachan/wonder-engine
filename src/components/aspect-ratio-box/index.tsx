import React, { forwardRef } from 'react';
import styled from 'styled-components';

import {
  IAspectRatioBox,
  AspectRatioBoxProps,
} from '../../types/AspectRatioBox';

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

const AspectRatioBox: IAspectRatioBox = ({
  type = '1:1',
  children,
  forwardedRef,
  ...props
}) => {
  const [width, height] = type.split(':').map(Number);

  return (
    <div ref={forwardedRef} {...props}>
      <AspectRatio width={width} height={height}>
        <Content>{children}</Content>
      </AspectRatio>
    </div>
  );
};

const Forwarded = forwardRef<AspectRatioBoxProps>(
  (props: AspectRatioBoxProps, ref) => (
    <AspectRatioBox forwardedRef={ref} {...props} />
  )
);
Forwarded.displayName = 'AspectRatioBox';

export default Forwarded;
