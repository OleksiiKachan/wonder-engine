import React from 'react';
import * as ReactDOM from 'react-dom';
import AspectRatioBox from '../index';

describe('AspectRatioBox', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AspectRatioBox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
