import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Image from '..';

configure({ adapter: new Adapter() });

let wrapper;
const props = {
  id: 'test_image_id',
};

describe('***--- Image Component ---***', () => {
  beforeAll(() => {
    wrapper = shallow(<Image {...props} />);
  });

  it('To match snapshot of Image component', async (done) => {
    expect(wrapper).toMatchSnapshot();
    done();
  });
});