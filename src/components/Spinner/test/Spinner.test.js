import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Spinner from '..';

configure({ adapter: new Adapter() });

let wrapper;
const props = {
  id: 'test_spinner_id',
};

describe('***--- Spinner Component ---***', () => {
  beforeAll(() => {
    wrapper = shallow(<Spinner {...props} />);
  });

  it('To match snapshot of Spinner component', async (done) => {
    expect(wrapper).toMatchSnapshot();
    done();
  });
});