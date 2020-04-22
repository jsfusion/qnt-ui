import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Icon from '..';

configure({ adapter: new Adapter() });

let wrapper;
const props = {
  id: 'test_icon_id',
  icon: 'endorsed',
  size: 32,
  color: 'red',
};

describe('***--- Icon Component ---***', () => {
  beforeAll(() => {
    wrapper = shallow(<Icon {...props} />);
  });

  it('To match snapshot of Icon component', async (done) => {
    expect(wrapper).toMatchSnapshot();
    done();
  });
});
