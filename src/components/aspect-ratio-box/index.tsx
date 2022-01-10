import { forwardRef } from 'react';
import styled from 'styled-components';

/**
 * Types imports
 */
import type { FunctionComponent, HTMLAttributes, RefAttributes } from 'react';

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

/**
 * Types
 */
export interface AspectRatioBoxProps extends HTMLAttributes<HTMLDivElement> {
  type?: string;
}
export interface AspectRatioBox
  extends FunctionComponent<
    AspectRatioBoxProps & RefAttributes<HTMLDivElement>
  > {}

const AspectRatioBox: AspectRatioBox = forwardRef(
  ({ type = '1:1', children, ...props }, ref) => {
    const [width, height] = type.split(':').map(Number);

    return (
      <div ref={ref} {...props}>
        <AspectRatio width={width} height={height}>
          <Content>{children}</Content>
        </AspectRatio>
      </div>
    );
  }
);

AspectRatioBox.displayName = 'AspectRatioBox';

export default AspectRatioBox;
