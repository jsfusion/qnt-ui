import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchInput from '..';

configure({ adapter: new Adapter() });

let wrapper;
const props = {
  id: 'test_searchinput_id',
  value: 'test',
  placeholder: 'Custom search',
  onChange: () => {console.log('Search onChange()')},
};

describe('***--- SearchInput Component ---***', () => {
  beforeAll(() => {
    wrapper = shallow(<SearchInput {...props} />);
  });

  it('To match snapshot of SearchInput component', async (done) => {
    expect(wrapper).toMatchSnapshot();
    done();
  });
});