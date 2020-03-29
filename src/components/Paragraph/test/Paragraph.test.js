import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Paragraph from '..';

configure({ adapter: new Adapter() });

let wrapper;
const props = {
  id: 'test_paragraph_id',
  isBold: true,
  isItalic: true,
  isJustify: true,
};

describe('***--- Paragraph Component ---***', () => {
  beforeAll(() => {
    wrapper = shallow(<Paragraph {...props}>Paragraph text</Paragraph>);
  });

  it('To match snapshot of Paragraph component', async (done) => {
    expect(wrapper).toMatchSnapshot();
    done();
  });
});