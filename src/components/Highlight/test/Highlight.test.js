import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Highlight from '..';

configure({ adapter: new Adapter() });

let wrapper;
const props = {
  id: 'test_highlight_id',
  highlightColor: 'red',
  color: 'white',
  isBold: true,
  isItalic: true,
};

describe('***--- Highlight Component ---***', () => {
  beforeAll(() => {
    wrapper = shallow(<Highlight {...props} />);
  });

  it('To match snapshot of Highlight component', async (done) => {
    expect(wrapper).toMatchSnapshot();
    done();
  });
});