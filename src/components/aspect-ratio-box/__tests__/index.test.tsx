import { render } from '@testing-library/react';
import AspectRatioBox from '../index';

describe('AspectRatioBox', () => {
  it('renders without crashing', () => {
    const { container, unmount } = render(<AspectRatioBox />);
    unmount();
  });
});
