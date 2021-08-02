import React, { forwardRef, FunctionComponent, HTMLAttributes } from 'react';
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

export type AspectRatioBox = {
  type?: string;
} & HTMLAttributes<HTMLDivElement>;

const AspectRatioBox: FunctionComponent<
  AspectRatioBox & { forwardedRef: any }
> = ({ type = '1:1', children, forwardedRef, ...props }) => {
  const [width, height] = type.split(':').map(Number);

  return (
    <div ref={forwardedRef} {...props}>
      <AspectRatio width={width} height={height}>
        <Content>{children}</Content>
      </AspectRatio>
    </div>
  );
};

const Forwarded = forwardRef<AspectRatioBox, HTMLAttributes<HTMLDivElement>>(
  (props: AspectRatioBox, ref) => (
    <AspectRatioBox forwardedRef={ref} {...props} />
  )
);
Forwarded.displayName = 'AspectRatioBox';

export default Forwarded;
