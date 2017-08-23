import React from 'react';
import {shallow} from 'enzyme';
import {render} from 'react-dom';
import TextBox from 'components/widgets/blog/elements/TextBox';

import Post from 'components/widgets/blog/Post';

describe('Post', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<TextBox />, div);
  });
});

describe('render', () => {
  it('should render the text', () => {
    const textProps = { text: 'Text for testing the TextBox' };
    const textbox = shallow(<TextBox {...textProps} />);
    const text = <span>Text for testing the TextBox</span>;
    expect(textbox.contains(text)).toEqual(true);
  });
});