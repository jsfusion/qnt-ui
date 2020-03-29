import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '..';

configure({ adapter: new Adapter() });

let wrapper;
const props = {
  id: 'test_button_id',
  size: 'small',
  variant: 'secondary',
  isDisabled: false,
  onClick: () => console.log('Button clicked')
};

describe('***--- Button Component ---***', () => {
  beforeAll(() => {
    wrapper = shallow(<Button {...props} />);
  });

  it('To match snapshot of Button component', async (done) => {
    expect(wrapper).toMatchSnapshot();
    done();
  });
});