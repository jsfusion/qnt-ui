import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Heading from '..';

configure({ adapter: new Adapter() });

let wrapper;
const props = {
  id: 'test_heading_id',
  type: 'h1',
  isItalic: true,
  isAssistive: true,
};

describe('***--- Heading Component ---***', () => {
  beforeAll(() => {
    wrapper = shallow(<Heading {...props} />);
  });

  it('To match snapshot of Heading component', async (done) => {
    expect(wrapper).toMatchSnapshot();
    done();
  });
});